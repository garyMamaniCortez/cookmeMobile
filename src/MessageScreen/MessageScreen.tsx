import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { useReceta } from '@/hooks/useReceta';
import { RecetaResponse } from '@/interfaces/api/Receta';
import { ComentarioRequest, ComentarioResponse } from '@/interfaces/api/Comentario';
import { useComentario, usePostComentario } from '@/hooks/useComentario';
import { Globals } from '@/constants/global';

const CommentsScreen: React.FC<{ route: any }> = ({route}) => {
  
  const [id_receta, setIdReceta] = useState<number>(1);

  const [comments, setComments] = useState<ComentarioResponse[]>([]);
  const [newComment, setNewComment] = useState<string>(''); 

  const [isHeartLiked, setIsHeartLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const {data, error} = useReceta(id_receta? id_receta : 1);
  const {data:comentarios, error:comentariosError} = useComentario(id_receta? id_receta : 1);
  const [ receta, setReceta ] = useState<RecetaResponse | null>(null);
  useEffect(() => {
      setIdReceta(route.params.id_receta);
      setReceta(data);
      if(comentarios)
        setComments(comentarios);
  });

  const navigation = useNavigation<any>();

  const goBack = () => {
    navigation.navigate("Recipe", { id_receta });
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const addComment = async () => {
    if (newComment.trim()) {
      const newCommentObj: ComentarioRequest = {
        id_receta:  id_receta,
        id_usuario: Globals.id_usuario,
        comentario: newComment,
      };
      const newCommentObject: ComentarioResponse = {
        id_comentario: 0,
        id_receta:  id_receta,
        id_usuario: Globals.id_usuario,
        comentario: newComment,
        fecha: new Date(),
        usuario: {nombre_usuario: Globals.nombre_usuario}
      }
      const {comentario, error } = await usePostComentario(newCommentObj);
      comentarios?.push(newCommentObject);
      if(error){
        alert(newCommentObj.id_receta);
      }
      setNewComment('');  // Limpiamos el campo de texto
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <StatusBar style="dark" backgroundColor="transparent" translucent={false} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
            <Ionicons name="return-down-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>{receta?.nombre_receta}</Text>
        <View style={styles.headerIcons}>
            <TouchableOpacity onPress={toggleSave}>
                <Ionicons name={isSaved ? "bookmark" : "bookmark-outline"} size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsHeartLiked(!isHeartLiked)}>
                <Ionicons name={isHeartLiked ? "heart" : "heart-outline"} size={24} color={isHeartLiked ? 'red' : 'black'} />
            </TouchableOpacity>
        </View>
      </View>

      {/* Imagen destacada */}
      <Image
        style={styles.image}
        source={{
          uri: 'https://th.bing.com/th/id/R.29d71f83ddc95f2e0ed25142e2cf80ab?rik=uWWhOJerW9gHYA&riu=http%3a%2f%2fforevertwentysomethings.com%2fwp-content%2fuploads%2f2016%2f10%2ftacos.jpg&ehk=%2b4em9gTW65oi2Fbr8uJdc5XILlgBOD5y9YE%2f9IlmSoo%3d&risl=&pid=ImgRaw&r=0',  // URL de la imagen
        }} 
        resizeMode="cover"
      />

      {/* Lista de comentarios */}
      <View style={styles.commentsSection}>
        {comments.length === 0 ? (
          <Text style={{ textAlign: 'center', color: '#777', marginTop: 20 }}>
            No hay comentarios aún. ¡Sé el primero en comentar!
          </Text>
        ) : (
          comments.map((comment) => (
            <View key={comment.id_comentario} style={styles.commentBox}>
              <Text style={styles.commentText}>
                <Text style={{ fontWeight: 'bold' }}>{comment.usuario.nombre_usuario}: </Text>
                {comment.comentario}
              </Text>
            </View>
          ))
        )}
      </View>

      {/* Entrada de comentario */}
      <View style={styles.commentInputSection}>
        <TextInput
          style={styles.commentInput}
          placeholder="Comentar..."
          placeholderTextColor="#777"
          value={newComment}
          onChangeText={setNewComment}
        />
        <TouchableOpacity style={styles.sendButton} onPress={addComment}>
          <Ionicons name="send" size={20} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CommentsScreen;
