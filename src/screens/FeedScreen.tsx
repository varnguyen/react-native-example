import React, { memo } from 'react'

import { Text, View } from 'react-native'

const FeedScreen = () => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Feed!</Text>
    </View>
)

export default memo(FeedScreen)
