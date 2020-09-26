import React from 'react'
import { View, Text, Button } from 'react-native'

const ForgotScreen = ({ navigation }: any) => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate('Login')}
            />
        </View>
    )
}

export default ForgotScreen
