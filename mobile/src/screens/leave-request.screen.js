import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Home = () => {
  const [dayTimeType, setDayTimeType] = useState("fullDay");
  const [leaveType, setLeaveType] = useState("annual");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleCancel = () => {
    // Reset form fields or perform any other action
    setDayTimeType("fullDay");
    setLeaveType("annual");
    setName("");
    setEmail("");
    setReason("");
    setSuccessMessage("");
  };

  const handleSubmit = () => {
    // Send leave request data to the server or perform any other action

    // Show success message
    setSuccessMessage("Leave request successfully submitted!");
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginLeft: 10, padding: 20, maxWidth: "80%" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          Leave Request
        </Text>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 5 }}>Your Name</Text>
          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            placeholder="Enter your name"
            style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10 }}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 5 }}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter your email"
            style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10 }}
          />
        </View>
        <View style={{ flexDirection: "row", marginBottom: 20 }}>
          <View style={{ marginRight: 10 }}>
            <Text style={{ marginBottom: 5 }}>From Date</Text>
            <TextInput
              type="date"
              style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10 }}
              required
            />
          </View>
          <View>
            <Text style={{ marginBottom: 5 }}>To Date</Text>
            <TextInput
              type="date"
              style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10 }}
              required
            />
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 5 }}>Day Time Type</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 10 }}>
              <input
                type="radio"
                value="firstHalf"
                checked={dayTimeType === "firstHalf"}
                onChange={() => setDayTimeType("firstHalf")}
              />
              <Text>First Half</Text>
            </View>
            <View style={{ marginRight: 10 }}>
              <input
                type="radio"
                value="secondHalf"
                checked={dayTimeType === "secondHalf"}
                onChange={() => setDayTimeType("secondHalf")}
              />
              <Text>Second Half</Text>
            </View>
            <View style={{ marginRight: 10 }}>
              <input
                type="radio"
                value="fullDay"
                checked={dayTimeType === "fullDay"}
                onChange={() => setDayTimeType("fullDay")}
              />
              <Text>Full Day</Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 5 }}>Leave Type</Text>
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginRight: 10 }}>
              <input
                type="radio"
                value="annual"
                checked={leaveType === "annual"}
                onChange={() => setLeaveType("annual")}
              />
              <Text>Annual Leave</Text>
            </View>
            <View style={{ marginRight: 10 }}>
              <input
                type="radio"
                value="optional"
                checked={leaveType === "optional"}
                onChange={() => setLeaveType("optional")}
              />
              <Text>Optional Leave</Text>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ marginBottom: 5 }}>Reason for Leave</Text>
          <TextInput
            value={reason}
            onChangeText={(text) => setReason(text)}
            style={{ borderWidth: 1, borderColor: "gray", borderRadius: 5, padding: 10 }}
            required
            multiline
          />
        </View>
        <View style={{ marginBottom: 20, flexDirection: "row" }}>
          <Button
            title="Apply"
            onPress={handleSubmit}
            color="#007AFF"
          />
          <Button
            title="Cancel"
            onPress={handleCancel}
            color="#FF3B30"
          />
        </View>
        {successMessage && (
          <View style={{ backgroundColor: "green", borderRadius: 5, padding: 10 }}>
            <Text style={{ color: "white", marginBottom: 5 }}>{successMessage}</Text>
            <Button
              title="OK"
              onPress={() => setSuccessMessage("")}
              color="green"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Home;
