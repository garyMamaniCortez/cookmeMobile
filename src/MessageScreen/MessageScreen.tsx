import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import styles from './Styles';

// Definir el tipo para los comentarios
interface Comment {
  id: string;
  user: string;
  text: string;
}

const CommentsScreen: React.FC = () => {
  // Estado de los comentarios
  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <StatusBar style="dark" backgroundColor="transparent" translucent={false} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="return-down-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Tacos al Pastor</Text>
        <View style={styles.headerIcons}>
          {/* Ícono de Guardar */}
          <TouchableOpacity>
            <Ionicons name="bookmark-outline" size={24} color="black" />
          </TouchableOpacity>
          {/* Ícono de Corazón */}
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Imagen destacada */}
      <Image
        style={styles.image}
        source={{ uri: 'https://th.bing.com/th/id/R.29d71f83ddc95f2e0ed25142e2cf80ab?rik=uWWhOJerW9gHYA&riu=http%3a%2f%2fforevertwentysomethings.com%2fwp-content%2fuploads%2f2016%2f10%2ftacos.jpg&ehk=%2b4em9gTW65oi2Fbr8uJdc5XILlgBOD5y9YE%2f9IlmSoo%3d&risl=&pid=ImgRaw&r=0' }} // Cambia esto a una URL válida o recurso local
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
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={20} style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CommentsScreen;
