import React, { memo } from 'react'

import { Text, View } from 'react-native'

const ProfileScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Profile!</Text>
    </View>
)

export default memo(ProfileScreen)
