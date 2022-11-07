import { StyleSheet } from "react-native";
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    paddingVertical: 5,
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Opensans",
    marginBottom: 10,
  },
  message: {
    marginVertical: 5,
  },
  helperText: {
    fontSize: 12,
    fontFamily: "OpensansBold",
    color: "#ff0000",
  },
});
