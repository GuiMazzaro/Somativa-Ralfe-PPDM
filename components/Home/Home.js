import { Text, View } from 'react-native';
import HomeStyle from './HomeStyle';

function Home() {
  return (
    <View style={HomeStyle.container}>
      <Text style={HomeStyle.text}>Desenvolvido por Danyelly Silveira e Guilherme Santos</Text>
    </View>
  );
}

export default Home

