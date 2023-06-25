import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "react-native-svg-charts";

// interface Result {
//   category: string;
//   score: number;
// }

const EvaluationResult = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // fetch the results from the server or load from local storage
    const t= [
      { category: "Punctuality", score: 10 },
      { category: "Decision Making", score: 70 },
      { category: "Problem Solving", score: 100 },
      { category: "Loyalty", score: 85 },
      { category: "Resource Management", score: 45 },
    ];
    setResults(t);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', color: 'black' }}>
      <View style={{ marginTop: 7, marginLeft: 7 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 4 }}>
          Performance Evaluation Results
        </Text>
        <View style={{ width: 300, height: 200 }}>
          <BarChart
            style={{ flex: 1 }}
            data={results}
            svg={{ fill: '#8884d8' }}
            contentInset={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis data={results.map((data) => data.category)} />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="score" />
          </BarChart>
        </View>
      </View>
    </View>
  );
};

export default EvaluationResult;