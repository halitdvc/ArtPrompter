import { ImageSourcePropType } from "react-native";

// Örnek görsel importları - gerçek uygulamada bunları doğru görsel dosyalarıyla değiştirin
const defaultImage = require('../assets/images/kuslar.png');

export interface PromptOption {
  id: string;
  title: string;
  description: string;
  image: ImageSourcePropType;
}

// Ana Nesne
export const mainObjects: PromptOption[] = [
  {
    id: 'tren',
    title: 'Tren',
    description: 'Lokomotif ve vagonlarıyla taşımacılık aracı',
    image: defaultImage,
  },
  {
    id: 'agac',
    title: 'Ağaç',
    description: 'Doğadaki bitki örtüsünün büyük parçaları',
    image: defaultImage,
  },
  {
    id: 'ev',
    title: 'Ev',
    description: 'İnsanların yaşadığı konut yapısı',
    image: defaultImage,
  },
];

// Sanatçı Tarzı
export const artistStyles: PromptOption[] = [
  {
    id: 'leonardo_da_vinci',
    title: 'Leonardo da Vinci',
    description: 'Gerçekçilik, perspektif ve detaylı anatomi bilgisiyle öne çıkar.',
    image: require('../assets/images/ArtPrompter/sanatTarzi/leonardo-da-vinci.png'),
  },
  {
    id: 'vincent_van_gogh',
    title: 'Vincent van Gogh',
    description: 'Duygusal ifade, canlı renkler ve dinamik fırça darbeleriyle öne çıkar.',
    image: require('../assets/images/ArtPrompter/sanatTarzi/vincent-van-gogh.png'),
  },
  {
    id: 'pablo_picasso',
    title: 'Pablo Picasso',
    description: 'Kübizm akımıyla öne çıkar; geometrik formlar, soyut kompozisyonlar ve farklı perspektiflerin aynı anda kullanımıyla tanınır.',
    image: require('../assets/images/ArtPrompter/sanatTarzi/pablo-picasso.png'),
  },
  {
    id: 'salvador_dali',
    title: 'Salvador Dalí',
    description: 'Sürrealizm akımıyla öne çıkar; rüya gibi sahneler, çarpıtılmış formlar ve gerçeküstü kompozisyonlarla tanınır.',
    image: require('../assets/images/ArtPrompter/sanatTarzi/salvador-dali.png'),
  },
  {
    id: 'claude_monet',
    title: 'Claude Monet',
    description: 'Empresyonizm akımıyla öne çıkar; ışık, renk ve doğanın anlık görünümlerini yakalamaya odaklanır.',
    image: require('../assets/images/ArtPrompter/sanatTarzi/claude-monet.png'),
  },
  {
    id: 'andy_warhol',
    title: 'Andy Warhol',
    description: 'Pop art akımıyla öne çıkar; popüler kültür ögeleri, parlak renkler ve tekrarlayan desenlerle bilinir.',
    image: require('../assets/images/ArtPrompter/sanatTarzi/andy-warhol.png'),
  },
  {
    id: 'michelangelo',
    title: 'Michelangelo',
    description: 'Rönesans dönemiyle öne çıkar; detaylı anatomi, güçlü figürler ve klasik kompozisyonlarla bilinir.',
    image: require('../assets/images/ArtPrompter/sanatTarzi/michelangelo.png'),
  },
  {
    id: 'edvard_munch',
    title: 'Edvard Munch',
    description: 'Dışavurumculuk akımıyla öne çıkar; güçlü duygusal ifadeler ve dramatik kompozisyonlarla tanınır.',
    image: require('../assets/images/ArtPrompter/sanatTarzi/edvard-munch.png'),
  },
  {
    id: 'hokusai',
    title: 'Hokusai',
    description: 'Dışavurumculuk akımıyla öne çıkar; güçlü duygusal ifadeler ve dramatik kompozisyonlarla tanınır.',
    image: require('../assets/images/ArtPrompter/sanatTarzi/hokusai.png'),
  },
];

// Dijital Sanat Tarzı
export const digitalArtStyles: PromptOption[] = [
  {
    id: 'dijital_sanat',
    title: 'Dijital Sanat',
    description: 'Bilgisayar ve dijital araçlarla yaratılan, geniş ölçekli teknikleri içeren modern sanat tarzıdır.',
    image: require('../assets/images/ArtPrompter/dijitalSanatVeTeeklonojikTarzlar/dijital-sanat.png'),
  },
  {
    id: 'steampunk_art',
    title: 'Steampunk Art',
    description: '19. yüzyıl sanayileşmesini hayal gücüyle harmanlayan, dişliler ve buhar makineleri temelli bir sanat tarzıdır.',
    image: require('../assets/images/ArtPrompter/dijitalSanatVeTeeklonojikTarzlar/steampunk-art.png'),
  },
  {
    id: 'cyberpunk_art',
    title: 'Cyberpunk Art',
    description: 'Yüksek teknoloji ve düşük yaşam standartlarının birleştiği, neon ışıklar ve distopik unsurlarla şekillenen bir sanat tarzıdır.',
    image: require('../assets/images/ArtPrompter/dijitalSanatVeTeeklonojikTarzlar/cyberpunk-art.png'),
  },
  {
    id: 'ukiyo_e_art',
    title: 'Ukiyo-e Art',
    description: 'Japon geleneksel ahşap baskı sanatının dijital uyarlamalarıyla minimalist ve zarif görseller oluşturulur.',
    image: require('../assets/images/ArtPrompter/dijitalSanatVeTeeklonojikTarzlar/ukiyo-e-art.png'),
  },
  {
    id: 'deco_art',
    title: 'Deco Art',
    description: '1920\'lerin ve 1930\'ların Art Deco akımından ilham alan, zengin, geometrik ve lüks tasarımlar içeren bir sanat tarzıdır.',
    image: require('../assets/images/ArtPrompter/dijitalSanatVeTeeklonojikTarzlar/deco-art.png'),
  },
  {
    id: 'vector_art',
    title: 'Vector Art',
    description: 'Matematiksel formüllerle oluşturulan, net çizgiler ve şekillerle yapılan dijital sanat türüdür.',
    image: require('../assets/images/ArtPrompter/dijitalSanatVeTeeklonojikTarzlar/vector-art.png'),
  },
  {
    id: 'low_poly_art',
    title: 'Low Poly Art',
    description: 'Az sayıda polygonla oluşturulan, minimalist ve köşeli 3D dijital sanat türüdür.',
    image: require('../assets/images/ArtPrompter/dijitalSanatVeTeeklonojikTarzlar/low-poly-art.png'),
  },
  {
    id: 'glitchcore_art',
    title: 'Glitchcore Art',
    description: 'Dijital bozulmalar ve arızalarla estetik bir ifade yaratan modern sanat tarzıdır.',
    image: require('../assets/images/ArtPrompter/dijitalSanatVeTeeklonojikTarzlar/glitchcore-art.png'),
  },
  {
    id: 'bauhaus_art',
    title: 'Bauhaus Art',
    description: '20. yüzyılın başlarında ortaya çıkan, işlevsellik ve sadeliği ön planda tutan modern bir sanat tarzıdır.',
    image: require('../assets/images/ArtPrompter/dijitalSanatVeTeeklonojikTarzlar/bauhaus-art.png'),
  },
  {
    id: 'claymation_art',
    title: 'Claymation Art',
    description: 'Kil veya plastisinle yapılan, elle şekillendirilmiş figürler ile oluşturulan stop-motion animasyon sanatıdır.',
    image: require('../assets/images/ArtPrompter/dijitalSanatVeTeeklonojikTarzlar/claymation-art.png'),
  },
];

