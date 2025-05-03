import React from 'react';
import { TouchableOpacity, Text, Image, View, StyleSheet } from 'react-native';

interface ContinueButtonProps {
  onPress?: () => void;
  disabled?: boolean;
  text?: string;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ 
  onPress, 
  disabled = false,
  text = "DEVAM ET"
}) => {
  return (
    <TouchableOpacity 
      style={styles.button} 
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Image 
        source={require('../../assets/images/buton-arka-plan.png')} 
        style={styles.backgroundImage} 
      />
      <View style={styles.contentContainer}>
        <Image 
          source={require('../../assets/images/kuslar.png')} 
          style={styles.birdsImage} 
        />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: 5,
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'contain',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  birdsImage: {
    width: 90,
    height: 30,
    resizeMode: 'contain',
    marginBottom: 5,
  },
  buttonText: {
    color: '#FFFF00',
    fontSize: 16,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
    textAlign: 'center',
  }
});

export default ContinueButton; 