import { StatusBar } from 'expo-status-bar';
import React, { useReducer } from 'react';
import { View, ImageBackground, ScrollView } from 'react-native';
import { INITIAL_DASHBOARD_STATE, handleDashboardActions } from './Reducers/dashboardReducer';
import { containerSpacing, dashboardStyles } from './dashboardStyles';
import Navbar from './Components/navbar';
import UserBalance from './Components/userBalance/userBalance';
import { MAGENTA } from './colorVariables.styles';
import AppText from './Components/AppText/AppText';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faExpand, faArrowUp, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import UserTransactions from './Components/UserTransactions/UserTransactions';
import Footer from './Components/footer/footer';
import UserSavings from './Components/UserSavings/UserSavings';
import Game from './Components/Game/Game';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withDelay } from 'react-native-reanimated';
import { animationDuration } from './Utils/helper';

export default function App() {
    const [state, dispatchAction] = useReducer(handleDashboardActions, INITIAL_DASHBOARD_STATE);


    const sharedValue = useSharedValue(1);
    const scanButtonAnimationValue = useSharedValue(0);
    const layoutAnimationValue = { transformValue: useSharedValue(1), opacity: useSharedValue(0) };




    const opacityAnimationStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(sharedValue.value, { duration: animationDuration.MEDIUM }, (finished) => {
                if (finished && sharedValue.value === 1) {

                    scanButtonAnimationValue.value = 1;
                }
            })
        }
    }, []);

    const scanAnimationStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(scanButtonAnimationValue.value, { duration: animationDuration.MEDIUM }, (finished) => {
                if (finished && scanButtonAnimationValue.value === 1) {


                    layoutAnimationValue.transformValue.value = 0;
                    layoutAnimationValue.opacity.value = 1;
                }
            })
        }
    }, []);

    const layoutTransformAnimationStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: withTiming(layoutAnimationValue.transformValue.value * 50, { duration: animationDuration.MEDIUM }, (finished, current) => {
                    if (finished) {

                    }
                })
            }],

        }
    }, []);
    const layoutOpacityAnimationStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(layoutAnimationValue.opacity.value, { duration: animationDuration.MEDIUM }, (finished, current) => {
                if (finished) {

                }
            }),
        }
    }, []);

    return (
        <View>
            <ScrollView>
                <View style={[dashboardStyles.mainHeader]}>
                    <Animated.View style={[opacityAnimationStyle]}>
                        <ImageBackground source={require('./assets/main_background.png')} style={{ paddingHorizontal: 12 }}>
                            <Navbar />
                            <UserBalance />
                            <View style={{ flexDirection: 'row', paddingBottom: 22, justifyContent: 'space-between' }}>
                                <Animated.View style={[{ borderRadius: 11, flexDirection: 'row', backgroundColor: MAGENTA, paddingHorizontal: 33, paddingVertical: 11, alignItems: 'center' }, scanAnimationStyle]}>
                                    <AppText style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Scan code</AppText>
                                    <View style={{ marginLeft: 12, position: 'relative', padding: 11 }}>
                                        <View style={{ opacity: 0.2, backgroundColor: 'white', borderRadius: 50, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
                                        <FontAwesomeIcon icon={faExpand} style={{ color: 'white' }} />
                                    </View>
                                </Animated.View>
                                <Animated.View style={[dashboardStyles.buttonStyle, layoutOpacityAnimationStyle]}>
                                    <View style={{ opacity: 0.4, backgroundColor: MAGENTA, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
                                    <FontAwesomeIcon icon={faArrowUp} size={24} style={{ color: 'white', transform: [{ rotate: '45deg' }] }} />
                                </Animated.View>
                                <Animated.View style={[dashboardStyles.buttonStyle, layoutOpacityAnimationStyle]}>
                                    <View style={{ opacity: 0.4, backgroundColor: MAGENTA, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
                                    <FontAwesomeIcon icon={faEllipsis} size={24} style={{ color: 'white' }} />
                                </Animated.View>
                            </View>
                        </ImageBackground>
                    </Animated.View>

                    <Animated.View style={[containerSpacing, layoutTransformAnimationStyle, layoutOpacityAnimationStyle]}>
                        <UserTransactions />
                    </Animated.View>
                    <Animated.View style={[containerSpacing, layoutTransformAnimationStyle, layoutOpacityAnimationStyle]}>
                        <UserSavings />
                    </Animated.View>
                    <Animated.View style={[containerSpacing, layoutTransformAnimationStyle, layoutOpacityAnimationStyle]}>
                        <Game />
                    </Animated.View>
                </View>
                <Footer />
            </ScrollView>
        </View>
    );
}
