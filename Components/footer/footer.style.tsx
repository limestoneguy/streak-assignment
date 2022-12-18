import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    parentalControlButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E5E5E54B',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 20,
        alignSelf: 'flex-end'
    },
    parentalControlText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#8D8D8D'
    },
    gearIcon: { marginLeft: 10, color: '#8D8D8D' },
    img:
        { position: 'absolute', left: 0, bottom: 0, top: 0 }

})