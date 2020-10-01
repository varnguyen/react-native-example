import React, { useState } from 'react'
import {
    Dimensions,
    PixelRatio,
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button as Buttonxxx,
} from 'react-native'

import Button from '../components/Button'

const introList = [
    {
        src: './../assets/John-wick-chapter-2.jpg',
        title: 'Quick Search',
        description: 'Const description react native chapter food wick John',
    },
    {
        src: './../assets/John-wick-chapter-2.jpg',
        title: 'Variety of food',
        description: 'Const description react native chapter food wick John',
    },
    {
        src: './../assets/John-wick-chapter-2.jpg',
        title: 'Search for a place',
        description: 'Const description react native chapter food wick John',
    },
    {
        src: './../assets/John-wick-chapter-2.jpg',
        title: 'Fast shipping',
        description: 'Const description react native chapter food wick John',
    },
]

const IntroItem = ({ src, title, description, width, height }: any) => {
    return (
        <View style={{ width, height }}>
            <Image
                source={require('./../assets/John-wick-chapter-2.jpg')}
                style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.paragraph}>{description}</Text>
            </View>
            <Button mode="contained" onPress={console.log('onPress')}>
                Login
            </Button>
        </View>
    )
}

const IntroSreen = ({ navigation }: any) => {
    const [sliderState, setSliderState] = useState({ currentPage: 0 })
    const { width, height } = Dimensions.get('window')

    const setSliderPage = (event: any) => {
        const { currentPage } = sliderState
        const { x } = event.nativeEvent.contentOffset
        const indexOfNextScreen = Math.floor(x / width)
        if (indexOfNextScreen !== currentPage) {
            setSliderState({
                ...sliderState,
                currentPage: indexOfNextScreen,
            })
        }
    }

    const { currentPage: pageIndex } = sliderState

    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffcc29' }}>
                <ScrollView
                    style={{ flex: 1 }}
                    horizontal={true}
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onScroll={(event: any) => {
                        setSliderPage(event)
                    }}>
                    {introList.map((item, index) => (
                        <IntroItem
                            key={index}
                            {...item}
                            width={width}
                            height={height}
                        />
                    ))}

                    {/* <View style={{ width, height }}>
                        <Image
                            source={require('./../assets/John-wick-chapter-2.jpg')}
                            style={styles.imageStyle}
                        />
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>
                                It's all about art
                            </Text>
                            <Text style={styles.paragraph}>
                                ... seriously, it is
                            </Text>
                            <Buttonxxx
                                title="Login"
                                onPress={() =>
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'LoginScreen' }],
                                    })
                                }
                            />
                        </View>
                    </View> */}
                </ScrollView>
                <View style={styles.paginationWrapper}>
                    {Array.from(Array(introList.length).keys()).map(
                        (key, index) => (
                            <View
                                style={[
                                    styles.paginationDots,
                                    { opacity: pageIndex === index ? 1 : 0.7 },
                                ]}
                                key={index}
                            />
                        ),
                    )}
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: PixelRatio.getPixelSizeForLayoutSize(135),
        width: '100%',
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 30,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 17,
    },
    paginationWrapper: {
        position: 'absolute',
        bottom: 100,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    paginationDots: {
        height: 10,
        width: 10,
        borderRadius: 10 / 2,
        backgroundColor: '#ffffff',
        marginLeft: 10,
    },
})

export default IntroSreen
