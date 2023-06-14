import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HomeScreenBody = ({ data }) => {
  // const {
  //   photoURL,
  //   department,
  //   firstName,
  //   lastName,
  //   identityCardNumber,
  //   email,
  //   departmentSpeciality,
  // } = data;

  return <>{JSON.stringify(data)}</>;
};
// <ScrollView contentContainerStyle={styles.container}>
//   <View style={styles.topHalfCircle} />
//   <View style={styles.fullCircle}>
//     <Image source={{ uri: photoURL }} style={styles.profileImage} />
//   </View>
//   <View style={styles.middleContainer}>
//     <Text style={styles.nameText}>{`${firstName} ${lastName}`}</Text>
//     <View style={styles.infoContainer}>
//       <View style={styles.infoRow}>
//         <Ionicons
//           name="card-outline"
//           size={24}
//           color="black"
//           style={styles.icon}
//         />
//         <View>
//           <Text style={styles.labelText}>ID:</Text>
//           <Text style={styles.valueText}>{identityCardNumber}</Text>
//         </View>
//       </View>
//       <View style={styles.infoRow}>
//         <Ionicons
//           name="mail-outline"
//           size={24}
//           color="black"
//           style={styles.icon}
//         />
//         <View>
//           <Text style={styles.labelText}>Email:</Text>
//           <Text style={styles.valueText}>{email}</Text>
//         </View>
//       </View>
//       <View style={styles.infoRow}>
//         <Ionicons
//           name="school-outline"
//           size={24}
//           color="black"
//           style={styles.icon}
//         />
//         <View>
//           <Text style={styles.labelText}>Department Speciality:</Text>
//           <Text style={styles.valueText}>{departmentSpeciality}</Text>
//         </View>
//       </View>
//     </View>
//   </View>
//   <TouchableOpacity style={styles.editButton}>
//     <Text style={styles.editButtonText}>Edit Profile</Text>
//   </TouchableOpacity>
// </ScrollView>
//   );
// };

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  topHalfCircle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 150,
    backgroundColor: "#3B7CBD",
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },
  fullCircle: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    width: 160,
    height: 160,
    borderRadius: 80,
    marginTop: -70,
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  middleContainer: {
    width: "100%",
  },
  nameText: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center",
  },
  infoContainer: {
    width: "100%",
    marginTop: 30,
    paddingHorizontal: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
    fontSize: 28,
  },
  labelText: {
    fontSize: 28,
    fontWeight: "bold",
    marginRight: 5,
  },
  valueText: {
    fontSize: 26,
  },
  editButton: {
    backgroundColor: "#3B7CBD",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 30,
    alignSelf: "center",
  },
  editButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
});

export default HomeScreenBody;
