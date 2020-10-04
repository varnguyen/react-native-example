import React, { memo } from 'react'
import { StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'

import { theme } from '../core/theme'

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
        backgroundColor: theme.colors.white,
    },
    title: {
        textAlign: 'center',
        color: theme.colors.black,
        width: '100%',
    },
    buttonMain: {
        backgroundColor: theme.colors.main,
    },
    titleMain: {
        textAlign: 'center',
        color: theme.colors.white,
        width: '100%',
    },
})

export default memo(ButtonCustom)
