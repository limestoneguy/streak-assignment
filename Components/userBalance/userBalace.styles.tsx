import { StyleSheet } from "react-native";
import {
    MAGENTA,
    PRIMARY
} from "../../colorVariables.styles";

export const userBalanceStyles = StyleSheet.create({
    container: {
        borderRadius: 16,
        backgroundColor: '#fff',
        marginBottom: 18,
        overflow: 'hidden'
    },

    imageBackground: {
        paddingTop: 14,
        paddingBottom: 34,
        paddingHorizontal: 20
    },
    balanceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        opacity: 0.5,
        fontSize: 18
    },
    eyeContainer: {
        borderRadius: 50,
        padding: 8,
        backgroundColor: '#9B97B629'
    },

    balanceText: {
        fontWeight: '600',
        fontSize: 30
    },

    color_primary: { color: PRIMARY },

    savingsContainer: {
        paddingHorizontal: 20,
        paddingVertical: 12,
        backgroundColor: `${PRIMARY}19`,
        borderTopWidth: 2,
        borderTopColor: '#98689819'
    },

    savingTitle: {
        color: `#681A6099`,
        fontWeight: '600',
        fontSize: 18
    },

    savingTextRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    savingText: {
        color: MAGENTA,
        fontWeight: '600',
        fontSize: 30
    },

    savingButton: {
        backgroundColor: '#CEA4CE4C',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
        alignItems: 'center'
    },

    saveButtonText: {
        fontWeight: '600',
        fontSize: 15,
        color: MAGENTA
    }
})