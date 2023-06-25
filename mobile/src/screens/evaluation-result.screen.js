import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { BarChart, XAxis, YAxis } from 'react-native-chart-kit';


const EvaluationResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // fetch the results from the server or load from local storage
    const t= [
      { category: 'Punctuality', score: 10 },
      { category: 'Decision Making', score: 70 },
      { category: 'Problem Solving', score: 100 },
      { category: 'Loyalty', score: 85 },
      { category: 'Resource Management', score: 45 },
    ];
    setResults(t);
  }, []);

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ marginTop: 7, marginLeft: 7 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 4 }}>
          Performance Evaluation Results
        </Text>
        <View style={{ height: 300, marginTop: 16 }}>
          <BarChart
            data={results}
            width={300}
            height={300}
            chartConfig={{
              backgroundColor: '#ffffff',
              backgroundGradientFrom: '#ffffff',
              backgroundGradientTo: '#ffffff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
            verticalLabelRotation={30}
            showValues
            fromZero
          />
          <XAxis
            data={results}
            formatLabel={(value, index) => results[index].category}
            contentInset={{ left: 20, right: 20 }}
            labelStyle={{ fontSize: 10, marginVertical: 4 }}
          />
          <YAxis
            data={results}
            contentInset={{ top: 20, bottom: 20 }}
            labelStyle={{ fontSize: 10, marginHorizontal: 8 }}
          />
        </View>
      </View>
    </View>
  );
};

export default EvaluationResults;
