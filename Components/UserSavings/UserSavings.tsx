import React from 'react'
import { Text, View } from 'react-native'
import AppText from '../AppText/AppText'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function UserSavings() {
    return (
        <View style={{ borderRadius: 10, overflow: 'hidden', backgroundColor: '#F5F7FB', borderColor: '#00000019', borderWidth: 1 }}>

            <View style={{ paddingVertical: 20, paddingHorizontal: 14, borderColor: '#00000019', borderBottomWidth: 1 }}>
                <AppText style={{ color: '#112854', fontWeight: 'bold', fontSize: 18, paddingBottom: 10, }}>Andy's Savings</AppText>
                <AppText style={{ color: '#5682AB', fontSize: 18, fontWeight: '600' }}>Saved a total of
                    <AppText style={{ color: '#112854', fontWeight: '600' }}> ₹6,480 </AppText>
                    this month and is close to achieving one goal</AppText>

                <View style={{ padding: 20, backgroundColor: 'white', borderRadius: 10, marginTop: 20 }}>
                    <View style={{ borderLeftWidth: 2, borderLeftColor: '#58698C4B', paddingLeft: 12 }}>
                        <AppText style={{ fontSize: 18, fontWeight: 600, color: '#58698C' }}>Playstation 5 </AppText>
                        <AppText style={{ color: '#668EB3', fontSize: 18, fontWeight: 600, }}> <AppText style={{ color: '#112854', fontWeight: 600 }}> ₹36,480 saved</AppText> of ₹40,000 goal </AppText>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: '#EEF1F3', padding: 20, flexDirection: 'row', alignItems: 'center' }}>
                <AppText style={{ color: '#5770A4', fontWeight: 600, fontSize: 18 }}>Add and view goals</AppText>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: '#5770A4', transform: [{ translateY: 2 }] }} />
            </View>
        </View>
    )
}

export default UserSavings