// Sanat Modifikasyonu
export const artModifications: PromptOption[] = [
  {
    id: 'detayli',
    title: 'Detaylı',
    description: 'Görsele daha hassas detaylar ekler, karmaşık ve ince detaylar sunar. Basit sanattan ziyade, karmaşık kompozisyonlar ve dokular oluşturur.',
    image: require('../assets/images/ArtPrompter/sanatModifikasyonlari/detayli.png'),
  },
  {
    id: 'odul_kazanmis',
    title: 'Ödül Kazanmış',
    description: 'Bu modifikasyon, sanatın kalitesini ve yaratıcılığını artırmak için prestijli yarışmalarda ödül kazanmış eserlerden ilham alır.',
    image: require('../assets/images/ArtPrompter/sanatModifikasyonlari/odul-kazanmis.png'),
  },
  {
    id: 'artstation_populer',
    title: 'Artstation\'da Popüler',
    description: 'ArtStation web sitesinde en çok beğenilen eserlerin stilini baz alarak, görsellerin estetik değerini artırır.',
    image: require('../assets/images/ArtPrompter/sanatModifikasyonlari/artStationda-populer.png'),
  },
  {
    id: 'fotogercekci',
    title: 'Fotogerçekçi',
    description: 'Gerçek hayattaki gibi görünen, ancak sanat eseri olarak kalabilen görseller üretmek için kullanılır.',
    image: require('../assets/images/ArtPrompter/sanatModifikasyonlari/fotogercekci.png'),
  },
  {
    id: 'unreal_engine',
    title: 'Unreal Engine',
    description: 'Video oyunlarında kullanılan görseller gibi daha pürüzsüz ve net detaylar içeren sanatsal görüntüler oluşturur.',
    image: require('../assets/images/ArtPrompter/sanatModifikasyonlari/unreal-engine.png'),
  },
  {
    id: 'fanart',
    title: 'Fanart',
    description: 'Popüler karakterler veya kişilikler üzerine eğlenceli ve sevimli grafikler oluşturmak için kullanılır.',
    image: require('../assets/images/ArtPrompter/sanatModifikasyonlari/fanart.png'),
  },
  {
    id: 'minimalist',
    title: 'Minimalist',
    description: 'Az detay, sade renk paletleri ve basit kompozisyonlar kullanılarak şık ve modern sanat eserleri oluşturur.',
    image: require('../assets/images/ArtPrompter/sanatModifikasyonlari/minimalist-sanat.png'),
  },
  {
    id: 'retro_futurism',
    title: 'Retro Futurism',
    description: 'Geçmişin geleceğe bakış açısını yansıtan, nostaljik ancak yenilikçi bir sanat tarzıdır.',
    image: require('../assets/images/ArtPrompter/sanatModifikasyonlari/retro-futurism.png'),
  },
  {
    id: 'noir_art',
    title: 'Noir Art',
    description: 'Siyah-beyaz ve gölge oyunlarıyla derinlik katan, dramatik bir atmosfer yaratan sanat modifikasyonu.',
    image: require('../assets/images/ArtPrompter/sanatModifikasyonlari/noir-art.png'),
  },
  {
    id: 'vintage_illustration',
    title: 'Vintage Illustration',
    description: 'Geçmiş dönemlerin grafik tasarım tarzlarını taklit eden, nostaljik ve sıcak bir his yaratan modifikasyon.',
    image: require('../assets/images/ArtPrompter/sanatModifikasyonlari/vintage-illustration.png'),
  },
];

// Foto Gerçekçilik İpucu
export const photoRealismTips: PromptOption[] = [
  {
    id: '4k_8k',
    title: '4K/8K',
    description: 'Görsellerin ultra yüksek çözünürlükte olması, profesyonel ve detaylı bir görünüm sağlar.',
    image: require('../assets/images/ArtPrompter/fotogercekciModifikasyonlar/4k-8k.png'),
  },
  {
    id: '15mm_genis_aci',
    title: '15mm Geniş Açı',
    description: 'Doğal perspektif sunar ve konuyu arka plandan ayırmadan dengeli bir görünüm oluşturur.',
    image: require('../assets/images/ArtPrompter/fotogercekciModifikasyonlar/15mm-genis-aci-lens.png'),
  },
  {
    id: '35mm_lens',
    title: '35mm Lens',
    description: 'Doğal perspektif sunar ve konuyu arka plandan ayırmadan dengeli bir görünüm oluşturur.',
    image: require('../assets/images/ArtPrompter/fotogercekciModifikasyonlar/35mm-lens.png'),
  },
  {
    id: '85mm_lens',
    title: '85mm Lens',
    description: 'Konuyu arka plandan belirgin şekilde ayırarak detaylı portreler oluşturur.',
    image: require('../assets/images/ArtPrompter/fotogercekciModifikasyonlar/85mm-lens.png'),
  },
  {
    id: '200mm_lens',
    title: '200mm Lens',
    description: 'Uzun mesafeden çekim yaparak, arka planı daha fazla bulanıklaştırır ve konuyu izole eder.',
    image: require('../assets/images/ArtPrompter/fotogercekciModifikasyonlar/200mm-lens.png'),
  },
  {
    id: 'bokeh',
    title: 'Bokeh',
    description: 'Arka planı bulanıklaştırarak konunun netliğini ve estetiğini artırır',
    image: require('../assets/images/ArtPrompter/fotogercekciModifikasyonlar/bokeh.png'),
  },
  {
    id: 'odul_kazanmis',
    title: 'Ödül Kazanmış',
    description: 'Sanatsal estetiği ve kompozisyonu en iyi seviyeye taşıyarak profesyonel bir görünüm kazandırır.',
    image: require('../assets/images/ArtPrompter/fotogercekciModifikasyonlar/odul-kazanmis.png'),
  },
  {
    id: 'tilt_shift_fotografciliği',
    title: 'Tilt-Shift Fotoğrafçılığı',
    description: 'Odak alanını belirli bir bölgeye yoğunlaştırarak minyatür efektleri oluşturur.',
    image: require('../assets/images/ArtPrompter/fotogercekciModifikasyonlar/tilt-shift.png'),
  },
  {
    id: 'sinema_fotografciliği',
    title: 'Sinema Fotoğrafçılığı',
    description: 'Film benzeri atmosferler ve dramatik kompozisyonlar yaratır.',
    image: require('../assets/images/ArtPrompter/fotogercekciModifikasyonlar/sinema-fotografi.png'),
  },
  {
    id: 'macro',
    title: 'Macro',
    description: 'Çok küçük detayları yakın çekimle vurgulayan, aşırı detaylı ve yoğun bir görüntü sağlar.',
    image: require('../assets/images/ArtPrompter/fotogercekciModifikasyonlar/makro.png'),
  },
];

