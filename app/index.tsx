import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useState } from 'react';

export default function Index() {
  const [clicked, setClicked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hellow Gwendolyn</Text>

      <Image
        source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thepinknews.com%2Fwp-content%2Fuploads%2F2024%2F05%2FBlahaj.jpg&f=1&nofb=1&ipt=1ff19b801a236c2074255184f8e0e4433a45177a91ccd2c50b1f91f219f2a610' }}
        style={styles.image}
      />

      <Text style={styles.substitle}>
        {clicked ? "You clicked the button!" : "This is the first view"}
      </Text>

      <Button
        title="click me!"
        onPress={() => setClicked(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 18,
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
});