import React, { memo } from 'react'

import { Background, Logo, Header, Button, Paragraph } from '../components'

const HomeScreen = ({ navigation }: any) => (
    <Background>
        <Logo />
        <Header>Login Template</Header>

        <Paragraph>
            The easiest way to start with your amazing application.
        </Paragraph>
        <Button
            mode="contained"
            onPress={() => navigation.navigate('LoginScreen')}>
            Login
        </Button>
        <Button
            mode="outlined"
            onPress={() => navigation.navigate('RegisterScreen')}>
            Sign Up
        </Button>
    </Background>
)

export default memo(HomeScreen)
