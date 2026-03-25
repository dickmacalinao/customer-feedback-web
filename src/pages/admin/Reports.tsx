// src/App.tsx
import { useState } from "react";
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

// Sample Data - Monthly Sales Report
const monthlyData = [
  { month: "Jan", sales: 42000, profit: 8500, orders: 320 },
  { month: "Feb", sales: 38000, profit: 7200, orders: 280 },
  { month: "Mar", sales: 51000, profit: 12400, orders: 410 },
  { month: "Apr", sales: 46000, profit: 9800, orders: 350 },
  { month: "May", sales: 63000, profit: 15800, orders: 480 },
  { month: "Jun", sales: 58000, profit: 14200, orders: 450 },
];

const categoryData = [
  { name: "Electronics", value: 45, color: "#8884d8" },
  { name: "Clothing", value: 25, color: "#82ca9d" },
  { name: "Home & Kitchen", value: 20, color: "#ffc658" },
  { name: "Books", value: 10, color: "#ff7300" },
];

// const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff7300"];

export default function Reports() {
  const [activeTab, setActiveTab] = useState<"sales" | "category">("sales");

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Sales Performance Report
          </h1>
          <p className="text-gray-600">January - June 2026</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 gap-4">
          <button
            onClick={() => setActiveTab("sales")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === "sales"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Monthly Sales Trend
          </button>
          <button
            onClick={() => setActiveTab("category")}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              activeTab === "category"
                ? "bg-blue-600 text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Sales by Category
          </button>
        </div>

        {/* Charts Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Bar + Line Combined Chart */}
          {activeTab === "sales" && (
            <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800">
                Monthly Sales & Profit
              </h2>
              <ResponsiveContainer width="100%" height={420}>
                <BarChart
                  data={monthlyData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" tick={{ fill: "#666" }} />
                  <YAxis yAxisId="left" tick={{ fill: "#666" }} />
                  <YAxis
                    yAxisId="right"
                    orientation="right"
                    tick={{ fill: "#666" }}
                  />
                  <Tooltip />
                  <Legend />

                  <Bar
                    yAxisId="left"
                    dataKey="sales"
                    fill="#3b82f6"
                    name="Sales ($)"
                    radius={6}
                  />
                  <Line
                    yAxisId="right"
                    type="monotone"
                    dataKey="profit"
                    stroke="#10b981"
                    strokeWidth={4}
                    dot={{ r: 6 }}
                    name="Profit ($)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}

          {/* Pie Chart */}
          {activeTab === "category" && (
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
                Revenue by Category
              </h2>
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
            </div>
          )}

          {/* Bonus: Simple Line Chart (always visible) */}
          <div className="bg-white p-6 rounded-2xl shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Orders Trend
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="natural"
                  dataKey="orders"
                  stroke="#8b5cf6"
                  strokeWidth={5}
                  dot={{ fill: "#8b5cf6", r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-12">
          Built with React + Recharts • Simple & Responsive
        </div>
      </div>
    </div>
  );
}
