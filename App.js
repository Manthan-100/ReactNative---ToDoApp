import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Task from "./components/Task";
import styles from "./stylesheet";

class App extends Component {
  state = {
    input: "",
    tasks: [],
    visible: true,
  };
  // Function to add item
  addItem = () => {
    if (this.state.input === "") {
      return;
    }
    const originaTasks = this.state.tasks;
    const task = {
      id: Date(),
      text: this.state.input,
    };
    originaTasks.push(task);
    this.setState({ task: originaTasks, input: "" });
    this.textInput.clear();
  };
  // Function to remove item
  removeItem = (id) => {
    const originalTaks = this.state.tasks;
    const filterTasks = originalTaks.filter((task) => {
      return id != task.id;
    });
    this.setState({ tasks: filterTasks });
  };

  render() {
    return (
      <>
        <View style={styles.container}>
          <View>
            {/* Header */}
            <View style={styles.header}>
              <Text style={styles.header_text}>Today's Task</Text>
            </View>
            {/* Tasks */}
            <ScrollView style={styles.task_container}>
              {this.state.tasks.map((task) => (
                <Task
                  text={task.text}
                  key={task.id}
                  id={task.id}
                  removeItem={this.removeItem}
                />
              ))}
            </ScrollView>
          </View>
          <KeyboardAvoidingView
            style={styles.bottom_container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              onChangeText={(input) => this.setState({ input })}
              style={styles.bottom_input}
              placeholder={"Write a Task"}
              ref={(input) => {
                this.textInput = input;
              }}
            />
            <TouchableOpacity
              style={styles.bottom_button}
              onPress={this.addItem}
            >
              <Text style={styles.bottom_button_text}>+</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </>
    );
  }
}

export default App;