// Aydınlatma Modu
export const lightingModes: PromptOption[] = [
  {
    id: 'sinematik-aydinlatma',
    title: 'Sinematik Aydınlatma',
    description: 'Film benzeri görseller yaratır, dramatik gölgeleme ve güçlü bir canlılık sunar.',
    image: require('../assets/images/ArtPrompter/aydinlatmaModifikasyonlari/sinematik-aydinlatma.png'),
  },
  {
    id: 'altin-saat-gunes-isigi',
    title: 'Altın Saat Güneş Işığı',
    description: 'Gündoğumundan hemen sonra veya günbatımına yakın saatlerde doğal ışığın yumuşak ve sıcak olduğu zamanı ifade eder.',
    image: require('../assets/images/ArtPrompter/aydinlatmaModifikasyonlari/altin-saat.png'),
  },
  {
    id: 'ambiyans-aydinlatmasi',
    title: 'Ambiyans Aydınlatması',
    description: 'Çevresel aydınlatma sağlayarak, görselin genel tonunu yumuşatır ve ışık-gölge dengesini iyileştirir.',
    image: require('../assets/images/ArtPrompter/aydinlatmaModifikasyonlari/ambiyans-aydinlatmasi.png'),
  },
  {
    id: 'studio-aydinlatmasi',
    title: 'Stüdyo Aydınlatması',
    description: 'Arka planda karanlık veya aydınlık bir arka plan kullanılarak, ön plandaki figürün detayları vurgulanır.',
    image: require('../assets/images/ArtPrompter/aydinlatmaModifikasyonlari/studio-aydinlatmasi.png'),
  },
  {
    id: 'lens-parlamasi',
    title: 'Lens Parlaması',
    description: 'Görsele ışık parlaması ekler, bu da görselin kenarında bir ışık kaynağının olduğu izlenimini yaratır.',
    image: require('../assets/images/ArtPrompter/aydinlatmaModifikasyonlari/lens-parlamasi.png'),
  },
  {
    id: 'neon-aydinlatma',
    title: 'Neon Aydınlatma',
    description: 'Görsele ışık parlaması ekler, bu da görselin kenarında bir ışık kaynağının olduğu izlenimini yaratır.',
    image: require('../assets/images/ArtPrompter/aydinlatmaModifikasyonlari/neon-aydinlatma.png'),
  },
  {
    id: 'yuksek-kontrast-aydinlatma',
    title: 'Yüksek Kontrast Aydınlatma',
    description: 'Işık ve gölge arasındaki farkı artırarak görselde dramatik ve güçlü bir vurgu oluşturur.',
    image: require('../assets/images/ArtPrompter/aydinlatmaModifikasyonlari/yuksek-kontrast-aydinlatma.png'),
  },
  {
    id: 'ayisigi',
    title: 'Ayışığı',
    description: 'Doğal gece ortamını taklit ederek, soğuk mavi tonlar ve düşük ışık etkisi yaratır.',
    image: require('../assets/images/ArtPrompter/aydinlatmaModifikasyonlari/ayisigi.png'),
  },
  {
    id: 'flas-aydinlatmasi',
    title: 'Flaş Aydınlatması',
    description: 'Ani ışık patlamaları ekleyerek, güçlü ve yüksek enerjili bir etki yaratır.',
    image: require('../assets/images/ArtPrompter/aydinlatmaModifikasyonlari/flas-aydinlatma.png'),
  },
  {
    id: 'fener-isigi',
    title: 'Fener Işığı',
    description: 'Belirli bir alanı güçlü bir şekilde aydınlatarak, görselin odak noktasını öne çıkarır.',
    image: require('../assets/images/ArtPrompter/aydinlatmaModifikasyonlari/fener-isigi.png'),
  },
];

// Sanat Stili
export const artStyles: PromptOption[] = [
  {
    id: 'surrealizm',
    title: 'Sürrealizm',
    description: 'Hayal gücünün sınırlarını zorlayan, gerçeküstü imgeler ve doğaüstü sahneler içerir.',
    image: require('../assets/images/ArtPrompter/sanatStili/surrealizm.png'),
  },
  {
    id: 'minimalizm',
    title: 'Minimalizm',
    description: 'Basitlik ve sadeleştirilmiş öğelerle odaklanma sağlar.',
    image: require('../assets/images/ArtPrompter/sanatStili/minimalizm.png'),
  },
  {
    id: 'realism',
    title: 'Realizm',
    description: 'Gerçekliği yansıtmaya odaklanan, doğrudan gözlemlerle oluşturulan sanat. ',
    image: require('../assets/images/ArtPrompter/sanatStili/realizm.png'),
  },
  {
    id: 'empresyonizm',
    title: 'Empresyonizm',
    description: 'Işık ve renk oyunlarına dayalı, anlık izlenimlerin ön plana çıktığı bir sanat akımı.',
    image: require('../assets/images/ArtPrompter/sanatStili/empresyonizm.png'),
  },
  {
    id: 'kubizm',
    title: 'Kübizm',
    description: 'Nesnelerin geometrik formlarla soyutlanarak birden fazla açıdan aynı anda gösterildiği bir sanat tarzı.',
    image: require('../assets/images/ArtPrompter/sanatStili/kubizm.png'),
  },
  {
    id: 'abstraction',
    title: 'Abstraction',
    description: 'Somut dünyayı reddederek, renk ve form ile anlam yaratma üzerine kurulu bir stil.',
    image: require('../assets/images/ArtPrompter/sanatStili/abstraksiyon.png'),
  },
  {
    id: 'futurizm',
    title: 'Fütürizm',
    description: 'Hareketi, hızı ve teknolojiyi betimleyen modern bir sanat akımı.',
    image: require('../assets/images/ArtPrompter/sanatStili/futurizm.png'),
  },
  {
    id: 'art_deco',
    title: 'Art Deco',
    description: 'Zengin, ayrıntılı ve geometrik biçimlerle dekoratif öğeler içerir.',
    image: require('../assets/images/ArtPrompter/sanatStili/art-deco.png'),
  },
  {
    id: 'gotik_sanat',
    title: 'Gotik Sanat',
    description: 'Karanlık, dramatik ve mistik öğeler içeren bu stil, yoğun ayrıntılar ve sembolik anlatımlarla doludur.',
    image: require('../assets/images/ArtPrompter/sanatStili/gotik-sanat.png'),
  },
  {
    id: 'pop_art',
    title: 'Pop Art',
    description: 'Popüler kültür öğelerini renkli ve dikkat çekici bir biçimde yorumlayan modern bir sanat akımıdır.',
    image: require('../assets/images/ArtPrompter/sanatStili/pop-art.png'),
  },
];

