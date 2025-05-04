import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  ImageBackground, 
  Alert,
  ActivityIndicator
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [apiKey, setApiKey] = useState('');
  const [loading, setLoading] = useState(false);
  const [initialCheck, setInitialCheck] = useState(true);
  const [selectedApi, setSelectedApi] = useState('cohere'); // 'cohere' veya 'openai'

  // Uygulama açıldığında API anahtarı kontrol edilir
  useEffect(() => {
    const checkApiKey = async () => {
      try {
        const storedApiType = await AsyncStorage.getItem('API_TYPE');
        if (storedApiType) {
          const storedApiKey = await AsyncStorage.getItem(`${storedApiType.toUpperCase()}_API_KEY`);
          if (storedApiKey) {
            navigation.replace('PromptFlow');
          }
        }
      } catch (error) {
        console.error('API anahtarı kontrolünde hata:', error);
      } finally {
        setInitialCheck(false);
      }
    };

    checkApiKey();
  }, [navigation]);

  const handleLogin = async () => {
    if (!apiKey.trim()) {
      Alert.alert('Hata', `Lütfen ${selectedApi === 'cohere' ? 'Cohere' : 'OpenAI'} API anahtarını girin.`);
      return;
    }

    setLoading(true);
    try {
      let isValid = false;

      if (selectedApi === 'cohere') {
        // Cohere API anahtarı doğrulama
        const response = await fetch('https://api.cohere.ai/v1/tokenize', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            text: 'Test'
          }),
        });
        isValid = response.ok;
      } else {
        // OpenAI API anahtarı doğrulama
      
        // OpenAI API anahtarı doğrulama
        try {
          const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: [
                { role: 'system', content: 'Sen bir test asistanısın.' },
                { role: 'user', content: 'Merhaba, bu bir testtir.' }
              ],
              max_tokens: 5,
            }),
          });
          isValid = response.ok;
        } catch (error) {
          console.error('API doğrulama hatası:', error);
          isValid = false;
        }
      }
      

      if (isValid) {
        // API anahtarı ve API türü AsyncStorage'a kaydedilir
        await AsyncStorage.setItem(`${selectedApi.toUpperCase()}_API_KEY`, apiKey);
        await AsyncStorage.setItem('API_TYPE', selectedApi);
        navigation.replace('PromptFlow');
      } else {
        Alert.alert('Hata', `Geçersiz ${selectedApi === 'cohere' ? 'Cohere' : 'OpenAI'} API anahtarı. Lütfen doğru anahtarı girin.`);
      }
    } catch (error) {
      console.error('Giriş hatası:', error);
      Alert.alert('Hata', 'Bağlantı hatası. Lütfen internet bağlantınızı kontrol edin.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('COHERE_API_KEY');
      await AsyncStorage.removeItem('OPENAI_API_KEY');
      await AsyncStorage.removeItem('API_TYPE');
      setApiKey('');
      Alert.alert('Başarılı', 'Çıkış yapıldı.');
    } catch (error) {
      console.error('Çıkış hatası:', error);
      Alert.alert('Hata', 'Çıkış yapılırken bir hata oluştu.');
    }
  };

  if (initialCheck) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={36} color="#8A2BE2" />
      </View>
    );
  }

  return (
    <ImageBackground 
      source={require('../../assets/images/arkaPlan.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Art Promter</Text>
        <Text style={styles.subtitle}>AI Prompt Oluşturucu</Text>
        
        <View style={styles.formContainer}>
          <Text style={styles.label}>AI Modelini Seçin</Text>
          <View style={styles.apiSelectorContainer}>
            <TouchableOpacity 
              style={[
                styles.apiSelector, 
                selectedApi === 'cohere' && styles.apiSelectorSelected
              ]} 
              onPress={() => setSelectedApi('cohere')}
            >
              <Text style={[
                styles.apiSelectorText,
                selectedApi === 'cohere' && styles.apiSelectorTextSelected
              ]}>Cohere</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[
                styles.apiSelector, 
                selectedApi === 'openai' && styles.apiSelectorSelected
              ]} 
              onPress={() => setSelectedApi('openai')}
            >
              <Text style={[
                styles.apiSelectorText,
                selectedApi === 'openai' && styles.apiSelectorTextSelected
              ]}>OpenAI</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>{selectedApi === 'cohere' ? 'Cohere' : 'OpenAI'} API Anahtarı</Text>
          <TextInput
            style={styles.input}
            placeholder="API anahtarınızı girin"
            placeholderTextColor="#666"
            value={apiKey}
            onChangeText={setApiKey}
            secureTextEntry
          />
          
          <TouchableOpacity 
            style={styles.loginButton} 
            onPress={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator size={24} color="white" />
            ) : (
              <Text style={styles.buttonText}>Giriş Yap</Text>
            )}
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.logoutButton} 
            onPress={handleLogout}
          >
            <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFFF00',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 30,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    color: '#FFF',
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 12,
    marginBottom: 20,
    color: '#000',
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#8A2BE2',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 10,
  },
  logoutButtonText: {
    color: '#AAA',
    fontSize: 14,
  },
  apiSelectorContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    width: '100%',
  },
  apiSelector: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  apiSelectorSelected: {
    backgroundColor: '#8A2BE2',
  },
  apiSelectorText: {
    color: '#EEE',
    fontWeight: '500',
  },
  apiSelectorTextSelected: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
