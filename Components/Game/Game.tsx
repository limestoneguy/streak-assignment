import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import AppText from '../AppText/AppText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import GameCode from './Components/GameCode';
import axios, { Axios, } from 'axios';
import { getAuthHeader } from '../../Utils/helper';
import { style } from './Game.style';
import { handleAPIError } from '../../exceptions/api.exceptions';

function Game() {
    const [otp, setOtp] = useState();
    useEffect(() => {
        getOtp();
    }, []);

    function getOtp() {
        axios.get('https://production.streakcard.click/test/getlist', {
            headers: getAuthHeader()
        }).then(val => {
            setOtp(val.data.data)
        }).catch(handleAPIError)
    }


    return (
        <View style={style.gameContainer}>
            <View style={style.prizeContainer}>
                <AppText style={style.gameTitle}>Game of the day</AppText>
                <View style={{ marginBottom: 20 }}>
                    <GameCode code={otp} />
                </View>
                <AppText style={style.prizeText}>Win prizes worth ₹4000 or more. </AppText>
                <TouchableOpacity style={style.luckButtonContainer} onPress={getOtp}>
                    <AppText style={style.luckText}>Try your luck</AppText>
                </TouchableOpacity>
            </View>
            <View style={style.goalContainer}>
                <AppText style={style.viewGoalTitle}>Add and view goals</AppText>
                <FontAwesomeIcon icon={faCaretRight} style={style.caretStyle} />
            </View>
        </View>
    )
}

export default Game