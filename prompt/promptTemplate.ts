import { PromptSelections } from './promptFlow';

// Template'e göre prompt oluşturan fonksiyon
export function createTemplatedPrompt(selections: PromptSelections): string {
  // Her kategori için ilk seçimi alır (veya boş bırakır)
  const getSelectionText = (key: string): string => {
    if (!selections[key] || selections[key].length === 0) {
      // Genel özel değer kontrolü - herhangi bir adımın _custom değeri varsa kullan
      const customKey = `${key}_custom`;
      if (selections[customKey] && selections[customKey].length > 0) {
        return selections[customKey][0];
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

  // Bir alanın içeriği olup olmadığını kontrol eden fonksiyon
  const hasContent = (key: string): boolean => {
    const content = getSelectionText(key);
    return content !== '';
  };

  // Template için dinamik satırlar oluştur
  let dynamicTemplate = '';
  let lineIndex = 1;
  
  // Ana unsur (her zaman var olmalı)
  if (hasContent('mainObject')) {
    dynamicTemplate += `${lineIndex}) Görselin ana unsuru olarak (${getSelectionText('mainObject')}) belirle.\n`;
    lineIndex++;
  }

  // Diğer alanlar için kontrol et ve varsa ekle
  if (hasContent('artistStyle')) {
    dynamicTemplate += `${lineIndex}) (${getSelectionText('artistStyle')}) sanatçının tarzını yansıtacak şekilde oluştur.\n`;
    lineIndex++;
  }

  if (hasContent('digitalArtStyle')) {
    dynamicTemplate += `${lineIndex}) (${getSelectionText('digitalArtStyle')}) dijital sanat ve teknolojik tarzı yansıtsın.\n`;
    lineIndex++;
  }

  if (hasContent('artModification')) {
    dynamicTemplate += `${lineIndex}) Görselin kalitesini artırmak ve sanatsal yaratımı yönlendirmek için (${getSelectionText('artModification')}) sanat modifikasyonunda çalış.\n`;
    lineIndex++;
  }

  if (hasContent('photoRealism')) {
    dynamicTemplate += `${lineIndex}) Daha gerçekçi ve profesyonel bir estetik yaratmak için (${getSelectionText('photoRealism')}) fotogerçekçi modifikasyonu kullan.\n`;
    lineIndex++;
  }

  if (hasContent('lightingMode')) {
    dynamicTemplate += `${lineIndex}) Görselin atmosferini ve estetik etkisini doğrudan şekillendirecek olan (${getSelectionText('lightingMode')}) aydınlatmasını kullan.\n`;
    lineIndex++;
  }

  if (hasContent('artStyle')) {
    dynamicTemplate += `${lineIndex}) Genel sanatsal yaklaşımı belirlemek için (${getSelectionText('artStyle')}) sanat stilini seç.\n`;
    lineIndex++;
  }

  if (hasContent('environmentDetail')) {
    dynamicTemplate += `${lineIndex}) Görsel (${getSelectionText('environmentDetail')}) ortamı veya mekanı yansıtacak şekilde oluştur.\n`;
    lineIndex++;
  }

  if (hasContent('emotionTone')) {
    dynamicTemplate += `${lineIndex}) Görselin seyirci üzerinde yaratacağı duygusal etki ve tonunu (${getSelectionText('emotionTone')}) belirle.\n`;
    lineIndex++;
  }

  if (hasContent('colorPalette')) {
    dynamicTemplate += `${lineIndex}) (${getSelectionText('colorPalette')}) renk paletini kullanarak görseli renklendir.\n`;
    lineIndex++;
  }

  if (hasContent('compositionPerspective')) {
    dynamicTemplate += `${lineIndex}) Görselin kompozisyonel ve perspektif yapısında (${getSelectionText('compositionPerspective')}) kullan.\n`;
    lineIndex++;
  }

  if (hasContent('characterFigure')) {
    dynamicTemplate += `${lineIndex}) İçerisinde (${getSelectionText('characterFigure')}) karakterler ve figürler bulunsun.\n`;
    lineIndex++;
  }

  if (hasContent('time')) {
    dynamicTemplate += `${lineIndex}) Görselde kullanılan zaman dilimi (${getSelectionText('time')}) olsun.\n`;
    lineIndex++;
  }

  if (hasContent('symbolMeaning')) {
    dynamicTemplate += `${lineIndex}) Görselde kullanılan semboller ve bu sembollerin taşıdığı anlamlar (${getSelectionText('symbolMeaning')}) olsun.\n`;
    lineIndex++;
  }

  if (hasContent('weather')) {
    dynamicTemplate += `${lineIndex}) Görselin genel iklim ve havası (${getSelectionText('weather')}) yansıtmalı.\n`;
    lineIndex++;
  }

  if (hasContent('aspectRatio')) {
    dynamicTemplate += `${lineIndex}) Görselin en boy oranı (${getSelectionText('aspectRatio')}) olmalıdır.\n`;
    lineIndex++;
  }

  if (hasContent('itemsToAdd')) {
    dynamicTemplate += `${lineIndex}) Oluşturulacak görselin içerisine (${getSelectionText('itemsToAdd')}) unsurları yerleştir.\n`;
    lineIndex++;
  }

  if (hasContent('itemsToAvoid')) {
    dynamicTemplate += `${lineIndex}) Oluşturulacak görselin isteminde (${getSelectionText('itemsToAvoid')}) unsurları kullanma.\n`;
    lineIndex++;
  }

  // Dil ve kelime sayısı (genellikle zorunlu alanlar)
  if (hasContent('promptLanguage')) {
    dynamicTemplate += `${lineIndex}) Oluşturduğun prompt (${getSelectionText('promptLanguage')}) Dilinde yazılsın.\n`;
    lineIndex++;
  }

  if (hasContent('wordCount')) {
    dynamicTemplate += `${lineIndex}) Oluşturduğun prompt (${getSelectionText('wordCount')}) Kelimeyi geçmesin.\n`;
    lineIndex++;
  }

  // Ana template
  const template = `Görsel eserler üreten bir yapay zeka programı için, aşağıda belirtilen öğeleri içeren bir prompt metni oluşturmanı istiyorum.
${dynamicTemplate}
+ Bu bilgilerle, doğrudan bir sanat yapay zekasına vereceğimiz, akıcı, detaylı ve tek parça bir prompt metni oluştur. Sadece doğrudan kullanılabilir bir prompt yaz. Listeleme yapma, sadece bir tam cümleler bütünü olarak üret.`;

  return template;
}

export function postProcessPrompt(text: string): string {
  return text
    .replace(/^Sure,.*?:\s*/i, '')  // Başta "Sure, here is..." gibi bir açıklama varsa sil
    .replace(/^Here is.*?:\s*/i, '') // Alternatif ifadeleri de sil
    .replace(/^This is.*?:\s*/i, '') // Başka varyasyonlar için
    .trim();
}

export function createTemplatedPrompt2(selections: PromptSelections): string {
  // Her kategori için ilk seçimi alır (veya boş bırakır)
  const getSelectionText = (key: string): string => {
    if (!selections[key] || selections[key].length === 0) {
      // Genel özel değer kontrolü - herhangi bir adımın _custom değeri varsa kullan
      const customKey = `${key}_custom`;
      if (selections[customKey] && selections[customKey].length > 0) {
        return selections[customKey][0];
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

  // Bir alanın içeriği olup olmadığını kontrol eden fonksiyon
  const hasContent = (key: string): boolean => {
    const content = getSelectionText(key);
    return content !== '';
  };

  // Template için dinamik satırlar oluştur
  let templateLines: string[] = [];
  
  // Her alan için, içerik varsa satır ekle
  if (hasContent('mainObject')) 
    templateLines.push(`- Ana nesne: ${getSelectionText('mainObject')}`);
  
  if (hasContent('artistStyle')) 
    templateLines.push(`- Sanatçı tarzı: ${getSelectionText('artistStyle')}`);
  
  if (hasContent('digitalArtStyle')) 
    templateLines.push(`- Dijital sanat stili: ${getSelectionText('digitalArtStyle')}`);
  
  if (hasContent('artModification')) 
    templateLines.push(`- Sanat modifikasyonu: ${getSelectionText('artModification')}`);
  
  if (hasContent('photoRealism')) 
    templateLines.push(`- Fotogerçekçilik tekniği: ${getSelectionText('photoRealism')}`);
  
  if (hasContent('lightingMode')) 
    templateLines.push(`- Aydınlatma modu: ${getSelectionText('lightingMode')}`);
  
  if (hasContent('artStyle')) 
    templateLines.push(`- Genel sanat stili: ${getSelectionText('artStyle')}`);
  
  if (hasContent('environmentDetail')) 
    templateLines.push(`- Ortam detayı: ${getSelectionText('environmentDetail')}`);
  
  if (hasContent('emotionTone')) 
    templateLines.push(`- Duygu veya ton: ${getSelectionText('emotionTone')}`);
  
  if (hasContent('colorPalette')) 
    templateLines.push(`- Renk paleti: ${getSelectionText('colorPalette')}`);
  
  if (hasContent('compositionPerspective')) 
    templateLines.push(`- Kompozisyon/perspektif: ${getSelectionText('compositionPerspective')}`);
  
  if (hasContent('characterFigure')) 
    templateLines.push(`- Karakterler veya figürler: ${getSelectionText('characterFigure')}`);
  
  if (hasContent('time')) 
    templateLines.push(`- Zaman dilimi: ${getSelectionText('time')}`);
  
  if (hasContent('symbolMeaning')) 
    templateLines.push(`- Kullanılacak semboller: ${getSelectionText('symbolMeaning')}`);
  
  if (hasContent('weather')) 
    templateLines.push(`- Hava durumu: ${getSelectionText('weather')}`);
  
  if (hasContent('aspectRatio')) 
    templateLines.push(`- En boy oranı: ${getSelectionText('aspectRatio')}`);

  // Dinamik eklenen öğeler
  if (hasContent('itemsToAdd')) 
    templateLines.push(`- Ekstra eklenecek öğeler: ${getSelectionText('itemsToAdd')}`);
  
  if (hasContent('itemsToAvoid')) 
    templateLines.push(`- Kullanılmayacak öğeler: ${getSelectionText('itemsToAvoid')}`);
  
  // Dil ve kelime sayısı
  if (hasContent('promptLanguage')) 
    templateLines.push(`- Oluşturduğun prompt (${getSelectionText('promptLanguage')}) Dilinde yazılsın.`);
  
  if (hasContent('wordCount')) 
    templateLines.push(`- Oluşturduğun prompt (${getSelectionText('wordCount')}) Kelimeyi geçmesin.`);

  // Ana template
  const template = `Sen bir görsel sanat yapay zekası için, aşağıdaki bilgileri kullanarak bir prompt yazacaksın:
${templateLines.join('\n')}

Kurallar:
- ❗ Liste yapma.
- ❗ Madde işareti, numara, başlık kullanma.
- ❗ Sadece tek parça, bütün bir akıcı metin üret.
- ❗ Doğrudan görsel oluşturacak bir kompozisyon anlatımı gibi yaz.
- ❗ Hangi dil isteniyorsa promptu o dilde yaz ve o dilin gramer kurallarına sıkı sıkıya uy.
- ❗ Kullanılacak dilin dil bilgisi ve yazım kurallarına özen göster.
- ❗ Bu prompt farkli bir ai da gorsel olusturmak icin kullanilacak.
- ❗ Prompt ai in gorsel olusturmasi icin emir vermeli.
- ❗ Kelime sayisina dikkat et.

Şimdi bu bilgilerle sadece tek parça bir prompt metni üret.
  `.trim();

  return template;
}