// Ortam Detayı
export const environmentDetails: PromptOption[] = [
  {
    id: 'sehir_manzari',
    title: 'Şehir Manzarası',
    description: 'Modern şehirler, sokaklar, binalar ve mimari yapılar. Görsellerde hareket, enerji ve şehir yaşamının yoğunluğu ön planda olur.',
    image: require('../assets/images/ArtPrompter/ortamlaraDairDetaylar/sehir-manzarasi.png'),
  },
  {
    id: 'dogal_peyzaj',
    title: 'Doğal Peyzaj',
    description: 'Ormanlar, dağlar, göller, denizler gibi doğal ortamlar. Görsellerde huzur, doğa ile uyum ve sakinlik hissi yaratılır.',
    image: require('../assets/images/ArtPrompter/ortamlaraDairDetaylar/dogal-peyzaj.png'),
  },
  {
    id: 'fantastik_dunya',
    title: 'Fantastik Dünya',
    description: 'Hayal gücüne dayalı, gerçek dünyadan uzak, özgün ortamlar. Görsellerde yaratıcılık ve sınır tanımayan imajlar öne çıkar.',
    image: require('../assets/images/ArtPrompter/ortamlaraDairDetaylar/fantastik-dunya.png'),
  },
  {
    id: 'ic_mekan',
    title: 'İç Mekan',
    description: 'Evler, ofisler, iç mekanlar ve iç tasarım unsurları. ',
    image: require('../assets/images/ArtPrompter/ortamlaraDairDetaylar/ic-mekan.png'),
  },
  {
    id: 'sanayi_bolgesi',
    title: 'Sanayi Bölgesi',
    description: 'Fabrikalar, makineler ve üretim ortamları. Görsellerde teknoloji, modernite ve endüstriyel yaşamın izleri bulunur.',
    image: require('../assets/images/ArtPrompter/ortamlaraDairDetaylar/sanayi-bolgesi.png'),
  },
  {
    id: 'uzay',
    title: 'Uzay',
    description: 'Galaksiler, gezegenler, yıldızlar ve astral manzaralar.',
    image: require('../assets/images/ArtPrompter/ortamlaraDairDetaylar/uzay.png'),
  },
  {
    id: 'tarihi_yapilar',
    title: 'Tarihi Yapılar',
    description: 'Antik yapılar, kaleler, tapınaklar ve tarihi bölgeler. Görsellerde geçmişin izleri, kültür ve miras ön plana çıkar.',
    image: require('../assets/images/ArtPrompter/ortamlaraDairDetaylar/tarihi-yapilar.png'),
  },
  {
    id: 'su_alti_dunya',
    title: 'Su Altı Dünya',
    description: 'Denizaltı yaşamı, okyanus derinlikleri ve su altı manzaraları.',
    image: require('../assets/images/ArtPrompter/ortamlaraDairDetaylar/su-alti-dunyasi.png'),
  },
  {
    id: 'post_apokaliptik_cevre',
    title: 'Post-Apokaliptik Çevre',
    description: 'Kıyamet sonrası dünya, terkedilmiş yapılar ve harabeler. Görsellerde yıkılmış medeniyetler ve hayatta kalma mücadelesi işlenir.',
    image: require('../assets/images/ArtPrompter/ortamlaraDairDetaylar/post-apokaliptik-cevre.png'),
  },
  {
    id: 'bilim_kurgu_ortamlari',
    title: 'Bilim Kurgu Ortamları',
    description: 'Yüksek teknolojiye sahip, gelecekteki yaşamı betimleyen ortamlar. ',
    image: require('../assets/images/ArtPrompter/ortamlaraDairDetaylar/bilim-kurgu-ortamlari.png'),
  },
];

// Duygu/Ton
export const emotionTones: PromptOption[] = [
  {
    id: 'huzun',
    title: 'Hüzün',
    description: 'Melankolik, kasvetli, duygusal derinlik taşıyan temalar.',
    image: require('../assets/images/ArtPrompter/duyguVeyaTon/huzun.png'),
  },
  {
    id: 'mutluluk',
    title: 'Mutluluk',
    description: 'Neşe, canlılık, pozitif bir atmosfer. Görsellerde enerji, renkli paletler ve neşeli sahneler bulunur.',
    image: require('../assets/images/ArtPrompter/duyguVeyaTon/mutluluk.png'),
  },
  {
    id: 'dram',
    title: 'Dram',
    description: 'Gerilim, çatışma, derin dramatik ifadeler.',
    image: require('../assets/images/ArtPrompter/duyguVeyaTon/dram.png'),
  },
  {
    id: 'gizem',
    title: 'Gizem',
    description: 'Bilinmeyen, keşfedilmeyi bekleyen unsurlar; esrarengiz atmosferler.',
    image: require('../assets/images/ArtPrompter/duyguVeyaTon/gizem.png'),
  },
  {
    id: 'romantizm',
    title: 'Romantizm',
    description: 'Aşk, duygusal bağlar, doğa ile insan arasındaki ilişki.',
    image: require('../assets/images/ArtPrompter/duyguVeyaTon/romantizm.png'),
  },
  {
    id: 'gerceklilik',
    title: 'Gerçeklik',
    description: 'Günlük yaşamın ve sıradan anların doğal bir şekilde betimlenmesi.',
    image: require('../assets/images/ArtPrompter/duyguVeyaTon/gerceklik.png'),
  },
  {
    id: 'melankoli',
    title: 'Melankoli',
    description: 'Ağıt, içsel huzursuzluk, duygusal yorgunluk.',
    image: require('../assets/images/ArtPrompter/duyguVeyaTon/melankoli.png'),
  },
  {
    id: 'korku',
    title: 'Korku',
    description: 'Karanlık, ürpertici, tehditkâr ya da rahatsız edici atmosferler.',
    image: require('../assets/images/ArtPrompter/duyguVeyaTon/korku.png'),
  },
  {
    id: 'huzur',
    title: 'Huzur',
    description: 'Sakinlik, dinginlik ve iç huzur hissi verir.',
    image: require('../assets/images/ArtPrompter/duyguVeyaTon/huzur.png'),
  },
  {
    id: 'heyecan',
    title: 'Heyecan',
    description: 'Canlı, enerjik ve hareketli bir atmosfer yaratır.',
    image: require('../assets/images/ArtPrompter/duyguVeyaTon/heyecan.png'),
  },
];

