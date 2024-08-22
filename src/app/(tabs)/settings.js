import * as React from 'react';

import { View } from 'react-native'
import { Button, Text, Switch } from 'react-native-paper'
import { useTheme } from '../../hooks/useTheme'


export default function Settings() {
    const {toggleTheme} = useTheme();

    //switch
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const onToggleSwitch = () => {setIsSwitchOn(!isSwitchOn); toggleTheme()}



  return (
    <View style={{ margin: 16}}>
        <Text variant="titleLarge" style={{ marginVertical: 16}}>
            Settings
        </Text>
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} />
    </View>
  )
};
