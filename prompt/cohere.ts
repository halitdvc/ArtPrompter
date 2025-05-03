import AsyncStorage from '@react-native-async-storage/async-storage';
import { PromptSelections } from './promptFlow';

export type MultiplePromptSelections = {
  [key: string]: string[];
};

// Template'e göre prompt oluşturan fonksiyon
export function createTemplatedPrompt(selections: PromptSelections): string {
  // Her kategori için ilk seçimi alır (veya boş bırakır)
  const getSelectionText = (key: string): string => {
    if (!selections[key] || selections[key].length === 0) {
      // Dil seçimi için özel kontrol
      if (key === 'promptLanguage' && selections['language_custom'] && selections['language_custom'].length > 0) {
        return selections['language_custom'][0];
      }
      
      // Ana nesne için özel kontrol
      if (key === 'mainObject' && selections['mainObject_custom'] && selections['mainObject_custom'].length > 0) {
        return selections['mainObject_custom'][0];
      }
      
      return '';
    }
    
    // Özel metin varsa onu kullan
    if (selections[`${key}_custom`] && selections[`${key}_custom`].length > 0) {
      // Eğer birden fazla öğe varsa hepsini virgülle birleştirerek döndür
      return selections[`${key}_custom`].join(', ');
    }
    
    // Birden fazla seçim varsa aralarına virgül koyarak birleştir
    return selections[key].join(', ');
  };
  const template2 = `Görsel eserler üreten bir yapay zeka programı için, aşağıda belirtilen öğeleri içeren bir prompt metni oluşturmanı istiyorum.
1) Görselin ana unsuru olarak (${getSelectionText('mainObject')}) belirle.
2) (${getSelectionText('artistStyle')}) sanatçının tarzını yansıtacak şekilde oluştur.
3) (${getSelectionText('digitalArtStyle')}) dijital sanat ve teknolojik tarzı yansıtsın.
4) Görselin kalitesini artırmak ve sanatsal yaratımı yönlendirmek için (${getSelectionText('artModification')}) sanat modifikasyonunda çalış.
5) Daha gerçekçi ve profesyonel bir estetik yaratmak için (${getSelectionText('photoRealism')}) fotogerçekçi modifikasyonu kullan.
6) Görselin atmosferini ve estetik etkisini doğrudan şekillendirecek olan (${getSelectionText('lightingMode')}) aydınlatmasını kullan.
7) Genel sanatsal yaklaşımı belirlemek için (${getSelectionText('artStyle')}) sanat stilini seç.
8) Görsel (${getSelectionText('environmentDetail')}) ortamı veya mekanı yansıtacak şekilde oluştur.
9) Görselin seyirci üzerinde yaratacağı duygusal etki ve tonunu (${getSelectionText('emotionTone')}) belirle.
10) (${getSelectionText('colorPalette')}) renk paletini kullanarak görseli renklendir
11) Görselin kompozisyonel ve perspektif yapısında (${getSelectionText('compositionPerspective')}) kullan.
12) İçerisinde (${getSelectionText('characterFigure')}) karakterler ve figürler bulunsun.
13) Görselde kullanılan zaman dilimi (${getSelectionText('time')}) olsun.
14) Görselde kullanılan semboller ve bu sembollerin taşıdığı anlamlar (${getSelectionText('symbolMeaning')}) olsun.
15) Görselin genel iklim ve havası (${getSelectionText('weather')}) yansıtmalı
16) Görselin en boy oranı (${getSelectionText('aspectRatio')}) olmalıdır.
17) Oluşturulacak görselin içerisine (${getSelectionText('itemsToAdd')}) unsurları yerleştir
18) Oluşturulacak görselin isteminde (${getSelectionText('itemsToAvoid')}) unsurları kullanma
19) Oluşturduğun prompt (${getSelectionText('promptLanguage')}) Dilinde yazılsın.
20) Oluşturduğun prompt (${getSelectionText('wordCount')}) Kelimeyi geçmesin.
+ Bu bilgilerle, doğrudan bir sanat yapay zekasına vereceğimiz, akıcı, detaylı ve tek parça bir prompt metni oluştur. Sadece doğrudan kullanılabilir bir prompt yaz. Listeleme yapma, sadece bir tam cümleler bütünü olarak üret.`;
  // Dinamik satırlar
  const itemsToAddText = getSelectionText('itemsToAdd');
  const itemsToAvoidText = getSelectionText('itemsToAvoid');

  let dynamicFields = '';
  if (itemsToAddText) {
    dynamicFields += `- Ekstra eklenecek öğeler: ${itemsToAddText}\n`;
  }
  if (itemsToAvoidText) {
    dynamicFields += `- Kullanılmayacak öğeler: ${itemsToAvoidText}\n`;
  }

  const template = `
Sen bir görsel sanat yapay zekası için, aşağıdaki bilgileri kullanarak bir prompt yazacaksın:
- Ana nesne: ${getSelectionText('mainObject')}
- Sanatçı tarzı: ${getSelectionText('artistStyle')}
- Dijital sanat stili: ${getSelectionText('digitalArtStyle')}
- Sanat modifikasyonu: ${getSelectionText('artModification')}
- Fotogerçekçilik tekniği: ${getSelectionText('photoRealism')}
- Aydınlatma modu: ${getSelectionText('lightingMode')}
- Genel sanat stili: ${getSelectionText('artStyle')}
- Ortam detayı: ${getSelectionText('environmentDetail')}
- Duygu veya ton: ${getSelectionText('emotionTone')}
- Renk paleti: ${getSelectionText('colorPalette')}
- Kompozisyon/perspektif: ${getSelectionText('compositionPerspective')}
- Karakterler veya figürler: ${getSelectionText('characterFigure')}
- Zaman dilimi: ${getSelectionText('time')}
- Kullanılacak semboller: ${getSelectionText('symbolMeaning')}
- Hava durumu: ${getSelectionText('weather')}
- En boy oranı: ${getSelectionText('aspectRatio')}
${dynamicFields}- Oluşturduğun prompt (${getSelectionText('promptLanguage')}) Dilinde yazılsın.
- Oluşturduğun prompt (${getSelectionText('wordCount')}) Kelimeyi geçmesin.

Kurallar:
- ❗ Liste yapma.
- ❗ Madde işareti, numara, başlık kullanma.
- ❗ Sadece tek parça, bütün bir akıcı metin üret.
- ❗ Doğrudan görsel oluşturacak bir kompozisyon anlatımı gibi yaz.
- ❗ İngilizce yazılacaksa dil bilgisine dikkat et.
- ❗ Yaklaşık 100-200 kelime uzunluğunda olsun.

Şimdi bu bilgilerle sadece tek parça bir prompt metni üret.
  `.trim();

  return template;
}

export function postProcessPrompt(text: string): string {
  return text
    .replace(/^Sure,.*?:\s*/i, '')  // Başta "Sure, here is..." gibi bir açıklama varsa sil
    .replace(/^Here is.*?:\s*/i, '') // Alternatif ifadeleri de sil
    .replace(/^This is.*?:\s*/i, '') // Başka varyasyonlar için
    .trim();
}



export async function generatePrompt(selections: MultiplePromptSelections): Promise<string> {
  try {
    // API anahtarını AsyncStorage'dan al
    const apiKey = await AsyncStorage.getItem('COHERE_API_KEY');
    
    if (!apiKey) {
      throw new Error('API anahtarı bulunamadı. Lütfen giriş yapın.');
    }

    // Template kullanarak prompt oluştur
    const promptTemplate = createTemplatedPrompt(selections);
    console.log("promptTemplate",promptTemplate);

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
    console.log("response",data);
    return postProcessPrompt(data.generations[0].text.trim());
  } catch (error) {
    console.error('Prompt oluşturma hatası:', error);
    throw error;
  }
} 