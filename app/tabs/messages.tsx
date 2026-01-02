import { StyleSheet, View } from 'react-native';
import Button from '../components/Button';

export default function Messages() {
  return (
    <View style={styles.container}>
       <View style={styles.footerContainer}>
              <Button label="Choose a photo" />
              <Button label="Use this photo" />
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#0c0133ff',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
