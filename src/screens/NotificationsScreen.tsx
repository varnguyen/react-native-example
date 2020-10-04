import React, { memo } from 'react'

import { Text, View } from 'react-native'

const NotificationsScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Notifications!</Text>
    </View>
)

export default memo(NotificationsScreen)
