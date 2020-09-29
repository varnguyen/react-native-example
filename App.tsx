/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'

import App from './src'

const Main = () => {
    return (
        // <PaperProvider>
        <App />
        // </PaperProvider>
    )
}

export default Main
