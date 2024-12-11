import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './styles';
import { StatusBar } from 'expo-status-bar';
import { Navbar } from '@/components';
import { LinearGradient } from 'expo-linear-gradient';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import { Globals } from '@/constants/global';
import { useNotificaciones } from '@/hooks/useUsuario';
import { Notificaciones } from '@/interfaces/api/User';

const NotificationScreen: React.FC = () => {
  const notificaciones = useNotificaciones(Globals.id_usuario)
  const renderItem = ({ item }: { item: Notificaciones }) => (
    <View style={styles.notificationCard}>
      <Text style={styles.notificationText}>{item.usuario}{item.accion}{item.receta}{item.text}</Text>
    </View>
  );
  if(notificaciones)
    return (
      <>
        <LinearGradient
            colors={['transparent', '#F6DBC5']}
            style={styles.container} >
            <StatusBar style="dark" backgroundColor="transparent" translucent={false} />
              <View>
                {notificaciones.length === 0 ? (
                  <Text style={{ textAlign: 'center', color: '#777', marginTop: 40 }}>
                    No tienes notificaciones todavia
                  </Text>
                ) : (
                  <FlatList
                    data={notificaciones}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    contentContainerStyle={styles.list}
                  />
                )}
              </View>
        </LinearGradient>
        <Navbar />
      </>
    );
  else
    return (
      <ErrorScreen error={"error"} />
    );
};

export default NotificationScreen;
