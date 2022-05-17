import { View, Image, Text } from 'react-native';
import styled from 'styled-components/native';

export const Conteiner = styled(View)`
flex: 1;
background-color: #fff;
align-items: center;
justify-content: center
`;

export const Img =styled(Image)`
width: 300px;
height: 380px
`;

export const Dreaw = styled(Text)`
color: #000;
text-align: center;
font-size: 25px;
margin-top: 30px
`;