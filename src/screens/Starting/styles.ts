import { View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ConteinerTop = styled(View)`
flex: 1;
align-items: center;
justify-content: center;
background-color: #fff
`;

export const Conteiner = styled(View)`
flex-direction: row;
align-items: center;
justify-content: space-between
margin-top: 350px;
`;

export const Title = styled(Text)`
text-align: center;
color: #000;
font-size: 22px
`;

export const ConteinerButtom = styled(View)`
flex: 1;
flex-direction: column;
align-items: center;
justify-content: flex-end;
width: 50px;
height: 50px
`;

export const Btn = styled(TouchableOpacity)`
flex-direction: column;
align-items: center;
justify-content: flex-end
`;

export const TextButtom = styled(Text)`
font-size: 12px;
color: #0093ff;
`;