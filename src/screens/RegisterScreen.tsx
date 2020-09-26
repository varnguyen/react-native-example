import React from 'react'
import { View, Text, Button } from 'react-native'

const RegisterScreen = ({ navigation }: any) => {
    return (
        <View
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Forgot"
                onPress={() => navigation.navigate('Forgot')}
            />
        </View>
    )
}

export default RegisterScreen
