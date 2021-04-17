import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E8EAED",
    flex: 1,
  },
  header: {
    color: "green",
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  header_text: {
    fontSize: 25,
    fontWeight: "bold",
  },
  task_container: {
    width: "100%",
    marginTop: 20,
  },
  task_box: {
    backgroundColor: "#FFFFFF",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
    marginBottom: 20,
    borderRadius: 10,
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  task_box_square: {
    width: 24,
    height: 24,
    backgroundColor: "rgba(85, 188, 246, 0.4)",
  },
  task_box_text: {
    fontSize: 20,
    width: "80%",
    flexWrap: "wrap",
    padding: 5,
  },
  task_box_remove: {
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 10,
    width: 24,
    height: 24,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bottom_container: {
    position: "absolute",
    bottom: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  bottom_input: {
    backgroundColor: "white",
    width: "70%",
    padding: 10,
    borderRadius: 20,
  },
  bottom_button: {
    width: 40,
    height: 40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  bottom_button_text: {
    fontSize: 35,
    color: "#C0C0C0",
  },
});

export default styles;
