import React from 'react'
import { View, Text, Button } from 'react-native'

const LoginScreen = ({ navigation }: any) => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Register"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    )
}

export default LoginScreen
