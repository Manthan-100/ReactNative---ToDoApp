import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
import styles from "./stylesheet";

class App extends Component {
  state = {
    text: "hello",
  };
  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.header}>
            <Text style={styles.header_text}>Today's Task</Text>
          </View>
          <Task text={this.state.text} />
        </View>
      </View>
    );
  }
}

export default App;
