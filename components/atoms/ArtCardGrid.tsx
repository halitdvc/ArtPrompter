import { View, Text, StyleSheet } from "react-native";
import ArtCard, { ArtMovement } from "./ArtCard";

interface ArtCardGridProps {
  artMovements: ArtMovement[];
  title?: string;
  onSelectCard?: (index: number) => void;
}

const ArtCardGrid = ({ artMovements, title, onSelectCard }: ArtCardGridProps) => {
  // Her satırda 3 kart olacak şekilde gruplara ayır
  const firstRow = artMovements.slice(0, 3);
  const secondRow = artMovements.slice(3, 6);
  const thirdRow = artMovements.slice(6, 9); // Üçüncü satır için

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      
      {/* İlk satır */}
      <View style={styles.row}>
        {firstRow.map((art, index) => (
          <ArtCard
            key={index} // index hala 0, 1, 2 olacak
            title={art.title}
            subtitle={art.subtitle}
            description={art.description}
            color={art.color}
            image={art.image}
            id={art.id}
            onPress={() => onSelectCard && onSelectCard(index)} // Orijinal index'i gönder
          />
        ))}
      </View>
      
      {/* İkinci satır */}
      <View style={styles.row}>
        {secondRow.map((art, index) => (
          <ArtCard
            key={index + 3} // index 0, 1, 2 olacak, key'i unique yapmak için 3 ekle
            title={art.title}
            subtitle={art.subtitle}
            description={art.description}
            color={art.color}
            image={art.image}
            id={art.id}
            onPress={() => onSelectCard && onSelectCard(index + 3)} // Orijinal index'i gönder (3, 4, 5)
          />
        ))}
      </View>
      
      {/* Üçüncü satır */}
      <View style={styles.row}>
        {thirdRow.map((art, index) => (
          <ArtCard
            key={index + 6} // index 0, 1, 2 olacak, key'i unique yapmak için 6 ekle
            title={art.title}
            subtitle={art.subtitle}
            description={art.description}
            color={art.color}
            image={art.image}
            id={art.id}
            onPress={() => onSelectCard && onSelectCard(index + 6)} // Orijinal index'i gönder (6, 7, 8)
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
  },
  title: {
    color: "white",
    fontSize: 18,
    marginBottom: 10,
    paddingHorizontal: 5
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around", // Kartlar arasında eşit boşluk bırak
    marginBottom: 8,
  }
});

export default ArtCardGrid; 