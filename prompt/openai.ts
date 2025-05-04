import AsyncStorage from '@react-native-async-storage/async-storage';
import { PromptSelections } from './promptFlow';
import { createTemplatedPrompt, createTemplatedPrompt2, postProcessPrompt } from './promptTemplate';

export type MultiplePromptSelections = {
  [key: string]: string[];
};

export async function generatePrompt(selections: MultiplePromptSelections): Promise<string> {
  try {
    // API anahtarını AsyncStorage'dan al
    const apiKey = await AsyncStorage.getItem('OPENAI_API_KEY');
    
    if (!apiKey) {
      throw new Error('API anahtarı bulunamadı. Lütfen giriş yapın.');
    }

    // Template kullanarak prompt oluştur
    const promptTemplate = createTemplatedPrompt(selections);
    console.log("promptTemplate", promptTemplate);

    // OpenAI API'si için istek gönder - Burada completions endpoint'i kullanacağız çünkü daha az kısıtlaması var
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',messages: [
            { role: 'system', content: 'Sen bir sanat prompt asistanısın. Kullanıcıdan gelen yönergelere göre yaratıcı farkli bir ai da gorsel olusturmak icin promptlar üret.' },
            { role: 'user', content: promptTemplate }
          ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API hatası: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    console.log("response", data);
    return postProcessPrompt(data.choices[0].message.content.trim());

  } catch (error) {
    console.error('Prompt oluşturma hatası:', error);
    throw error;
  }
}

// Alternatif template kullanarak prompt oluşturan fonksiyon
export async function generatePrompt2(selections: MultiplePromptSelections): Promise<string> {
  try {
    // API anahtarını AsyncStorage'dan al
    const apiKey = await AsyncStorage.getItem('OPENAI_API_KEY');
    
    if (!apiKey) {
      throw new Error('API anahtarı bulunamadı. Lütfen giriş yapın.');
    }

    // Template2 kullanarak prompt oluştur
    const promptTemplate = createTemplatedPrompt2(selections);
    console.log("promptTemplate2", promptTemplate);

    // OpenAI API'si için istek gönder - Burada completions endpoint'i kullanacağız
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',messages: [
            { role: 'system', content: 'Sen bir sanat prompt asistanısın. Kullanıcıdan gelen yönergelere göre yaratıcı farkli bir ai da gorsel olusturmak icin promptlar üret.' },
            { role: 'user', content: promptTemplate }
          ],
        max_tokens: 500,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`API hatası: ${errorData.message || response.statusText}`);
    }

    const data = await response.json();
    console.log("response", data);
    return postProcessPrompt(data.choices[0].message.content.trim());

  } catch (error) {
    console.error('Prompt oluşturma hatası:', error);
    throw error;
  }
} 