// Renk Paleti
export const colorPalettes: PromptOption[] = [
  {
    id: 'canli_renkler',
    title: 'Canlı Renkler',
    description: 'Parlak, dikkat çekici ve enerjik renk tonları.',
    image: require('../assets/images/ArtPrompter/renkPaleti/canli-renkler.png'),
  },
  {
    id: 'monokrom',
    title: 'Monokrom',
    description: 'Tek bir rengin farklı tonları ile oluşturulmuş görseller.',
    image: require('../assets/images/ArtPrompter/renkPaleti/monokrom.png'),
  },
  {
    id: 'zit_renkler',
    title: 'Zıt Renkler',
    description: 'Renk çarkında birbirine zıt olan renklerin kullanımı. Görsellerde dramatik etki yaratmak için komplementer renkler tercih edilir.',
    image: require('../assets/images/ArtPrompter/renkPaleti/zit-renkler.png'),
  },
  {
    id: 'pastel_tonlar',
    title: 'Pastel Tonlar',
    description: 'Yumuşak, açık renklerin kullanıldığı görseller.',
    image: require('../assets/images/ArtPrompter/renkPaleti/pastel-tonlar.png'),
  },
  {
    id: 'siyah_beyaz',
    title: 'Siyah Beyaz ',
    description: 'Renklerin dışlanarak yalnızca tonların öne çıktığı görseller.',
    image: require('../assets/images/ArtPrompter/renkPaleti/siyah-beyaz.png'),
  },
  {
    id: 'dogal_tonlar',
    title: 'Doğal Tonlar',
    description: 'Toprak tonları, ahşap dokuları ve doğadan esinlenen yumuşak renkler.',
    image: require('../assets/images/ArtPrompter/renkPaleti/dogal-tonlar.png'),
  },
  {
    id: 'neon_renkler',
    title: 'Neon Renkler',
    description: 'Parlak, fosforlu ve çağdaş görünümler için kullanılan renkler.',
    image: require('../assets/images/ArtPrompter/renkPaleti/neon-renkler.png'),
  },
  {
    id: 'gradyan_gecisler',
    title: 'Gradyan Geçişler',
    description: 'Bir renkten diğerine yumuşak geçişler sağlayan, akışkan görsel efektler.',
    image: require('../assets/images/ArtPrompter/renkPaleti/gradyan-gecisler.png'),
  },
  {
    id: 'retro_renk_paleti',
    title: 'Retro Renk Paleti',
    description: 'Geçmiş dönemlerin renk kombinasyonlarını yansıtan tonlar.',
    image: require('../assets/images/ArtPrompter/renkPaleti/retro-renk-paleti.png'),
  },
  {
    id: 'metalik_renkler',
    title: 'Metalik Renkler',
    description: 'Altın, gümüş ve bakır tonları gibi parlak, lüks ve şık renk paletleri. Görsellerde lüks ve sofistike bir hava yaratılır.',
    image: require('../assets/images/ArtPrompter/renkPaleti/metalik-renkler.png'),
  },
];

// Kompozisyon/Perspektif
export const compositions: PromptOption[] = [
  {
    id: 'tek_aci',
    title: 'Tek Açı',
    description: 'Görselin tek bir açıdan veya sabit bir bakış noktasından sunulması.',
    image: require('../assets/images/ArtPrompter/kompozisyonVePerspektif/tek-aci.png'),
  },
  {
    id: 'yakin_cekim',
    title: 'Yakın Çekim',
    description: 'Bir objenin, karakterin veya detayın yakından gösterildiği, vurgu sağlayan görseller.',
    image: require('../assets/images/ArtPrompter/kompozisyonVePerspektif/yakin-cekim.png'),
  },
  {
    id: 'uzak_cekim',
    title: 'Uzak Çekim',
    description: 'Sahnenin geniş bir bakış açısıyla sunulduğu, ortamın bütünlüğünü vurgulayan kompozisyonlar.',
    image: require('../assets/images/ArtPrompter/kompozisyonVePerspektif/uzak-cekim.png'),
  },
  {
    id: 'kus_bakisi',
    title: 'Kuş Bakışı',
    description: 'Yüksek bir noktadan aşağıya doğru bakışı simgeleyen, genellikle harita görünümüne benzer kompozisyonlar.',
    image: require('../assets/images/ArtPrompter/kompozisyonVePerspektif/kus-bakisi.png'),
  },
  {
    id: 'alt_perspektif',
    title: 'Alt Perspektif',
    description: 'Aşağıdan yukarıya doğru bir bakış açısıyla, büyüklük ve ihtişam etkisi yaratan düzenlemeler.',
    image: require('../assets/images/ArtPrompter/kompozisyonVePerspektif/alttan-perspektif.png'),
  },
  {
    id: 'simetrik',
    title: 'Simetrik',
    description: 'Hem yükseklik hem derinlik algısı yaratan çizim perspektifi',
    image: require('../assets/images/ArtPrompter/kompozisyonVePerspektif/simetrik.png'),
  },
  {
    id: 'asimtirik',
    title: 'Asimtirik',
    description: 'Daha dinamik bir his yaratmak için bilinçli olarak denge bozan kompozisyon düzenleri.',
    image: require('../assets/images/ArtPrompter/kompozisyonVePerspektif/asimetrik.png'),
  },
  {
    id: 'cercive_icinde_cercive',
    title: 'Çerçeve İçinde Çerçeve',
    description: 'Bir sahnenin doğal veya yapay bir çerçeve ile sınırlandırılması.',
    image: require('../assets/images/ArtPrompter/kompozisyonVePerspektif/cerceve-icinde-cerceve.png'),
  },
  {
    id: 'uc_bir_kurali',
    title: 'Üçte Bir Kuralı',
    description: 'Görselin üç eşit parçaya bölünerek odak noktalarının kesişim noktalarına yerleştirildiği düzenleme kuralı.',
    image: require('../assets/images/ArtPrompter/kompozisyonVePerspektif/ucte-bir-kurali.png'),
  },
];

