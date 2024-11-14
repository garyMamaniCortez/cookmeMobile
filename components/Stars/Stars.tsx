import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
import styles from "./styles";
import StarsProps from "@/interfaces/StarsProps";

const Stars: React.FC<StarsProps> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <View style={styles.ratingContainer}>
            {[...Array(fullStars)].map((_, i) => (
                <FontAwesome key={`full-${i}`} name="star" size={16} color="#FFD700" />
            ))}
            {halfStar && <FontAwesome name="star-half" size={16} color="#FFD700" />}
            {[...Array(emptyStars)].map((_, i) => (
                <FontAwesome key={`empty-${i}`} name="star-o" size={16} color="#FFD700" />
            ))}
        </View>
    )
}

export default Stars;
