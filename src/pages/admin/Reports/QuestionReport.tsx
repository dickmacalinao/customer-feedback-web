import React from "react";
import { type QuestionType } from "../../../types/CommonTypes";

import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

type Props = {
  question: QuestionType;
};

// Sample Data - Monthly Sales Report
const monthlyData = [
  { month: "Jan", yes: 0, no: 4 },
  { month: "Feb", yes: 0, no: 6 },
  { month: "Mar", yes: 2, no: 5 },
  { month: "Apr", yes: 2, no: 4 },
  { month: "May", yes: 4, no: 3 },
  { month: "Jun", yes: 7, no: 2 },
];

const categoryData = [
  { name: "😡", value: 1, color: "#8b5cf6" },
  { name: "😕", value: 3, color: "#8884d8" },
  { name: "😐", value: 5, color: "#ff7300" },
  { name: "🙂", value: 7, color: "#ffc658" },
  { name: "😍", value: 9, color: "#10b981" },
];

const QuestionReport: React.FC<Props> = ({ question }) => {
  return (
    <>
      {(question.type === "yesNo" || question.type === "smileyRate") && (
        <div className="bg-white p-6 rounded-2xl shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Q: {question.question}
          </h2>

          {/*JSON.stringify(question) */}
          {question.type === "yesNo" && (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="natural"
                  dataKey="yes"
                  stroke="#10b981"
                  strokeWidth={5}
                  dot={{ fill: "#10b981", r: 5 }}
                />
                <Line
                  type="natural"
                  dataKey="no"
                  stroke="#8b5cf6"
                  strokeWidth={5}
                  dot={{ fill: "#8b5cf6", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          )}

          {question.type === "smileyRate" && (
            <ResponsiveContainer width="100%" height={420}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={160}
                  dataKey="value"
                  label={({ name, percent }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          )}
        </div>
      )}
    </>
  );
};

export default QuestionReport;
