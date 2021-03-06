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
} from 'react-native'

import { theme } from '../core/theme'
import { ButtonCustom } from '../components'
const introList = [
    {
        src: './../assets/John-wick-chapter-2.jpg',
        title: 'Quick Search',
        description:
            'Set your location to start exploring restaurants around you',
    },
    {
        src: './../assets/John-wick-chapter-2.jpg',
        title: 'Variety of food',
        description:
            'Set your location to start exploring restaurants around you',
    },
    {
        src: './../assets/John-wick-chapter-2.jpg',
        title: 'Search for a place',
        description:
            'Set your location to start exploring restaurants around you',
    },
    {
        src: './../assets/John-wick-chapter-2.jpg',
        title: 'Fast shipping',
        description:
            'Set your location to start exploring restaurants around you',
    },
]

const IntroItem = ({
    src,
    title,
    description,
    width,
    height,
    navigation,
}: any) => {
    return (
        <View
            style={{
                width,
                height,
                ...styles.itemView,
            }}>
            <Image
                source={require('./../assets/John-wick-chapter-2.jpg')}
                style={styles.imageStyle}
            />
            <View style={styles.wrapper}>
                <Text style={styles.header}>{title}</Text>
                <Text style={styles.paragraph}>{description}</Text>
            </View>
            <ButtonCustom
                raised
                title={`Login`}
                onPress={() =>
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'LoginScreen' }],
                    })
                }
            />
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
            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
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
                            navigation={navigation}
                        />
                    ))}
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
    container: {
        flex: 1,
        backgroundColor: theme.colors.main,
    },
    scrollView: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageStyle: {
        height: PixelRatio.getPixelSizeForLayoutSize(135),
        width: '100%',
        maxWidth: 150,
        maxHeight: 150,
    },
    itemView: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        padding: 10,
    },
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 50,
    },
    header: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    paragraph: {
        fontSize: 17,
        paddingHorizontal: 5,
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
        backgroundColor: theme.colors.white,
        marginLeft: 10,
    },
})

export default IntroSreen
