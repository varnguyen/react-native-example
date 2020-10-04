import React, { memo, useState } from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'

import { theme } from '../core/theme'
import { emailValidator, passwordValidator } from '../core/utils'
import { Background, TextInput, ButtonCustom, Header } from '../components'

const LoginScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState({ value: '', error: '' })
    const [password, setPassword] = useState({ value: '', error: '' })

    const _onLoginPressed = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({ ...email, error: emailError })
            setPassword({ ...password, error: passwordError })
            return
        }

        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        })
    }

    return (
        <Background>
            <Header>Log in</Header>
            <TextInput
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text: any) =>
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
                onChangeText={(text: any) =>
                    setPassword({ value: text, error: '' })
                }
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
            />
            <View style={styles.forgotPassword}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'ForgotPasswordScreen' }],
                        })
                    }>
                    <Text style={styles.label}>Forgot password?</Text>
                </TouchableOpacity>
            </View>
            <ButtonCustom
                raised
                mode="main"
                title={`Login`}
                onPress={_onLoginPressed}
            />
            <View style={styles.row}>
                <TouchableOpacity
                    onPress={() =>
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'RegisterScreen' }],
                        })
                    }>
                    <Text style={styles.link}>Sign up an account</Text>
                </TouchableOpacity>
            </View>
        </Background>
    )
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
        position: 'absolute',
        bottom: 50,
    },
    label: {
        color: theme.colors.link,
    },
    link: {
        color: theme.colors.link,
    },
})

export default memo(LoginScreen)
