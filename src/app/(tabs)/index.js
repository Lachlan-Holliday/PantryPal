import { View } from "react-native";
import { Avatar, Button, Card, Text } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />


export default function App() {
  return (
    <View
      style={{
        flex: 1,
        margin: 16
       
      }}>

<Card>
<Card.Cover source={{ uri: 'https://picsum.photos/700' }} />

    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Text variant="titleLarge">Card title</Text>
      <Text variant="bodyMedium">Card content</Text>
    </Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card> 
  <Text variant="titleLarge">hello</Text>
      </View>
  );
}
 


