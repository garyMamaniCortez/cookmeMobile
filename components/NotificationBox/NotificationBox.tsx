import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { CommentBoxProps } from '@/interfaces/CommentBoxProps';

const NotificationBox: React.FC<CommentBoxProps> = ({ username, comment }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.username}>{username}:</Text>
            <Text style={styles.comment}>{comment}</Text>
        </View>
    );
};

export default NotificationBox;
