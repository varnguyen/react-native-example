import React, { memo, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { theme } from '../core/theme'
import { emailValidator, passwordValidator, nameValidator } from '../core/utils'
import {
    Background,
    BackButton,
    TextInput,
    Header,
    ButtonCustom,
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

        navigation.navigate('Home')
    }

    return (
        <Background>
            <BackButton goBack={() => navigation.navigate('LoginScreen')} />

            <Header>Create Account</Header>

            <Text style={styles.subTitle}>Create your account</Text>

            <TextInput
                label="Username"
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

            <ButtonCustom
                raised
                mode="main"
                title={`Sign Up`}
                style={styles.button}
                onPress={_onSignUpPressed}
            />

            <View style={styles.term}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.link}>Terms & Conditions</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'RegisterScreen' }],
                        })
                    }>
                    <Text style={styles.link}>Log in your account</Text>
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
        marginTop: 30,
    },
    term: {
        flexDirection: 'row',
        marginTop: 30,
    },
    link: {
        color: theme.colors.link,
    },
    subTitle: {
        color: theme.colors.secondary,
    },
    footer: {
        flexDirection: 'row',
        marginTop: 4,
        position: 'absolute',
        bottom: 50,
    },
})

export default memo(RegisterScreen)
