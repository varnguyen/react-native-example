import React, { memo } from 'react'
import {
    View,
    // ImageBackground,
    StyleSheet,
    KeyboardAvoidingView,
} from 'react-native'

import { theme } from '../core/theme'

const Background = ({ children }: any) => (
    // <ImageBackground
    // source={require('../assets/background_dot.png')}
    // resizeMode="repeat"
    // style={styles.background}>
    // </ImageBackground>
    <View style={styles.background}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {children}
        </KeyboardAvoidingView>
    </View>
)

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.white,
    },
    container: {
        flex: 1,
        padding: 0,
        width: '100%',
        maxWidth: 350,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

export default memo(Background)
