import React from 'react'
import { View } from 'react-native'
import AppText from '../../AppText/AppText'
import { userBalanceAmount } from '../../../Utils/helper'

function TransactionCard({ title, time, amount, backgroundColor }) {
    return (
        <View key={Math.random()} style={{ flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 14, borderBottomColor: '#00000019', borderBottomWidth: 1 }}>
            <View style={{ width: 50, height: 50, backgroundColor, borderRadius: 50 }}>

            </View>
            <View style={{ marginLeft: 16, flex: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <AppText style={{ fontWeight: 600, fontSize: 18 }}>{title}</AppText>
                    <AppText style={{ fontWeight: 600, fontSize: 18, color: amount > 0 ? '#00600A' : undefined }}>{userBalanceAmount(amount, true)}</AppText>
                </View>
                <AppText style={{ fontWeight: 600, fontSize: 14, opacity: 0.3 }}>{time}</AppText>
            </View>

        </View>
    )
}

export default TransactionCard