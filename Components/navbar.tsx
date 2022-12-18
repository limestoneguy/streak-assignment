import React from 'react'
import { View, Image } from 'react-native'
import { dashboardStyles } from '../dashboardStyles'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import AppText from './AppText/AppText';

function Navbar() {
    return (
        <View style={dashboardStyles.nav}>
            <Image source={require('../assets/app_logo.png')} style={dashboardStyles.logo} resizeMode={'contain'} />
            <View style={dashboardStyles.profileDropList}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=40&h=40&q=80' }} style={dashboardStyles.profile} />
                <AppText style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>Andy</AppText>
                <FontAwesomeIcon icon={faCaretDown} style={{ color: 'white' }} />
            </View>
        </View>
    )
}

export default Navbar