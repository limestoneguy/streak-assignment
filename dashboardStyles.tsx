import { StyleSheet, Text, View } from 'react-native';
import { PRIMARY } from './colorVariables.styles';

export const containerSpacing = { paddingHorizontal: 12, marginTop: 30 }

export const dashboardStyles = StyleSheet.create({
    mainHeader: {
    },
    nav: {
        paddingTop: 50,
        paddingBottom: 15,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'

    },
    logo: {
        height: 40,
    },
    profileDropList: {
        borderRadius: 32,
        backgroundColor: PRIMARY,
        paddingLeft: 4,
        paddingRight: 8,
        paddingVertical: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    profile: {
        width: 30,
        height: 30,
        borderRadius: 50,
        marginRight: 5,
    },
    buttonStyle: {
        borderRadius: 11,
        flex: 1,
        paddingVertical: 11,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        marginLeft: 8
    }
});
