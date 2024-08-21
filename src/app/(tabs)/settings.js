import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import { useTheme } from '../../hooks/useTheme'

export default function Settings() {
    const {toggleTheme} = useTheme()

  return (
    <View style={{ margin: 16}}>
        <Text variant="titleLarge" style={{ marginVertical: 16}}>
            Settings
        </Text>
        <Button 
        icon="repeat"
        mode="contained"
        onPress={toggleTheme}>
            Toggle Theme
        </Button>
    </View>
  )
};
