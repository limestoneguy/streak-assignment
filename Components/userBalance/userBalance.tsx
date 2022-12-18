import React, { useEffect } from 'react'
import { View, Text, ScrollView, ImageBackground } from 'react-native'
import { userBalanceStyles } from './userBalace.styles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { MAGENTA, PINK, PRIMARY } from '../../colorVariables.styles';
import AppText from '../AppText/AppText';
import { animationDuration, userBalanceAmount } from '../../Utils/helper';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

function UserBalance() {
    const sharedValue = useSharedValue(0.6);
    const balanceContainerAnimationStyle = useAnimatedStyle(() => {
        return {
            opacity: withTiming(sharedValue.value, { duration: animationDuration.SHORT }),
            transform: [{ scale: withTiming(sharedValue.value, { duration: animationDuration.SHORT }) }]
        }
    });

    useEffect(() => {
        sharedValue.value = 1;
    }, [])

    return (
        <Animated.View style={[userBalanceStyles.container, balanceContainerAnimationStyle]}>
            <View >
                <ImageBackground source={require('../../assets/balance_bg.png')} style={userBalanceStyles.imageBackground}>
                    <View style={userBalanceStyles.balanceContainer}>
                        <AppText style={userBalanceStyles.titleText}>Balance</AppText>
                        <View style={userBalanceStyles.eyeContainer}>
                            <FontAwesomeIcon icon={faEye} style={userBalanceStyles.color_primary} />
                        </View>
                    </View>
                    <AppText style={userBalanceStyles.balanceText} fontFamily='ibm'>{userBalanceAmount(12000)}</AppText>
                </ImageBackground>
            </View>
            <View style={userBalanceStyles.savingsContainer}>
                <AppText style={userBalanceStyles.savingTitle}>Savings</AppText>
                <View style={userBalanceStyles.savingTextRow}>
                    <AppText style={userBalanceStyles.savingText} fontFamily='ibm'>{userBalanceAmount(36800)}</AppText>
                    <View style={userBalanceStyles.savingButton}>
                        <AppText style={userBalanceStyles.saveButtonText}>Save More</AppText>
                    </View>
                </View>
            </View>
        </Animated.View>
    )
}

export default UserBalance