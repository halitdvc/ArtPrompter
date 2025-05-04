import AsyncStorage from '@react-native-async-storage/async-storage';
import { PromptSelections } from './promptFlow';
import { createTemplatedPrompt, createTemplatedPrompt2, postProcessPrompt } from './promptTemplate';

export type MultiplePromptSelections = {
  [key: string]: string[];
};

export async function generatePrompt(selections: MultiplePromptSelections): Promise<string> {
  try {
    // API anahtarını AsyncStorage'dan al
    const apiKey = await AsyncStorage.getItem('COHERE_API_KEY');
    
    if (!apiKey) {
      throw new Error('API anahtarı bulunamadı. Lütfen giriş yapın.');
    }

    // Template kullanarak prompt oluştur
    const promptTemplate = createTemplatedPrompt(selections);
    console.log("promptTemplate", promptTemplate);

    // Fetch API kullanarak doğrudan istek gönder
    const response = await fetch('https://api.cohere.ai/v1/generate', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'command',
        prompt: promptTemplate,
        max_tokens: 300,
        temperature: 0.5,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API hatası: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    console.log("response", data);
    return postProcessPrompt(data.generations[0].text.trim());
  } catch (error) {
    console.error('Prompt oluşturma hatası:', error);
    throw error;
  }
}

// Alternatif template kullanarak prompt oluşturan fonksiyon
export async function generatePrompt2(selections: MultiplePromptSelections): Promise<string> {
  try {
    // API anahtarını AsyncStorage'dan al
    const apiKey = await AsyncStorage.getItem('COHERE_API_KEY');
    
    if (!apiKey) {
      throw new Error('API anahtarı bulunamadı. Lütfen giriş yapın.');
    }

    // Template2 kullanarak prompt oluştur
    const promptTemplate = createTemplatedPrompt2(selections);
    console.log("promptTemplate2", promptTemplate);

    // Fetch API kullanarak doğrudan istek gönder
    const response = await fetch('https://api.cohere.ai/v1/generate', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'command',
        prompt: promptTemplate,
        max_tokens: 300,
        temperature: 0.5,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API hatası: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    console.log("response", data);
    return postProcessPrompt(data.generations[0].text.trim());
  } catch (error) {
    console.error('Prompt oluşturma hatası:', error);
    throw error;
  }
} 