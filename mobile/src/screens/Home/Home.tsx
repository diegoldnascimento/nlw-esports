import React from "react";
import { Text, View, Image, FlatList } from "react-native";

import logo from "../../assets/logo-nlw-esports.png";
import { GameCard } from "../../components/gameCard/GameCard";
import { Heading } from "../../components/heading/Heading";
import { GAMES } from "../../utils/games";
import { styles } from "./Home.styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseja jogar..."
      ></Heading>

      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
        horizontal
      />
    </View>
  );
}
