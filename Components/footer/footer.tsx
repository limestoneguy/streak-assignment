import React from 'react'
import { Image, View } from 'react-native'
import AppText from '../AppText/AppText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { style } from './footer.style';

function Footer() {
    return (
        <View style={{ marginTop: 40, paddingHorizontal: 12, position: 'relative', height: 90 }}>
            <View style={style.parentalControlButton}>
                <AppText style={style.parentalControlText}>Parental Controls</AppText>
                <FontAwesomeIcon icon={faGear} style={style.gearIcon} />
            </View>
            <Image style={style.img} source={require('../../assets/footer.png')} />
        </View>
    )
}

export default Footer