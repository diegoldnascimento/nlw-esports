import { ImageBackground } from "react-native";
import { styles } from "./Background.styles";

import backgroundImage from "../../assets/background-galaxy.png";

interface Props {
  children: React.ReactNode;
}

const Background = ({ children }: Props) => {
  return (
    <ImageBackground
      defaultSource={backgroundImage}
      style={styles.container}
      source={backgroundImage}
    >
      {children}
    </ImageBackground>
  );
};

export { Background };
