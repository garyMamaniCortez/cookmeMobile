import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Alert, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import { useReceta } from '@/hooks/useReceta';
import { RecetaResponse } from '@/interfaces/api/Receta';
import { useUsuario } from '@/hooks/useUsuario';
import { UsuarioResponse } from '@/interfaces/api/User';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { useNavigation } from '@react-navigation/native';
import { usePostValoracion } from '@/hooks/useValoracion';
import { Globals } from '@/constants/global';

const RecipeScreen: React.FC< {route: any} > = ({route}) => {
    const [id_receta, setIdReceta] = useState<number>(1);
    const navigation = useNavigation<any>();
    const {data, error} = useReceta(id_receta? id_receta : 1);
    const { data:user, error:userError } = useUsuario(data?.id_usuario!? data?.id_usuario! : 1);
    const [ usuario, setUsuario ] = useState<UsuarioResponse | null>(null);
    const [ receta, setReceta ] = useState<RecetaResponse | null>(null);
    const [ instruccionesLista, setInstruccionesLista ] = useState<string[]>();
    const [ ingredientesLista, setIngredientesLista ] = useState<string[]>();
    const [isSaved, setIsSaved] = useState(false);
    const [isHeartLiked, setIsHeartLiked] = useState(false);
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [isRatingSubmitted, setIsRatingSubmitted] = useState<boolean>(false);

    useEffect(() => {
        setIdReceta(route.params.id_receta);
        setReceta(data);
        setUsuario(user);
        setIsRatingSubmitted(false);
    });
    useEffect(() => {
        if(receta){
            const list = (text:string) => {
                return text.split(',').map(item => item.trim());
            }
            const instrucciones = list(receta?.instrucciones!);
            const ingredientes = list(receta?.ingredientes!);
            setInstruccionesLista(instrucciones);
            setIngredientesLista(ingredientes);
            setSelectedRating(receta.promedio_valoracion!);
        }
    },[receta]);
    const renderList = (item:string) => {
        return(
            <Text key={item} style={styles.text}> • {item}</Text>
        )
    }
    const goToMessages = () => {
        navigation.navigate('Message', { id_receta });
    };
    const toggleSave = () => {
        setIsSaved(!isSaved);
    };
    const toggleHeart = () => {
        setIsHeartLiked(!isHeartLiked);
    }
    const goBack = () => {
        navigation.navigate('Home');
    };
    const handleStarPress = async (rating: number) => {
        if (Globals.email){
            setSelectedRating(rating);
            const val = {
                id_receta:  id_receta,
                id_usuario: Globals.id_usuario,
                valoracion: rating
            };
            const {valoracion, error} = await usePostValoracion(val);
            if(valoracion)
                setIsRatingSubmitted(true);
        }else{
            Alert.alert(
                "Sesión requerida",
                "Necesitas iniciar sesión para continuar.",
                [
                  {
                    text: "Cancelar",
                    style: "cancel",
                  },
                  {
                    text: "Ir a Login",
                    onPress: () => navigation.navigate('Login'),
                  },
                ],
                { cancelable: false }
              );
        }
    };

    if(receta && usuario){
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
                        <TouchableOpacity onPress={toggleHeart}>
                            <Ionicons name={isHeartLiked ? "heart" : "heart-outline"} size={24} color={isHeartLiked ? 'red' : 'black'} />
                        </TouchableOpacity>
                    </View>
                </View>

                <TouchableOpacity onPress={goToMessages} style={{ marginBottom: 20, marginTop:10 }}>
                    <MaterialIcons name="add-comment" size={24} color="black" />
                </TouchableOpacity>
                {/* Subheader */}
                <View style={styles.subHeader}>
                    <Text style={styles.subtitle}>Por: {usuario?.nombre_usuario}</Text>
                    <View style={styles.stars}>
                        {[1, 2, 3, 4, 5].map((rating) => (
                            <TouchableOpacity
                            key={rating}
                            onPress={() => handleStarPress(rating)}
                            disabled={isRatingSubmitted} // Deshabilitar si ya se envió la valoración
                            >
                            <Ionicons
                                name="star"
                                size={20}
                                color={rating <= (selectedRating || receta.promedio_valoracion!) ? "#FFD700" : "#CCC"}
                            />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <Image
                    source={{
                        uri: receta?.imagen || 'https://th.bing.com/th/id/R.29d71f83ddc95f2e0ed25142e2cf80ab?rik=uWWhOJerW9gHYA&riu=http%3a%2f%2fforevertwentysomethings.com%2fwp-content%2fuploads%2f2016%2f10%2ftacos.jpg&ehk=%2b4em9gTW65oi2Fbr8uJdc5XILlgBOD5y9YE%2f9IlmSoo%3d&risl=&pid=ImgRaw&r=0', // Coloca aquí tu URL de imagen o ruta local
                    }}
                    style={styles.image}
                />

                <View style={styles.contentContainer}>
                    <View style={styles.dynamicBox}>
                        <View style={styles.tittleBox}>
                            <Text style={styles.boxText}>Descripccion</Text>
                        </View>
                        <Text style={styles.text}>{receta?.descripcion}</Text>
                    </View>
                    <View style={styles.dynamicBox}>
                        <View style={styles.tittleBox}>
                            <Text style={styles.boxText}>Ingredientes</Text>
                        </View>
                        {ingredientesLista?.map(instruccion => renderList(instruccion))}
                    </View>
                    <View style={styles.dynamicBox}>
                        <View style={styles.tittleBox}>
                            <Text style={styles.boxText}>Tiempos</Text>
                        </View>
                        <Text style={styles.text}>Tiempo de preparacion: {receta?.tiempo_preparacion} minutos</Text>
                        <Text style={styles.text}>Tiempo de coccion: {receta?.tiempo_coccion} minutos</Text>
                    </View>
                    <View style={styles.dynamicBox}>
                        <View style={styles.tittleBox}>
                            <Text style={styles.boxText}>Pasos a seguir</Text>
                        </View>
                        {instruccionesLista?.map(instruccion => renderList(instruccion))}
                    </View>
                </View>
            </ScrollView>
        );
    }else{
        return(
            <ErrorScreen error={error? error! : userError!} />
        );
    }
};

export default RecipeScreen;