// Karakter/Figür
export const characterFigures: PromptOption[] = [
  {
    id: 'insan_figürleri',
    title: 'İnsan Figürleri',
    description: 'Portreler, bireyler, gruplar ve topluluklar. İnsanların doğal pozları ve ifadesi, görselin duygusal tonunu etkiler ve anlatıyı yönlendirir.',
    image: require('../assets/images/ArtPrompter/karakterlerVeFigurler/insan-figurleri.png'),
  },
  {
    id: 'hayvan_figürleri',
    title: 'Hayvan Figürleri',
    description: 'Gerçek ya da fantastik hayvanlar. ',
    image: require('../assets/images/ArtPrompter/karakterlerVeFigurler/hayvan-figurleri.png'),
  },
  {
    id: 'mitolojik_varliklar',
    title: 'Mitolojik Varlıklar',
    description: 'Ejderhalar, periler, centaurlar vb. Eski mitolojilerden ilham alınarak yaratılmış veya tamamen hayal edilmiş varlıklar.',
    image: require('../assets/images/ArtPrompter/karakterlerVeFigurler/mitolojik-varliklar.png'),
  },
  {
    id: 'canli_olmayan_varliklar',
    title: 'Canlı Olmayan Varlıklar',
    description: 'Robotlar, mekanik figürler ve nesneler. ',
    image: require('../assets/images/ArtPrompter/karakterlerVeFigurler/canli-olmayan-varliklar.png'),
  },
  {
    id: 'fantastik_karakterler',
    title: 'Fantastik Karakterler',
    description: 'Büyülü ve kurgusal dünyalardan gelen karakterler, görsellerde mistik bir atmosfer yaratır.',
    image: require('../assets/images/ArtPrompter/karakterlerVeFigurler/fantastik-karakterler.png'),
  },
  {
    id: 'tarihi_karakterler',
    title: 'Tarihi Karakterler',  
    description: 'Geçmişte yaşamış önemli figürler veya tarihsel temalara dayalı karakterler.',
    image: require('../assets/images/ArtPrompter/karakterlerVeFigurler/tarihi-karakterler.png'),
  },
  {
    id: 'karikatur_ve_cizgi_karakterler',
    title: 'Karikatur ve Çizgi Karakterler',  
    description: 'Eğlenceli ve abartılı çizgilerle tasarlanmış figürler.',
    image: require('../assets/images/ArtPrompter/karakterlerVeFigurler/karikatur-ve-cizgi-karakterler.png'),
  },
  {
    id: 'super_kahramanlar',
    title: 'Süper Kahramnalar ',  
    description: 'Güçlü, karizmatik ve ikonik figürler.',
    image: require('../assets/images/ArtPrompter/karakterlerVeFigurler/super-kahramanlar.png'),
  },
  {
    id: 'bilim_insanlari_ve_teknolojik_figurler',
    title: 'Bilim İnsanları ve Teknolojik Figürler ',  
    description: 'Bilim dünyasını temsil eden karakterler. ',
    image: require('../assets/images/ArtPrompter/karakterlerVeFigurler/bilim-insanlari-ve-teklonojik-figurler.png'),
  },
  {
    id: 'sokak_ve_gunluk_yasam_karakterleri',
    title: 'Sokak ve Günlük Yaşam Karakterleri ',  
    description: 'Şehir hayatında sıkça rastlanan sıradan insanların figürleri.',
    image: require('../assets/images/ArtPrompter/karakterlerVeFigurler/sokak-ve-gunluk-yasam-karakterleri.png'),
  },
];

// Zaman
export const times: PromptOption[] = [
  {
    id: 'antik_cag_ve_eski_uygarliklar',
    title: 'Antik Çağ ve Eski Uygarlıklar ',
    description: 'Antik Yunan, Roma, Mısır ve Mezopotamya gibi erken uygarlıkların dönemine ait sahneler.',
    image: require('../assets/images/ArtPrompter/zaman/antik-cag-ve-eski-uygarliklar.png'),
  },
  {
    id: 'orta_cag',
    title: 'Orta Çağ',
    description: 'Şövalyeler, kaleler, gotik mimari ve feodal yapıların öne çıktığı dönem ',
    image: require('../assets/images/ArtPrompter/zaman/orta-cag.png'),
  },
  {
    id: 'ronesans ',
    title: 'Rönesans ',
    description: '14.-17. yüzyıllarda sanat ve bilimin altın çağını yaşadığı dönem.',
    image: require('../assets/images/ArtPrompter/zaman/ronesans.png'),
  },
  {
    id: 'sanayi_devrimi ',
    title: 'Sanayi Devrimi ',
    description: '18.-19. yüzyıllarda endüstrileşmenin ve şehirleşmenin hız kazandığı dönem.',
    image: require('../assets/images/ArtPrompter/zaman/sanayi-devrimi.png'),
  },
  {
    id: 'nostaljik_donemler ',
    title: 'Nostaljik Dönemler ',
    description: 'Eski fotoğraflar, retro tasarımlar ve geçmişin ruhunu yansıtan sahneler.',
    image: require('../assets/images/ArtPrompter/zaman/nostalijik-donemler.png'),
  },
  {
    id: 'gunumuz_ve_modern_zamanlar ',
    title: 'Günümüz ve Modern Zamanlar ',
    description: 'Modern şehir manzaraları, dijital çağ ve globalleşmenin etkilerinin görüldüğü zaman dilimi.',
    image: require('../assets/images/ArtPrompter/zaman/gunumuz-ve-modern-zamanlar.png'),
  },
  {
    id: 'futuristik_donemler ',
    title: 'Futuristik Dönemler ',
    description: 'Ütopik ve distopik gelecek senaryoları.',
    image: require('../assets/images/ArtPrompter/zaman/futuristik-donemler.png'),
  },
  {
    id: 'ileri_teknoloji_ve_zaman_yolculugu ',
    title: 'İleri Teknoloji ve Zamana Yolculuk ',
    description: 'Uzay kolonileri, yapay zeka ve zaman yolculuğunun işlendiği görseller.',
    image: require('../assets/images/ArtPrompter/zaman/ileri-teklonoji-ve-zaman-yolculugu.png'),
  },
  {
    id: 'post_apokaliptik_zamanlar ',
    title: 'Post-Apokaliptik Zamanlar ',
    description: 'Felaket sonrası dünya, çevresel yıkımlar ve kıyamet sonrası yaşam mücadelelerini anlatan sahneler.',
    image: require('../assets/images/ArtPrompter/zaman/post-apokaliptik-gelecek.png'),
  },
  {
    id: 'alternatif_tarih_ve_paralel_evrenler ',
    title: 'Alternatif Tarih ve Paralel Evrenler ',
    description: 'Gerçek tarihi olayların farklı bir şekilde geliştiği alternatif zaman çizgileri.',
    image: require('../assets/images/ArtPrompter/zaman/alternatif-tarih-ve-paralel-evrenler.png'),
  },
];

