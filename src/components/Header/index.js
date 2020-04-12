import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { Container, Top, Logo, Title } from './styles';

import logo from '../../../assets/Nubank_Logo.png'

Icon.loadFont();
export default function Header() {


    return (

        <Container>

            <Top>
                <Logo source={logo} />
                <Title>Daniel</Title>
            </Top>
            <Icon name="keyboard-arrow-down" size={20} color="#FFF" />

        </Container>

    );
}
