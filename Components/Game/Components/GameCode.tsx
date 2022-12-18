import React from 'react'
import { Text, View } from 'react-native'
import AppText from '../../AppText/AppText';

function GameCode({ code }: { code?: string }) {
    if (!code || code?.length > 4) code = '8886';
    return (
        <View style={{ borderRadius: 20, borderWidth: 4, borderColor: '#9A24280F', padding: 17, flexDirection: 'row' }}>
            {[...code].map((val, index) => <View key={Math.random()} style={{ backgroundColor: '#DA9B7C4D', marginRight: index === 3 ? 0 : 10, padding: 6, borderRadius: 8 }}>
                <View style={{ padding: 10, backgroundColor: '#F1CFB6' }}>
                    <AppText style={{ fontSize: 60, fontWeight: 600, color: '#9E5535' }}>{val}</AppText>
                </View>
            </View>)}
        </View>
    )
}

export default GameCode