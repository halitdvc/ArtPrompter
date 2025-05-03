import { View, Text, StyleSheet } from "react-native";
import ArtCard, { ArtMovement } from "./ArtCard";

interface ArtCardGridProps {
  artMovements: ArtMovement[];
  title?: string;
  onSelectCard?: (index: number) => void;
}

const ArtCardGrid = ({ artMovements, title, onSelectCard }: ArtCardGridProps) => {
  // İlk satır (ilk 4 kart)
  const firstRow = artMovements.slice(0, 4);
  // İkinci satır (sonraki 4 kart)
  const secondRow = artMovements.slice(4, 8);

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}
      
      {/* İlk satır */}
      <View style={styles.row}>
        {firstRow.map((art, index) => (
          <ArtCard
            key={index}
            title={art.title}
            subtitle={art.subtitle}
            description={art.description}
            color={art.color}
            image={art.image}
            id={art.id}
            onPress={() => onSelectCard && onSelectCard(index)}
          />
        ))}
      </View>
      
      {/* İkinci satır */}
      <View style={styles.row}>
        {secondRow.map((art, index) => (
          <ArtCard
            key={index + 4}
            title={art.title}
            subtitle={art.subtitle}
            description={art.description}
            color={art.color}
            image={art.image}
            id={art.id}
            onPress={() => onSelectCard && onSelectCard(index + 4)}
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
    justifyContent: "space-between",
    marginBottom: 8,
  }
});

export default ArtCardGrid; 