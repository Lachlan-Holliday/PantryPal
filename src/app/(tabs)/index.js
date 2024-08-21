import { View } from "react-native";
import { Button, Text } from 'react-native-paper';



export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>

        <Text>Edit app</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Press me
  </Button>
      </View>
  );
}
 