// Simge/Anlam
export const symbolMeanings: PromptOption[] = [
  {
    id: 'dogal_simgeler',
    title: 'Doğal Simgeler ',
    description: 'Doğada bulunan unsurların sembolik anlamları, insan yaşamı ve doğa arasındaki ilişkiyi temsil eder.',
    image: require('../assets/images/ArtPrompter/simgeVeSimgeselAnlam/dogal-simgeler.png'),
  },
  {
    id: 'kultürel_ve_toplumsal_simgeler',
    title: 'Kültürel ve Toplumsal Simgeler ',
    description: 'Toplumlar ve kültürler tarafından benimsenmiş, kolektif kimliği yansıtan semboller.',
    image: require('../assets/images/ArtPrompter/simgeVeSimgeselAnlam/kutlurel-ve-toplumsal-simgeler.png'),
  },
  {
    id: 'psikolojik_simgeler',
    title: 'Psikolojik Simgeler ',
    description: 'İçsel dünyayı ve bilinçaltını temsil eden semboller, duygusal ve zihinsel durumları yansıtır.',
    image: require('../assets/images/ArtPrompter/simgeVeSimgeselAnlam/psikolojik-simgeler.png'),
  },
  {
    id: 'evrensel_simgeler',
    title: 'Evrensel Simgeler ',
    description: 'Kültür ve coğrafya fark etmeksizin, tüm insanlık için ortak anlamlar taşıyan semboller.',
    image: require('../assets/images/ArtPrompter/simgeVeSimgeselAnlam/evrensel-simgeler.png'),
  },
  {
    id: 'mitolojik_simgeler',
    title: 'Mitolojik Simgeler ',
    description: 'Eski medeniyetlerin inançlarından gelen semboller, mitolojik anlatıları ve kahramanlık hikayelerini temsil eder.',
    image: require('../assets/images/ArtPrompter/simgeVeSimgeselAnlam/mitolojik-simgeler.png'),
  },
  {
    id: 'dini_simgeler',
    title: 'Dini Simgeler ',
    description: 'Farklı inanç sistemlerine ait semboller, ruhsal kavramları ve ilahi öğretileri temsil eder.',
    image: require('../assets/images/ArtPrompter/simgeVeSimgeselAnlam/dini-simgeler.png'),
  },
  {
    id: 'astrolojik_ve_kozmik_simgeler',
    title: 'Astrolojik ve Kozmik Simgeler ',
    description: 'Evrenin işleyişine dair semboller, gezegenler ve burçlar ile bağlantılı anlamlar taşır.',
    image: require('../assets/images/ArtPrompter/simgeVeSimgeselAnlam/astrolojik-ve-kozmik-simgeler.png'),
  },
  {
    id: 'geometrik_simgeler',
    title: 'Geometrik Simgeler ',
    description: 'Matematiksel ve estetik anlamlar taşıyan formlar, düzen ve dengeyi temsil eder.',
    image: require('../assets/images/ArtPrompter/simgeVeSimgeselAnlam/geometrik-simgeler.png'),
  },
  {
    id: 'renklerin_simgesel_anlamlari',
    title: 'Renklerin Simgesel Anlamları ',
    description: 'Renklerin psikolojik ve kültürel anlamları, izleyicinin duygusal tepkisini yönlendirir..',
    image: require('../assets/images/ArtPrompter/simgeVeSimgeselAnlam/renklerin-simgesel-anlamlari.png'),
  },
  {
    id: 'gunluk_hayat_simgeleri',
    title: 'Günlük Hayat Simgeleri ',
    description: 'Gündelik yaşamda karşılaşılan semboller, işaret ve göstergeler aracılığıyla hızlı bir anlam yaratır.',
    image: require('../assets/images/ArtPrompter/simgeVeSimgeselAnlam/gunluk-hayat-simgeleri.png'),
  },
];

// Hava Durumu
export const weathers: PromptOption[] = [
  {
    id: 'gunesli',
    title: 'Güneşli',
    description: 'Parlak ve sıcak günlerin atmosferini yansıtan sahneler.',
    image: require('../assets/images/ArtPrompter/havaDurumuVeyaIklim/gunesli-hava.png'),
  },
  {
    id: 'yagmurlu_hava',
    title: 'Yağmurlu Hava',
    description: 'Serinlik ve melankoli hissi taşıyan sahneler.',
    image: require('../assets/images/ArtPrompter/havaDurumuVeyaIklim/yagmurlu-hava.png'),
  },
  {
    id: 'firtinali_hava',
    title: 'Fırtınalı Hava',
    description: 'Dramatik ve güçlü bir atmosfer yaratmak için kullanılan öğeler.',
    image: require('../assets/images/ArtPrompter/havaDurumuVeyaIklim/firtinali-hava.png'),
  },
  {
    id: 'karli_ve_kis_manzarlari',
    title: 'Karli ve Kis Manzarlari',
    description: 'Beyaz örtüyle kaplanmış kış sahneleri, sakinlik ve nostaljik hisler yaratır.',
    image: require('../assets/images/ArtPrompter/havaDurumuVeyaIklim/karli-ve-kis-manzaralari.png'),
  },
  {
    id: 'sicak_ve_tropikal_iklim',
    title: 'Sıcak ve Tropikal İklim',
    description: 'Sıcak bölgelerin canlı ve hareketli atmosferini yansıtan sahneler.',
    image: require('../assets/images/ArtPrompter/havaDurumuVeyaIklim/sicak-ve-tropikal-iklim.png'),
  },
  {
    id: 'sislı_ortamlar',
    title: 'Sıslı Ortamlar',
    description: 'Gizemli ve dramatik atmosferler oluşturmak için kullanılan hava durumu unsurları.',
    image: require('../assets/images/ArtPrompter/havaDurumuVeyaIklim/sisli-ortamlar.png'),
  },
  {
    id: 'ruzgarli_hava',
    title: 'Rüzgarlı Hava',
    description: 'Dinamik ve hareketli sahneler için rüzgar etkisinin kullanıldığı atmosferler.',
    image: require('../assets/images/ArtPrompter/havaDurumuVeyaIklim/ruzgarli-hava.png'),
  },
  {
    id: 'mevsim_geçisleri',
    title: 'Mevsim Geçişleri ',
    description: 'İlkbahardan kışa kadar geçen süreçlerin doğa üzerindeki etkisini gösteren sahneler.',
    image: require('../assets/images/ArtPrompter/havaDurumuVeyaIklim/mevsim-gecisleri.png'),
  },
  {
    id: 'dogal_afetler',
    title: 'Doğal Afetler ',
    description: 'Depremler, tsunamiler, hortumlar gibi doğanın yıkıcı gücünü anlatan sahneler.',
    image: require('../assets/images/ArtPrompter/havaDurumuVeyaIklim/dogal-afetler.png'),
  },
  {
    id: 'kuzey_isiklari_ve_atmosferik_doga_olaylari',
    title: 'Kuzey Işıkları ve Atmosferik Doğa Olayları ',
    description: 'Kuzey ışıkları, gökkuşağı ve şimşek gibi doğa olaylarının görsellerde estetik bir şekilde kullanılması.', 
    image: require('../assets/images/ArtPrompter/havaDurumuVeyaIklim/kuzey-isiklari-ve-atmosferik-doga-olaylari.png'),
  },
];

