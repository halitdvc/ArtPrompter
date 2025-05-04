import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  ActivityIndicator,
  TextInput, 
  ImageBackground,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { 
  promptFlowSteps, 
  getStepByKey, 
  getNextStepKey, 
  INITIAL_STEP, 
  PromptSelections 
} from '../../prompt/promptFlow';
import ArtCardGrid from '../atoms/ArtCardGrid';
import ContinueButton from '../atoms/ContinueButton';
import { ArtMovement } from '../atoms/ArtCard';

const PromptFlow = ({ navigation }) => {
  const [currentStepKey, setCurrentStepKey] = useState(INITIAL_STEP);
  const [selections, setSelections] = useState<PromptSelections>({});
  const [customText, setCustomText] = useState('');
  const [language, setLanguage] = useState('');
  const [mainObject, setMainObject] = useState('');
  const [wordCount, setWordCount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    initSelections();
  }, []);

  const initSelections = () => {
    // Her kategori için boş seçim dizileri oluştur
    const initialSelections = {};
    Object.keys(promptFlowSteps).forEach(key => {
      initialSelections[key] = [];
    });
    setSelections(initialSelections);
  };

  const currentStep = getStepByKey(currentStepKey);

  const handleSelect = (index: number) => {
    if (!currentStep) return;
    
    const optionId = currentStep.options[index].id;
    
    // Kart seçildiğinde özel metni temizle
    setCustomText('');
    
    setSelections(prev => {
      const updatedSelections = { ...prev };
      
      // Özel metin seçeneğini kaldır
      delete updatedSelections[`${currentStepKey}_custom`];
      
      if (currentStep?.multiple) {
        // Çoklu seçim modu
        if (updatedSelections[currentStepKey].includes(optionId)) {
          // Seçiliyse kaldır
          updatedSelections[currentStepKey] = updatedSelections[currentStepKey].filter(id => id !== optionId);
        } else {
          // Seçili değilse ekle
          updatedSelections[currentStepKey] = [...updatedSelections[currentStepKey], optionId];
        }
      } else {
        // Tekli seçim modu
        updatedSelections[currentStepKey] = [optionId];
      }
      
      return updatedSelections;
    });
  };

  const handleContinue = () => {
    if (currentStep) {
      // Ana nesne adımında özel işlem yapalım
      if (currentStepKey === 'mainObject') {
        // Ana nesne metni girilmiş mi kontrol et
        if (mainObject.trim()) {
          setSelections(prev => ({
            ...prev,
            mainObject_custom: [mainObject]
          }));
        }
      } 
      // Dil adımında özel işlem yapalım
      else if (currentStepKey === 'promptLanguage') {
        if (customText.trim()) {
          setSelections(prev => ({
            ...prev,
            promptLanguage_custom: [customText],
            // promptLanguage_custom yerine language_custom olarak da kaydedelim
            // böylece eski kodla uyumlu olacak
            language_custom: [customText]
          }));
          setLanguage(customText);
        }
      }
      // Kelime sayısı adımında özel işlem yapalım
      else if (currentStepKey === 'wordCount') {
        if (wordCount.trim()) {
          setSelections(prev => ({
            ...prev,
            wordCount_custom: [wordCount]
          }));
        }
      }
      // Diğer tüm adımlarda özel metin kontrolü yap
      else if (customText.trim()) {
        //console.log(`Özel değer ekleniyor: ${currentStepKey}_custom = ${customText}`);
        setSelections(prev => {
          const updated = {
            ...prev,
            [`${currentStepKey}_custom`]: [customText]
          };
          //console.log('Güncellenmiş seçimler:', updated);
          return updated;
        });
      }
      
      const nextKey = getNextStepKey(currentStepKey);
      if (nextKey) {
        setCurrentStepKey(nextKey);
        setCustomText(''); // Metni temizle
      } else {
        // Son adıma gelindi, sonuç sayfasına git
        handleSubmit();
      }
    }
  };

  const handleBack = () => {
    // Önceki adıma geri dön
    const allSteps = Object.keys(promptFlowSteps);
    const currentIndex = allSteps.indexOf(currentStepKey);
    
    if (currentIndex > 0) {
      setCurrentStepKey(allSteps[currentIndex - 1]);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      // API tipini ve anahtarını kontrol et
      const apiType = await AsyncStorage.getItem('API_TYPE') || 'cohere';
      const apiKey = await AsyncStorage.getItem(`${apiType.toUpperCase()}_API_KEY`);
      
      if (!apiKey) {
        navigation.navigate('Login');
        return;
      }

      // Son seçimleri kullan, customText'i son adımda ekle
      const finalSelections = { ...selections };
      
      // Özel olarak son adımın kelime sayısı değerini tekrar kontrol edelim
      if (currentStepKey === 'wordCount' && wordCount.trim()) {
        finalSelections.wordCount_custom = [wordCount];
      }
      
      // Gönderilecek seçimleri loglayalım
      //console.log('Son seçimler:', finalSelections);
      
      // Sonuç sayfasına git ve seçimleri parametre olarak gönder
      navigation.navigate('PromptResult', { selections: finalSelections });
    } catch (error) {
      console.error('Gönderim hatası:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const isOptionSelected = (optionId: string) => {
    return selections[currentStepKey]?.includes(optionId) || false;
  };

  if (!currentStep) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Adım bulunamadı!</Text>
      </View>
    );
  }

  const isDigerSelected = selections[currentStepKey]?.includes('diger') || false;

  // Görsel dosyasından gelen prompts options listeyi ArtCardGrid için uygun formata dönüştür
  const artMovements: ArtMovement[] = currentStep.options.map((option, index) => {
    // Renk paletini belirle: turuncu, gri, sarı, mavi sırasıyla
    const cardColors = ['#FF8C42', '#9DA3A4', '#FFD046', '#5FB2FF'];
    const colorIndex = index % cardColors.length;
    
    return {
      title: option.title,
      subtitle: option.title, // Subtitle olarak title kullanıyoruz
      description: option.description,
      color: isOptionSelected(option.id) ? '#8A2BE2' : cardColors[colorIndex],
      image: option.image,
      id: option.id
    };
  });

  const handleLogout = async () => {
    try {
      const apiType = await AsyncStorage.getItem('API_TYPE') || 'cohere';
      await AsyncStorage.removeItem(`${apiType.toUpperCase()}_API_KEY`);
      await AsyncStorage.removeItem('API_TYPE');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Çıkış yapma hatası:', error);
    }
  };

  // TextInput onChange fonksiyonunu özelleştirelim, her değişiklikte selection objesine eklesin
  const handleCustomTextChange = (text: string) => {
    setCustomText(text);
    
    // Eğer metin boş değilse, hemen selections objesine ekleyelim
    if (text.trim()) {
      // Dil adımında ise language state'ini de güncelleyelim
      if (currentStepKey === 'promptLanguage') {
        setLanguage(text);
      }
      
      setSelections(prev => ({
        ...prev,
        [`${currentStepKey}_custom`]: [text],
        // Metin yazıldığında kart seçimlerini temizle
        [currentStepKey]: []
      }));
      //console.log(`Anlık güncelleme - ${currentStepKey}_custom = ${text}`);
    } else {
      // Metin boşsa, custom değeri kaldır
      setSelections(prev => {
        const updated = { ...prev };
        delete updated[`${currentStepKey}_custom`];
        return updated;
      });
      
      // Dil adımında ise language state'ini de temizleyelim
      if (currentStepKey === 'promptLanguage') {
        setLanguage('');
      }
    }
  };
  
  // Ana nesne değişikliğini de anlık olarak işleyelim
  const handleMainObjectChange = (text: string) => {
    setMainObject(text);
    
    if (text.trim()) {
      setSelections(prev => ({
        ...prev,
        mainObject_custom: [text]
      }));
      //console.log(`Anlık güncelleme - mainObject_custom = ${text}`);
    }
  };
  
  // Kelime sayısı değişikliğini de anlık olarak işleyelim
  const handleWordCountChange = (text: string) => {
    setWordCount(text);
    
    if (text.trim()) {
      setSelections(prev => ({
        ...prev,
        wordCount_custom: [text]
      }));
      //console.log(`Anlık güncelleme - wordCount_custom = ${text}`);
    }
  };

  return (
    <ImageBackground 
      source={require('../../assets/images/arkaPlan.png')} 
      style={styles.background}
    >
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={handleLogout}
      >
        <Text style={styles.logoutButtonText}>Çıkış</Text>
      </TouchableOpacity>
      
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerCenter}>
            <Text style={styles.title}>Art Promter</Text>
            <Text style={styles.stepTitle}>{currentStep.title}</Text>
            <Text style={styles.description}>
              {currentStep.multiple ? 
                'Birden fazla seçim yapabilirsiniz.' : 
                'Seçim yapmak zorunlu değildir.'}
            </Text>
          </View>
        </View>

        {currentStep.description && (
          <View style={styles.stepDescriptionContainer}>
            <Text style={styles.stepNumber}>{Object.keys(promptFlowSteps).indexOf(currentStepKey) + 1}. {currentStep.title}</Text>
            <Text style={styles.stepDescription}>{currentStep.description}</Text>
          </View>
        )}
        
        <View style={styles.cardsContainer}>
          {currentStepKey !== 'mainObject' && currentStepKey !== 'itemsToAdd' && currentStepKey !== 'itemsToAvoid' && currentStepKey !== 'wordCount' && currentStepKey !== 'promptLanguage' && (
            <>
              <ArtCardGrid 
                artMovements={artMovements} 
                onSelectCard={handleSelect}
              />
              
              <View style={styles.blueInputBar}>
                <View style={styles.circleIndent} />
                <TextInput
                  style={styles.blueInputText}
                  placeholder={`Veya kendi ${currentStep.title.toLowerCase()} değerinizi girin`}
                  placeholderTextColor="rgba(255, 255, 255, 0.7)"
                  value={customText}
                  onChangeText={handleCustomTextChange}
                />
              </View>
            </>
          )}
        </View>
        
        {currentStepKey === 'promptLanguage' && (
          <>
            <ArtCardGrid 
              artMovements={artMovements} 
              onSelectCard={handleSelect}
            />
            
            {/* <View style={styles.languageInfoContainer}>
              <View style={styles.circleIndent} />
              <Text style={styles.languageInfoText}>
                {language.trim() !== '' ? 
                  `Ana adımda seçtiğiniz dil: ${language}` : 
                  "Henüz bir dil seçilmedi veya girilmedi"}
              </Text>
            </View> */}
            
            {/* <View style={styles.blueInputBar}>
              <View style={styles.circleIndent} />
              <TextInput
                style={styles.blueInputText}
                placeholder="Lütfen prompt dilini belirtiniz"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                value={customText}
                onChangeText={handleCustomTextChange}
              />
            </View> */}
          </>
        )}
        
        {currentStepKey === 'mainObject' && (
          <>
            <View style={styles.blueInputBar}>
              <View style={styles.circleIndent} />
              <TextInput
                style={styles.blueInputText}
                placeholder="Ana nesne olarak ne görmek istiyorsunuz?"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                value={mainObject}
                onChangeText={handleMainObjectChange}
              />
            </View>
          </>
        )}
        
        {currentStepKey === 'wordCount' && (
          <View style={styles.blueInputBar}>
            <View style={styles.circleIndent} />
            <TextInput
              style={styles.blueInputText}
              placeholder="Kelime sayısını girin (örn: 20, 30, 50)"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              value={wordCount}
              onChangeText={handleWordCountChange}
              keyboardType="numeric"
            />
          </View>
        )}
        
        {currentStepKey === 'itemsToAdd' && (
          <View style={styles.blueInputBar}>
            <View style={styles.circleIndent} />
            <TextInput
              style={styles.blueInputText}
              placeholder="Eklemek istediğiniz öğeleri virgülle ayırarak yazın"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              value={customText}
              onChangeText={handleCustomTextChange}
            />
          </View>
        )}
        
        {currentStepKey === 'itemsToAvoid' && (
          <View style={styles.blueInputBar}>
            <View style={styles.circleIndent} />
            <TextInput
              style={styles.blueInputText}
              placeholder="Eklemek istemediğiniz öğeleri virgülle ayırarak yazın"
              placeholderTextColor="rgba(255, 255, 255, 0.7)"
              value={customText}
              onChangeText={handleCustomTextChange}
            />
          </View>
        )}
        
        <View style={styles.buttonsContainer}>
          {currentStepKey !== INITIAL_STEP && (
            <TouchableOpacity
              style={styles.backButton}
              onPress={handleBack}
            >
              <Text style={styles.backButtonText}>GERİ</Text>
            </TouchableOpacity>
          )}
          
          <ContinueButton
            onPress={handleContinue}
            disabled={isLoading}
          />
        </View>
      </ScrollView>
      
      {isLoading && (
        <View style={styles.overlay}>
          <ActivityIndicator size={36} color="#8A2BE2" />
        </View>
      )}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
  },
  header: {
    marginBottom: 20,
  },
  headerCenter: {
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
  stepTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 5,
    textAlign: 'center',
  },
  description: {
    fontSize: 14,
    color: '#DDD',
    textAlign: 'center',
    marginBottom: 10,
  },
  stepDescriptionContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 16,
    marginHorizontal: 10,
  },
  stepNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFF00',
    marginBottom: 5,
    textAlign: 'center',
  },
  stepDescription: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 20,
  },
  cardsContainer: {
    marginBottom: 16,
  },
  blueInputBar: {
    backgroundColor: '#4287f5',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    padding: 2,
    height: 40,
  },
  circleIndent: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
    marginLeft: 5,
    marginRight: 10,
  },
  blueInputText: {
    flex: 1,
    color: 'white',
    fontSize: 14,
    marginRight: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  backButton: {
    backgroundColor: '#444',
    padding: 15,
    borderRadius: 30,
    marginRight: 20,
  },
  backButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageInfoContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 16,
    marginHorizontal: 10,
  },
  languageInfoText: {
    fontSize: 14,
    color: '#FFFFFF',
    textAlign: 'center',
    lineHeight: 20,
  },
  languageHighlight: {
    fontWeight: 'bold',
    color: '#FFFF00',
  },
  logoutButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    zIndex: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 0, 0, 0.6)',
  },
  logoutButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default PromptFlow; 