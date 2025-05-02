import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface SubmitButtonProps {
    onPress: () => void;
    title: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress, title }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#00316B',
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        height: 45,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 20,
        marginBottom: 15
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default SubmitButton;