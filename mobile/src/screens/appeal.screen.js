import React, { useState } from "react";
import { Text, View, TextInput, Button } from "react-native";
import Layout from "../component/layout/layout.component";

const Appeal = ({ navigation }) => {
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = () => {
    console.log("Submitting comment:", comment);
    // You can add your own logic here to submit the comment to your backend
    setSent(true);
  };

  const handleChange = (value) => {
    setComment(value);
  };
  const body = (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        Appeal
      </Text>
      <TextInput
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 16,
          padding: 8,
        }}
        value={comment}
        onChangeText={handleChange}
        placeholder="Write your appeal here"
        multiline
      />
      <Button title="Send" onPress={handleSubmit} disabled={!comment} />
      {sent && (
        <Text style={{ color: "green", marginTop: 16 }}>
          Sent successfully!
        </Text>
      )}
    </View>
  );
  return <Layout navigation={navigation} bodyElement={body} />;
};

export default Appeal;
