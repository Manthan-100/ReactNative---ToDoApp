import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Task extends Component {
  render() {
    return (
      <View>
        <Text styel={style.item}>{this.props.text}</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  item: {
    marginTop: 10,
  },
});

export default Task;
