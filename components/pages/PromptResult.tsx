import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ActivityIndicator, 
  TouchableOpacity, 
  ImageBackground,
  ScrollView,
  Share,
  Alert,
  TextInput,
  Platform
} from 'react-native';
import * as Clipboard from 'expo-clipboard';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { generatePrompt as cohereGeneratePrompt, generatePrompt2 as cohereGeneratePrompt2, MultiplePromptSelections } from '../../prompt/cohere';
import { generatePrompt as openaiGeneratePrompt, generatePrompt2 as openaiGeneratePrompt2 } from '../../prompt/openai';
import { PromptSelections } from '../../prompt/promptFlow';
import ContinueButton from '../atoms/ContinueButton';

// Platform bağımlı olarak ActivityIndicator size değerini belirle
const ACTIVITY_INDICATOR_SIZE = 36;

const PromptResult = ({ route, navigation }) => {
  const { selections } = route.params;
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [apiType, setApiType] = useState('cohere');

  useEffect(() => {
    getApiTypeAndGeneratePrompt();
  }, []);

  const getApiTypeAndGeneratePrompt = async () => {
    try {
      const storedApiType = await AsyncStorage.getItem('API_TYPE');
      if (storedApiType) {
        setApiType(storedApiType);
      }
      generatePromptFromSelections(storedApiType || 'cohere');
    } catch (error) {
      console.error('API tipini alma hatası:', error);
      generatePromptFromSelections('cohere'); // Varsayılan olarak Cohere kullan
    }
  };

  const generatePromptFromSelections = async (currentApiType) => {
    setLoading(true);
    setError('');
    
    try {
      // Debug: Teslim alınan seçimleri yazdır
      //console.log("PromptResult - Gelen seçimler:", selections);
      
      // PromptSelections tipini MultiplePromptSelections tipine dönüştür
      const formattedSelections: MultiplePromptSelections = {};
      
      // Sadece seçim yapılmış kategorileri dahil et
      Object.keys(selections).forEach(key => {
        if (selections[key] && selections[key].length > 0) {
          formattedSelections[key] = selections[key];
        }
        
        // _custom değerlerini de ekleyelim
        const customKey = `${key}_custom`;
        if (selections[customKey] && selections[customKey].length > 0) {
          formattedSelections[customKey] = selections[customKey];
        }
      });
      
      // Debug: Formatlanmış seçimleri yazdır
      //console.log("PromptResult - Formatlanmış seçimler:", formattedSelections);
      
      // API türüne göre prompt oluştur
      let generatedPrompt = '';
      if (currentApiType === 'openai') {
        generatedPrompt = await openaiGeneratePrompt2(formattedSelections);
      } else {
        generatedPrompt = await cohereGeneratePrompt2(formattedSelections);
      }
      
      setPrompt(generatedPrompt);
      
      // Kelime sayısını hesapla
      const words = generatedPrompt.trim().split(/\s+/);
      setWordCount(words.length);
    } catch (error) {
      console.error('Prompt oluşturma hatası:', error);
      setError('Prompt oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: prompt,
        title: 'PromptForge ile oluşturulan prompt'
      });
    } catch (error) {
      Alert.alert('Hata', 'Paylaşım sırasında bir hata oluştu.');
    }
  };

  const handleTryAgain = () => {
    generatePromptFromSelections(apiType);
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRestart = () => {
    // En üstteki sayfaya dön (PromptFlow)
    navigation.reset({
      index: 0,
      routes: [{ name: 'PromptFlow' }]
    });
  };

  const handleCopy = async () => {
    try {
      await Clipboard.setStringAsync(prompt);
      Alert.alert('Kopyalandı', 'Prompt panoya kopyalandı!');
    } catch (error) {
      console.error('Kopyalama hatası:', error);
      Alert.alert('Hata', 'Prompt kopyalanırken bir hata oluştu.');
    }
  };
  
  return (
    <ImageBackground 
      source={require('../../assets/images/arkaPlan.png')} 
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Art Promter</Text>
          <Text style={styles.subtitle}>Oluşturulan Prompt</Text>
          <Text style={styles.apiInfo}>
            {apiType === 'cohere' ? 'Cohere AI' : 'OpenAI GPT'} kullanılıyor
          </Text>
        </View>

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator 
              size={ACTIVITY_INDICATOR_SIZE} 
              color="#8A2BE2" 
            />
            <Text style={styles.loadingText}>Prompt oluşturuluyor...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity style={styles.button} onPress={handleTryAgain}>
              <Text style={styles.buttonText}>Tekrar Dene</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.resultContainer}>
            <Text style={styles.wordCountText}>Kelime Sayısı: {wordCount}</Text>
            
            <View style={styles.promptContainer}>
              <ScrollView style={{ flex: 1 }}>
                <Text style={styles.promptText}>
                  {prompt}
                </Text>
              </ScrollView>
            </View>
            
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.actionButton} onPress={handleCopy}>
                <Text style={styles.actionButtonText}>Kopyala</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton} onPress={handleShare}>
                <Text style={styles.actionButtonText}>Paylaş</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionButton} onPress={handleTryAgain}>
                <Text style={styles.actionButtonText}>Yenile</Text>
              </TouchableOpacity>
            </View>
            
            <View style={styles.navigationContainer}>
              <ContinueButton 
                text="GERİ DÖN" 
                onPress={handleGoBack}
              />
              
              <ContinueButton 
                text="BAŞA DÖN" 
                onPress={handleRestart}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFF00',
    marginBottom: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    color: '#FFF',
    marginBottom: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  apiInfo: {
    fontSize: 14,
    color: '#AAA',
    marginBottom: 15,
    fontStyle: 'italic',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    color: '#FFF',
    marginTop: 10,
    fontSize: 16,
  },
  errorContainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
  },
  errorText: {
    color: '#FF6B6B',
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8A2BE2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  resultContainer: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
  },
  wordCountText: {
    color: '#AAA',
    marginBottom: 10,
    textAlign: 'right',
  },
  promptContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 5,
    padding: 15,
    marginBottom: 20,
    height: 400,
  },
  promptText: {
    color: '#FFF',
    fontSize: 16,
    lineHeight: 24,
    padding: 10,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: 'rgba(138, 43, 226, 0.8)',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  actionButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default PromptResult; 