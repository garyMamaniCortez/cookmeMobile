import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import { useReceta } from '@/hooks/useReceta';
import { RecetaResponse } from '@/interfaces/api/Receta';

interface Comment {
  id: string;
  user: string;
  text: string;
}

const CommentsScreen: React.FC<{ route: any }> = ({route}) => {
  
  const {id_receta} = route.params || 1;

  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>(''); 

  const [isHeartLiked, setIsHeartLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const {data, error} = useReceta(id_receta? id_receta : 1);
  const [ receta, setReceta ] = useState<RecetaResponse | null>(null);
  useEffect(() => {
      setReceta(data);
  });

  const navigation = useNavigation<any>();

  const goBack = () => {
    navigation.navigate("Recipe", { id_receta: 2 });
  };

  const toggleSave = () => {
    setIsSaved(!isSaved);
  };

  const addComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: Date.now().toString(),  // Usamos la fecha actual como ID único
        user: 'Usuario',            
        text: newComment.trim(),
      };
      setComments((prevComments) => [...prevComments, newCommentObj]);
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
            <View key={comment.id} style={styles.commentBox}>
              <Text style={styles.commentText}>
                <Text style={{ fontWeight: 'bold' }}>{comment.user}: </Text>
                {comment.text}
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