// En Boy Oranı
export const aspectRatios: PromptOption[] = [
  {
    id: 'kare_en_boy_orani',
    title: 'Kare En Boy Oranı (1:1)',
    description: 'Hem genişlik hem de yükseklik eşittir. Genellikle dengeyi ve simetrik düzeni vurgular.',
    image: require('../assets/images/ArtPrompter/EnBoyOranlari/kareEnBoyOrani.png'),
  },
  {
    id: 'portre_en_boy_orani',
    title: 'Portre En Boy Oranı (2:3 veya 4:5)',
    description: 'İnsan figürlerinin veya dikey biçimlerin işlendiği kompozisyonlarda kullanılır.',
    image: require('../assets/images/ArtPrompter/EnBoyOranlari/portreEnBoyOrani.png'),
  },
  {
    id: 'manzara_en_boy_orani',
    title: 'Manzara En Boy Oranı (3:2 veya 16:9)',
    description: 'Geniş yatay kompozisyonlar için idealdir.',
    image: require('../assets/images/ArtPrompter/EnBoyOranlari/manzaraEnBoyOrani.png'),
  },
  {
    id: 'panoramik_en_boy_orani',
    title: 'Panoramik En Boy Oranı (2:1 veya daha geniş)',
    description: 'Çok geniş yatay kompozisyonlar için kullanılır.',
    image: require('../assets/images/ArtPrompter/EnBoyOranlari/panoramikEnBoyOrani.png'),
  },
  {
    id: 'klasik_en_boy_orani',
    title: 'Klasik En Boy Oranı (4:3)',
    description: 'Eski tv ve bilgisayar monitörlerinde kullanılan geleneksel bir oran.',
    image: require('../assets/images/ArtPrompter/EnBoyOranlari/klasikEnBoyOrani.png'),
  },{
    id: 'genis_ekran_en_boy_orani',
    title: 'Geniş Ekran En Boy Oranı (16:10)',
    description: 'Modern bilgisayar monitörlerinde yaygın olarak kullanılan bir orandır.',
    image: require('../assets/images/ArtPrompter/EnBoyOranlari/genisEkranEnBoyOrani.png'),
  },
  {
    id: 'sinema_en_boy_orani',
    title: 'Sinema En Boy Oranı (21:9)',
    description: 'Sinematik deneyimler için idealdir.',
    image: require('../assets/images/ArtPrompter/EnBoyOranlari/sinemaEnBoyOrani.png'),
  },
  {
    id: 'yuksek_en_boy_orani',
    title: 'Yüksek En Boy Oranı (9:16 VEYA 1:2)',
    description: 'Dikey olarak uzun kompozisyonlar için uygundur.',
    image: require('../assets/images/ArtPrompter/EnBoyOranlari/yuksekEnBoyOrani.png'),
  },
  {
    id: 'altin_en_boy_orani',
    title: 'Altın En Boy Oranı (1:1.618)',
    description: 'Doğal ve estetik olarak en çekici kabul edilen orandır. ',
    image: require('../assets/images/ArtPrompter/EnBoyOranlari/altinOran.png'),
  },
  {
    id: 'mektup_en_boy_orani',
    title: 'Mektup En Boy Oranı (8.5:11)',
    description: 'Özellikle yazılı belgeler ve basılı materyaller için kullanılır. ',
    image: require('../assets/images/ArtPrompter/EnBoyOranlari/mektupEnBoyOrani.png'),
  },
];

// Eklenecek Öğeler
export const itemsToAdd: PromptOption[] = [
  {
    id: 'metin',
    title: 'Metin',
    description: 'Yazı, kelimeler veya sloganlar',
    image: defaultImage,
  },
  {
    id: 'logo',
    title: 'Logo',
    description: 'Marka veya şirket logosu',
    image: defaultImage,
  },
  {
    id: 'arka_plan',
    title: 'Özel Arka Plan',
    description: 'Belirli bir arka plan veya manzara',
    image: defaultImage,
  },
];

// İstenmeyen Öğeler
export const itemsToAvoid: PromptOption[] = [
  {
    id: 'text',
    title: 'Metin',
    description: 'Görüntüde yazı olmaması',
    image: defaultImage,
  },
  {
    id: 'insan',
    title: 'İnsan',
    description: 'İnsan figürlerinin olmaması',
    image: defaultImage,
  },
  {
    id: 'modern_oge',
    title: 'Modern Öğeler',
    description: 'Modern teknoloji veya nesnelerin olmaması',
    image: defaultImage,
  },
];

// Prompt Dili
export const promptLanguages: PromptOption[] = [
  {
    id: 'turkce',
    title: 'Türkçe',
    description: 'Türkçe dilde oluşturulmuş prompt',
    image: defaultImage,
  },
  {
    id: 'ingilizce',
    title: 'İngilizce',
    description: 'İngilizce dilde oluşturulmuş prompt',
    image: defaultImage,
  },
];

// Kelime Sayısı
export const wordCounts: PromptOption[] = [
  {
    id: 'kisa',
    title: 'Kısa (10-20 kelime)',
    description: 'Basit ve öz prompt',
    image: defaultImage,
  },
  {
    id: 'orta',
    title: 'Orta (20-50 kelime)',
    description: 'Detaylı ama çok uzun olmayan prompt',
    image: defaultImage,
  },
  {
    id: 'uzun',
    title: 'Uzun (50+ kelime)',
    description: 'Çok detaylı ve kapsamlı prompt',
    image: defaultImage,
  },
]; 