import React from 'react'
import { Text } from 'react-native'
import { useFonts } from 'expo-font';
import { IBMPlexMono_400Regular, IBMPlexMono_700Bold, IBMPlexMono_600SemiBold } from '@expo-google-fonts/ibm-plex-mono';
import { Barlow_400Regular, Barlow_600SemiBold, Barlow_700Bold } from '@expo-google-fonts/barlow';

const IBMFontFamily = {
    400: 'IBMPlexMono_400Regular',
    bold: 'IBMPlexMono_700Bold',
    600: 'IBMPlexMono_600SemiBold'
}
const BarlowFontFamily = {
    400: 'Barlow_400Regular',
    bold: 'Barlow_700Bold',
    600: 'Barlow_600SemiBold'
}


function AppText({ children, style, fontFamily }: { children?, style?: any, fontFamily?: 'barlow' | 'ibm' }) {
    const [loaded] = useFonts({
        IBMPlexMono_700Bold,
        IBMPlexMono_400Regular,
        IBMPlexMono_600SemiBold,

        Barlow_400Regular,
        Barlow_600SemiBold,
        Barlow_700Bold
    });

    if (!loaded) return null;

    const weight = style?.fontWeight ?? '400';
    let family;
    switch (fontFamily) {
        case 'barlow':
            family = BarlowFontFamily;
            break;
        case 'ibm':
            family = IBMFontFamily;
            break;

        default:
            family = BarlowFontFamily;
            break;
    }

    return (
        <Text style={{ ...style, fontFamily: family[weight], }}>{children}</Text>
    )
}

export default AppText