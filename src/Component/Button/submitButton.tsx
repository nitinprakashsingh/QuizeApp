import React from 'react';
import { TouchableOpacity, Text,} from 'react-native';

interface SubmitButtonProps {
    onPress: () => void;
    title: string;
    style: object;
    textStyle: any;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onPress, title,style,textStyle }) => {
    return (
        <TouchableOpacity style={style} onPress={onPress}>
            <Text style={textStyle}>{title}</Text>
        </TouchableOpacity>
    );
};

export default SubmitButton;