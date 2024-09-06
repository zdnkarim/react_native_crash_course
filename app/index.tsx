import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={style.container}>
      <Text>Aora!</Text>
      <StatusBar style="auto" />
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
