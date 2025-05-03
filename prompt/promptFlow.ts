import { 
  mainObjects, 
  artistStyles, 
  digitalArtStyles, 
  artModifications, 
  photoRealismTips,
  lightingModes,
  artStyles,
  environmentDetails,
  emotionTones,
  colorPalettes, 
  compositions,
  characterFigures,
  times,
  symbolMeanings,
  weathers,
  aspectRatios,
  itemsToAdd,
  itemsToAvoid,
  promptLanguages,
  wordCounts,
  PromptOption
} from './promptOptions';

// Her adımı temsil eden arayüz
export interface PromptFlowStep {
  key: string; // Adımın benzersiz kimliği
  title: string; // Adımın başlığı
  options: PromptOption[]; // Seçim seçenekleri
  multiple: boolean; // Çoklu seçim desteklensin mi?
  nextStep?: string; // Bir sonraki adımın key'i
  description?: string; // Adım için ayrıntılı açıklama
}

// Tüm prompt adımlarını içeren nesne
export const promptFlowSteps: Record<string, PromptFlowStep> = {
  mainObject: {
    key: 'mainObject',
    title: 'Ana Nesne',
    options: mainObjects,
    multiple: false,
    nextStep: 'artistStyle',
    description: 'Ana nesne, görselinizin odak noktasını belirler. Bu eleman, görselinizin temel kimliğini oluşturur ve izleyici dikkatini çeker.',
  },
  artistStyle: {
    key: 'artistStyle',
    title: 'Sanatçı Tarzı',
    options: artistStyles,
    multiple: false,
    nextStep: 'digitalArtStyle',
    description: 'Sanatçı tarzı, belirli bir sanatçının eserlerindeki benzersiz yaklaşımı yansıtır. Bu seçim, görselinize özel bir karakter ve tanınabilir bir estetik katar.',
  },
  digitalArtStyle: {
    key: 'digitalArtStyle',
    title: 'Dijital Sanat Tarzı',
    options: digitalArtStyles,
    multiple: false,
    nextStep: 'artModification',
    description: 'Dijital sanat tarzı, modern teknolojilerin sunduğu benzersiz görsel olanaklardan yararlanır. Bu seçim, eserinize çağdaş bir dijital kimlik kazandırır.',
  },
  artModification: {
    key: 'artModification',
    title: 'Sanat Modifikasyonu',
    options: artModifications,
    multiple: false,
    nextStep: 'photoRealism',
    description: 'Sanat modifikasyonu, temel görsel üzerinde çeşitli değişiklikler ve efektler uygulamanızı sağlar. Bu seçim, eserinizin özgünlüğünü ve yaratıcı etkisini artırır.',
  },
  photoRealism: {
    key: 'photoRealism',
    title: 'Foto Gerçekçilik',
    options: photoRealismTips,
    multiple: false,
    nextStep: 'lightingMode',
    description: 'Foto gerçekçilik, görselinizin gerçek hayattaki bir fotoğrafa ne kadar benzeyeceğini belirler. Yüksek gerçekçilik, daha fotoğrafik sonuçlar elde etmenizi sağlar.',
  },
  lightingMode: {
    key: 'lightingMode',
    title: 'Aydınlatma Modu',
    options: lightingModes,
    multiple: false,
    nextStep: 'artStyle',
    description: 'Aydınlatma modu, görselinizde ışık ve gölgelerin nasıl dağılacağını belirler. Bu seçim, görselin atmosferini ve derinliğini önemli ölçüde etkiler.',
  },
  artStyle: {
    key: 'artStyle',
    title: 'Sanat Stili',
    options: artStyles,
    multiple: false,
    nextStep: 'environmentDetail',
    description: 'Görselin estetik yönünü ve genel sanatsal yaklaşımını belirler. Farklı sanat akımları ve stil seçenekleri, kullanıcıların yaratıcı sürecini yönlendiren temel unsurlardan biridir.',
  },
  environmentDetail: {
    key: 'environmentDetail',
    title: 'Ortam Detayı',
    options: environmentDetails,
    multiple: false,
    nextStep: 'emotionTone',
    description: 'Ortam detayı, görselinizin arka planını ve çevresel öğelerini belirler. Bu seçim, ana öznenin içinde bulunduğu bağlamı ve atmosferi tanımlar.',
  },
  emotionTone: {
    key: 'emotionTone',
    title: 'Duygu/Ton',
    options: emotionTones,
    multiple: false,
    nextStep: 'colorPalette',
    description: 'Duygu/ton seçimi, görselinizin iletmek istediği temel hisleri ve duygusal nüansları belirler. Bu, izleyicide uyandırmak istediğiniz duygusal tepkiyi şekillendirir.',
  },
  colorPalette: {
    key: 'colorPalette',
    title: 'Renk Paleti',
    options: colorPalettes,
    multiple: false,
    nextStep: 'compositionPerspective',
    description: 'Renk paleti, görselinizde kullanılacak renk şemasını belirler. Renkler, görselin atmosferini, tonunu ve duygusal etkisini doğrudan etkiler.',
  },
  compositionPerspective: {
    key: 'compositionPerspective',
    title: 'Kompozisyon/Perspektif',
    options: compositions,
    multiple: false,
    nextStep: 'characterFigure',
    description: 'Kompozisyon ve perspektif, görseldeki öğelerin nasıl düzenlendiğini ve uzamsal ilişkilerini belirler. Bu seçim, görsel anlatımın yapısını ve derinliğini şekillendirir.',
  },
  characterFigure: {
    key: 'characterFigure',
    title: 'Karakter/Figür',
    options: characterFigures,
    multiple: false,
    nextStep: 'time',
    description: 'Karakter/figür seçimi, görselinizde yer alacak insan, hayvan veya fantastik varlıkları belirler. Bu, hikaye anlatımının ve duygusal bağlantının merkezini oluşturur.',
  },
  time: {
    key: 'time',
    title: 'Zaman',
    options: times,
    multiple: false,
    nextStep: 'symbolMeaning',
    description: 'Zaman seçimi, görselinizin hangi tarihsel dönemi veya günün hangi saatini yansıtacağını belirler. Bu, atmosferi ve görsel unsurları önemli ölçüde etkiler.',
  },
  symbolMeaning: {
    key: 'symbolMeaning',
    title: 'Sembol/Anlam',
    options: symbolMeanings,
    multiple: false,
    nextStep: 'weather',
    description: 'Sembol ve anlamlar, görselinize daha derin katmanlar ve metaforik boyutlar ekler. Bu seçim, izleyiciyi düşündürecek ve etkileşime teşvik edecek unsurları belirler.',
  },
  weather: {
    key: 'weather',
    title: 'Hava Durumu',
    options: weathers,
    multiple: false,
    nextStep: 'aspectRatio',
    description: 'Hava durumu, görselinizin atmosferik koşullarını belirler. Yağmur, kar, güneşli bir gün veya sisli bir ortam, görselin tonunu ve duygusal etkisini değiştirir.',
  },
  aspectRatio: {
    key: 'aspectRatio',
    title: 'En Boy Oranı',
    options: aspectRatios,
    multiple: false,
    nextStep: 'itemsToAdd',
    description: 'En boy oranı, görselinizin fiziksel boyutlarının oranını belirler. Bu seçim, kompozisyonu ve odak noktasını doğrudan etkileyerek görsel anlatımı şekillendirir.',
  },
  itemsToAdd: {
    key: 'itemsToAdd',
    title: 'Eklenecek Öğeler',
    options: itemsToAdd,
    multiple: false,
    nextStep: 'itemsToAvoid',
    description: 'Eklenecek öğeler, görselinize dahil etmek istediğiniz ek unsurları belirler. Bu detaylar, kompozisyonu zenginleştirir ve anlatımı güçlendirir.',
  },
  itemsToAvoid: {
    key: 'itemsToAvoid',
    title: 'İstenmeyen Öğeler',
    options: itemsToAvoid,
    multiple: false,
    nextStep: 'promptLanguage',
    description: 'İstenmeyen öğeler, görselinizde bulunmasını istemediğiniz unsurları belirtmenizi sağlar. Bu, sonucun beklentilerinize daha iyi uymasını sağlar.',
  },
  promptLanguage: {
    key: 'promptLanguage',
    title: 'Prompt Dili',
    options: promptLanguages,
    multiple: false,
    nextStep: 'wordCount',
    description: 'Prompt dili, oluşturulacak prompt metninin hangi dilde olacağını belirler. Bu seçim, AI sisteminin dil anlayışını ve çıktı stilini etkiler.',
  },
  wordCount: {
    key: 'wordCount',
    title: 'Kelime Sayısı',
    options: wordCounts,
    multiple: false,
    nextStep: undefined, // Son adım
    description: 'Kelime sayısı, oluşturulacak promptun uzunluğunu ve detay seviyesini belirler. Daha uzun promptlar genellikle daha detaylı sonuçlar üretir.',
  },
};

// Prompt akışının ilk adımı
export const INITIAL_STEP = 'mainObject';

// Adım anahtarından adım nesnesi elde etme yardımcı fonksiyonu
export function getStepByKey(key: string): PromptFlowStep | undefined {
  return promptFlowSteps[key];
}

// Bir sonraki adımın key'ini alma
export function getNextStepKey(currentStepKey: string): string | undefined {
  const currentStep = promptFlowSteps[currentStepKey];
  return currentStep?.nextStep;
}

// Seçim objesinin tüm anahtar için
export type PromptSelections = {
  [key: string]: string[];
};

// Boş seçimler objesini oluşturma
export function createEmptySelections(): PromptSelections {
  return Object.keys(promptFlowSteps).reduce((acc, key) => {
    acc[key] = [];
    return acc;
  }, {} as PromptSelections);
} 