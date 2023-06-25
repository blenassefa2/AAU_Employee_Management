import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.heading}>My Profile Detail</Text>
        <View style={styles.content}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Full Name:</Text>
              <Text>John Doe</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>ID Number:</Text>
              <Text>1234567890123</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Age:</Text>
              <Text>30</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Phone Number:</Text>
              <Text>555-555-5555</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Email:</Text>
              <Text>john.doe@example.com</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Marital Status:</Text>
              <Text>Single</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Nationality:</Text>
              <Text>American</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Town:</Text>
              <Text>Addis Ababa</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Woreda:</Text>
              <Text>Bole</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Kebele:</Text>
              <Text>22</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>House Number:</Text>
              <Text>123</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Employment Detail</Text>
        <View style={styles.content}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Employment Date:</Text>
              <Text>01/01/2020</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Employee Status:</Text>
              <Text>Active</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.label}>Job Title:</Text>
              <Text>Software Engineer</Text>
            </View>
            <View style={styles.col}>
              <Text style={styles.label}>Salary:</Text>
              <Text>50000</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Family Background</Text>
        <View style={styles.content}>
          <View style={styles.row}>
            <View style={styles.col}>
              <Text style={styles.subheading}>Father Information</Text>
              <View style={styles.innerContent}>
                <Text style={styles.label}>Full Name:</Text>
                <Text>Peter Smith</Text>
                <Text style={styles.label}>Phone Number:</Text>
                <Text>555-555-5555</Text>
                <Text style={styles.label}>Email:</Text>
                <Text>peter.smith@example.com</Text>
              </View>
            </View>
            <View style={styles.col}>
              <Text style={styles.subheading}>Mother Information</Text>
              <View style={styles.innerContent}>
                <Text style={styles.label}>Full Name:</Text>
                <Text>Mary Johnson</Text>
                <Text style={styles.label}>Phone Number:</Text>
                <Text>555-555-5555</Text>
                <Text style={styles.label}>Email:</Text>
                <Text>mary.johnson@example.com</Text>
              </View>
            </View>
            <View style={styles.col}>
              <Text style={styles.subheading}>Spouse Information</Text>
              <View style={styles.innerContent}>
                <Text style={styles.label}>Full Name:</Text>
                <Text>Jane Doe</Text>
                <Text style={styles.label}>Phone Number:</Text>
                <Text>555-555-5555</Text>
                <Text style={styles.label}>Email:</Text>
                <Text>jane.doe@example.com</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  innerContent: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  col: {
    flex: 1,
    marginRight: 5,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default Home;