import Layout from "@/components/Layout/HRExpertlayout";
import { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface Result {
  category: string;
  score: number;
}

const EvaluationResults = () => {
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    // fetch the results from the server or load from local storage
    const t: Result[] = [
      { category: "Punctuality", score: 10 },
      { category: "Decision Making", score: 70 },
      { category: "Problem Solving", score: 100 },
      { category: "Loyalty", score: 85 },
      { category: "Resource Management", score: 45 },
    ];
    setResults(t);
  }, []);

  return (
    <div className="bg-white text-black h-screen ">
      <Layout page="hrexpert">
        <div className="flex flex-col mt-7 ml-7">
          <h2 className="text-lg font-semibold my-4">
            Performance Evaluation Results
          </h2>
          <div className="w-96 h-64">
            <BarChart
              width={1000}
              height={300}
              data={results}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <XAxis dataKey="category" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Legend />
              <Bar dataKey="score" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </Layout>
    </div>
  );
};
export default EvaluationResults;
