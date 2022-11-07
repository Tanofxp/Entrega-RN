import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export const styles = StyleSheet.create({
  containerKeyboard: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    flex: 1,
    width:'auto',
    justifyContent: "center"
  },
  container: {
    width: "80%",
    maxWidth: 400,
    padding: 15,
    margin: 15,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    height: 300,
  },
  title: {
    fontSize: 18,
    fontFamily: "Opensans",
    marginVertical: 5,
    textAlign: "center",
  },
  label: {
    fontSize: 14,
    fontFamily: "Opensans",
    marginVertical: 5,
  },
  input: {
    borderBottomColor: colors.primary,
    borderBottomWidth: 1,
    width: "90%",
    fontFamily: "Opensans",
    marginBottom: 10,
  },
  promptButton: {
    backgroundColor: "#ffffff ",
    borderColor: colors.primary,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
  prompt: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop:5,
  },
  promptMessage: {
    fontSize: 14,
    color: colors.secondary,
    fontFamily: "Opensans",
  },

});
