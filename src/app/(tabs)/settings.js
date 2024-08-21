import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useTheme } from '../../hooks/useTheme'

const Settings = () => {
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

const styles = StyleSheet.create({})
export default Settings

