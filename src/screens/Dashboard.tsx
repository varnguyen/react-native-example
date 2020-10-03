import React, { memo } from 'react'

import { Background, Logo, Header, Paragraph, Button } from '../components'

const Dashboard = ({ navigation }: any) => (
    <Background>
        <Logo />
        <Header>Let’s start</Header>
        <Paragraph>
            Your amazing app starts here. Open you favourite code editor and
            start editing this project.
        </Paragraph>
        <Button
            mode="outlined"
            onPress={() => navigation.navigate('HomeScreen')}>
            Logout
        </Button>
    </Background>
)

export default memo(Dashboard)
