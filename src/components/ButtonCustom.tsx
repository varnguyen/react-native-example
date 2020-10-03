import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

const ButtonCustom = ({ mode = '', style, children, ...props }: any) => (
    <Button
        raised
        buttonStyle={mode === 'main' ? styles.buttonMain : styles.button}
        titleStyle={mode === 'main' ? styles.titleMain : styles.title}
        {...props}>
        {children}
    </Button>
)

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ffffff',
    },
    title: {
        textAlign: 'center',
        color: '#000000',
        width: '100%',
    },
    buttonMain: {
        backgroundColor: '#ffcc29',
    },
    titleMain: {
        textAlign: 'center',
        color: '#ffffff',
        width: '100%',
    },
})

export default memo(ButtonCustom)
