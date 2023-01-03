import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contenido: { flex: 1, margin: 20 },
  titulo: { fontSize: 18, fontWeight: "bold", marginBottom: 5 },
  input: {
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    marginBottom: 20,
  },
});
