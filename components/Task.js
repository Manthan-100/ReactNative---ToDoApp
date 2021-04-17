import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity } from "react-native";
import styles from "../stylesheet";

class Task extends Component {
  removeItem = () => {
    this.props.removeItem(this.props.id);
  };
  render() {
    return (
      <View style={styles.task_box}>
        <View style={styles.task_box_square}></View>
        <Text style={styles.task_box_text}>{this.props.text}</Text>
        <TouchableOpacity
          style={styles.task_box_remove}
          onPress={this.removeItem}
        >
          <Text>X</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Task;
