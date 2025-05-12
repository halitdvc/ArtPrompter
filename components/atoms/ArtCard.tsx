import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { ImageSourcePropType } from "react-native";

export interface ArtMovement {
  title: string;
  subtitle: string;
  description: string;
  color: string;
  image?: ImageSourcePropType;
  id?: string;
}

interface ArtCardProps extends ArtMovement {
  onPress?: () => void;
}

const ArtCard = ({ 
  title, 
  subtitle, 
  description, 
  color, 
  image, 
  onPress 
}: ArtCardProps) => {
  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        {image ? (
          <Image source={image} style={styles.image} resizeMode="cover" />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imageText}>🖼️</Text>
          </View>
        )}
      </View>

      <Text style={styles.title}>
        {title}
        {"\n"}
        <Text style={styles.subtitle}>({subtitle})</Text>
      </Text>

      <View style={styles.descriptionContainer}>
        <Text style={styles.bullet}>•</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 8,
    width: '30%',
    margin: 2,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  imageContainer: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 35,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 5,
    overflow: 'hidden',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  imagePlaceholder: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#999",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  imageText: {
    fontSize: 10,
    color: "#999"
  },
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "white",
    marginBottom: 4,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "normal"
  },
  descriptionContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  bullet: {
    color: "white",
    marginRight: 2,
    fontSize: 10
  },
  description: {
    color: "white",
    flex: 1,
    fontSize: 9
  }
});

export default ArtCard; 