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
import { generatePrompt, createTemplatedPrompt, MultiplePromptSelections } from '../../prompt/cohere';
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
  const [textHeight, setTextHeight] = useState(200);
  const contentSizeChangedRef = useRef(false);

  useEffect(() => {
    generatePromptFromSelections();
  }, []);

  const generatePromptFromSelections = async () => {
    setLoading(true);
    setError('');
    
    try {
      // PromptSelections tipini MultiplePromptSelections tipine dönüştür
      const formattedSelections: MultiplePromptSelections = {};
      
      // Sadece seçim yapılmış kategorileri dahil et
      Object.keys(selections).forEach(key => {
        if (selections[key] && selections[key].length > 0) {
          formattedSelections[key] = selections[key];
        }
      });
      
      // Cohere API kullanarak prompt oluştur
      const generatedPrompt = await generatePrompt(formattedSelections);
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
    generatePromptFromSelections();
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
  
  // TextInput'un içeriğine göre yüksekliğini ayarla
  const onTextLayout = (e) => {
    if (contentSizeChangedRef.current) return;
    
    const { height } = e.nativeEvent.contentSize;
    const newHeight = Math.max(200, height + 40); // En az 200px yükseklik, içerik için 40px padding
    
    if (newHeight !== textHeight) {
      contentSizeChangedRef.current = true;
      setTextHeight(newHeight);
      // Reset the flag after the state update has been processed
      setTimeout(() => {
        contentSizeChangedRef.current = false;
      }, 100);
    }
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/arkaPlan.png')} 
      style={styles.background}
    >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>PromptForge</Text>
          <Text style={styles.subtitle}>Oluşturulan Prompt</Text>
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
            
            <View style={[styles.promptContainer, { minHeight: textHeight }]}>
              <TextInput 
                style={styles.promptText}
                value={prompt}
                multiline
                scrollEnabled={true}
                editable={false}
                onContentSizeChange={onTextLayout}
              />
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
    padding: 16,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFF00',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 10,
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  loadingText: {
    color: '#FFF',
    marginTop: 16,
    fontSize: 16,
  },
  errorContainer: {
    padding: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
    borderRadius: 8,
    alignItems: 'center',
  },
  errorText: {
    color: '#FFF',
    marginBottom: 16,
    textAlign: 'center',
  },
  resultContainer: {
    width: '100%',
  },
  wordCountText: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 10,
    textAlign: 'right',
  },
  promptContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    borderRadius: 8,
    padding: 16,
    marginBottom: 20,
    position: 'relative',
    overflow: 'hidden',
  },
  promptText: {
    color: '#FFF',
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
    textAlignVertical: 'top',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#8A2BE2',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
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
    alignItems: 'center',
    marginBottom: 20,
  },
  navButton: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  navButtonText: {
    color: '#FFF',
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
});

export default PromptResult; 