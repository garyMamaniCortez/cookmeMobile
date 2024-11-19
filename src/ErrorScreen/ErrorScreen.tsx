import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles';

interface ErrorScreenProps {
    error: string;
}

const ErrorScreen: React.FC<ErrorScreenProps> = ({error}) => {
  return (
    <View style={styles.errorView}>
        <Text style={styles.error}>
          Algo salio mal :c {error}
        </Text>
    </View>
  )
}

export default ErrorScreen;
