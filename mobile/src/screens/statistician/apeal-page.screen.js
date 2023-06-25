import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [appealDate, setAppealDate] = useState("");
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    console.log("Submitting comment:", comment);
    // You can add your own logic here to submit the comment to your backend
    setSent(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.header}>Appeal</Text>
        <View style={styles.inputContainer}>
          <View style={styles.nameContainer}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={(text) => setLastName(text)}
            />
          </View>
          <TextInput
            style={styles.input}
            placeholder="Department"
            value={department}
            onChangeText={(text) => setDepartment(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Appeal Date"
            value={appealDate}
            onChangeText={(text) => setAppealDate(text)}
          />
          <TextInput
            style={styles.textarea}
            placeholder="Write your appeal here"
            value={comment}
            onChangeText={(text) => setComment(text)}
            multiline={true}
            numberOfLines={10}
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
          {sent && <Text style={styles.successMessage}>Sent successfully!</Text>}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  form: {
    width: "80%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  inputContainer: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 8,
    borderRadius: 5,
    marginBottom: 16,
  },
  textarea: {
    backgroundColor: "#F5F5F5",
    padding: 8,
    borderRadius: 5,
    marginBottom: 16,
    height: 200,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  successMessage: {
    color: "#4CAF50",
    textAlign: "center",
    marginTop: 16,
  },
});

export default Home;