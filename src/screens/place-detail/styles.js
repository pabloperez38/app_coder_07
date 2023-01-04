import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: { height: "40%", minHeight: 300, width: "100%" },
  location: {
    margin: 20,
    width: "90%",
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 9,
    elevation: 5,
    borderRadius: 5,
  },
  adrressContainer: { padding: 20 },
  address: { color: colors.primary, textAlign: "center" },
  map: {
    alignItems: "center",
    alignContent: "center",
    marginLeft: 0,
  },
});
