import React from 'react'
import { View } from 'react-native'
import { MAGENTA, PINK } from '../../colorVariables.styles'
import AppText from '../AppText/AppText'
import TransactionCard from './components/TransactionCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function UserTransactions() {
    const transactionArray = [
        { title: 'Food & Drinks', time: 'Jun - 4:30 PM', amount: -140, backgroundColor: '#BB97F459' },
        { title: 'Store sale', time: 'Jun - 4:30 PM', amount: 40, backgroundColor: '#BB97F459' },
        { title: 'Food & Drinks', time: 'Jun - 4:30 PM', amount: 140, backgroundColor: '#BB97F459' },
    ];
    return (
        <View style={{ borderRadius: 10, overflow: 'hidden', position: 'relative', backgroundColor: '#CCAACF33', paddingTop: 20, }}>
            <AppText style={{ color: MAGENTA, fontWeight: 'bold', fontSize: 18, paddingBottom: 10, paddingHorizontal: 14, }}>Recent Transactions</AppText>
            {transactionArray.map(TransactionCard)}
            <View style={{ paddingHorizontal: 14, flexDirection: 'row', alignItems: 'center', paddingVertical: 20, backgroundColor: '#EAE1F2' }}>
                <AppText style={{ color: PINK, fontWeight: 600, fontSize: 18 }}>All transactions</AppText>
                <FontAwesomeIcon icon={faCaretRight} style={{ color: PINK }} />
            </View>
        </View>
    )
}

export default UserTransactions