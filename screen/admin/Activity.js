import * as React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView, Text } from "react-native";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";

import { AntDesign, FontAwesome } from "@expo/vector-icons";

const LeftContent = (props) => (
  <AntDesign name="notification" size={24} color={"red"} />
);

const RenderCard = () => {
  return (
    <>
      <Card style={{ borderRadius: 15 }}>
        <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
        <Card.Content>
          <Title>Card title</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
        <Card.Actions style={{ alignSelf: "flex-end" }}>
          <Button onPress={() => alert("Delete")}>Delete</Button>
        </Card.Actions>
      </Card>
    </>
  );
};

const ActivityList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <RenderCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ActivityList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  card: {
    margin: 5,
  },
});
