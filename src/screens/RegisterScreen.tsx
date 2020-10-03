import React, { memo, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { theme } from '../core/theme'
import { emailValidator, passwordValidator, nameValidator } from '../core/utils'
import {
    Background,
    BackButton,
    TextInput,
    Logo,
    Header,
    Button,
} from '../components'

const RegisterScreen = ({ navigation }: any) => {
    const [name, setName] = useState({ value: '', error: '' })
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const _onSignUpPressed = () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)

        if (emailError || passwordError || nameError) {
            setName({ ...name, error: nameError })
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }

        navigation.navigate('Dashboard')
    }

    return (
        <Background>
            <BackButton goBack={() => navigation.navigate('HomeScreen')} />

            <Logo />

            <Header>Create Account</Header>

            <TextInput
                label="Name"
                returnKeyType="next"
                value={name.value}
                onChangeText={(text: string) =>
                    setName({ value: text, error: '' })
                }
                error={!!name.error}
                errorText={name.error}
            />

            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text: string) =>
                    setEmail({ value: text, error: '' })
                }
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
            />

            <TextInput
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text: string) =>
                    setPassword({ value: text, error: '' })
                }
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />

            <Button
                mode="contained"
                onPress={_onSignUpPressed}
                style={styles.button}>
                Sign Up
            </Button>

            <View style={styles.row}>
                <Text style={styles.label}>Already have an account? </Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    label: {
        color: theme.colors.secondary,
    },
    button: {
        marginTop: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})

export default memo(RegisterScreen)
