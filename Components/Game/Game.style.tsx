import { StyleSheet, TextStyle } from "react-native";

const titleStyle: TextStyle = {
    fontWeight: '600',
    fontSize: 18,
}

export const style = StyleSheet.create({
    gameContainer: {
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: '#FBF7F5',
        paddingTop: 20,
        borderColor: '#00000019',
        borderWidth: 1
    },
    gameTitle: {
        ...titleStyle,
        color: '#631E00',
        alignSelf: 'flex-start',
        paddingBottom: 20,
        paddingHorizontal: 14,
    },
    goalContainer: { backgroundColor: '#F2E9E12D', padding: 20, flexDirection: 'row', alignItems: 'center' },
    viewGoalTitle: { color: '#A3503E', ...titleStyle },
    caretStyle: {
        color: '#A3503E', transform: [{ translateY: 2 }]
    },
    luckButtonContainer: { borderRadius: 20, backgroundColor: '#AB604F', paddingHorizontal: 30, paddingVertical: 12, marginBottom: 20 },
    luckText: { ...titleStyle, color: 'white' },
    prizeText: { color: '#AB604F', ...titleStyle, paddingBottom: 20, paddingHorizontal: 14 },
    prizeContainer: { borderColor: '#00000019', borderBottomWidth: 1, alignItems: 'center' }
});