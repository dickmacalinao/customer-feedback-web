import { useState } from "react";
import { Card, CardContent } from "../../components/common/Card";
import { Button } from "../../components/common/Button";
import { BarChart3, Users, MessageSquare, Star } from "lucide-react";

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("overview");

  const stats = [
    { title: "Total Feedback", value: 1240, icon: MessageSquare },
    { title: "Active Users", value: 320, icon: Users },
    { title: "Avg Rating", value: "4.5", icon: Star },
    { title: "Reports", value: 12, icon: BarChart3 },
  ];

  const feedbacks = [
    { id: 1, user: "John Doe", message: "Great service!", rating: 5 },
    { id: 2, user: "Jane Smith", message: "Needs improvement", rating: 3 },
    { id: 3, user: "Mike Lee", message: "Excellent UI", rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <Button>Logout</Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="shadow-sm">
              <CardContent className="flex items-center gap-4 p-4">
                <Icon className="w-8 h-8 text-gray-600" />
                <div>
                  <p className="text-sm text-gray-500">{stat.title}</p>
                  <p className="text-xl font-semibold">{stat.value}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-4">
        {["overview", "feedbacks", "users"].map((tab) => (
          <Button
            key={tab}
            variant={selectedTab === tab ? "default" : "outline"}
            onClick={() => setSelectedTab(tab)}
          >
            {tab.toUpperCase()}
          </Button>
        ))}
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feedback List */}
        <Card className="lg:col-span-2">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Recent Feedback</h2>
            <div className="max-h-[300px] overflow-y-auto space-y-3">
              {feedbacks.map((fb) => (
                <div
                  key={fb.id}
                  className="p-3 border rounded-xl flex justify-between items-center"
                >
                  <div>
                    <p className="font-medium">{fb.user}</p>
                    <p className="text-sm text-gray-500">{fb.message}</p>
                  </div>
                  <span className="font-semibold">⭐ {fb.rating}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar */}
        <Card>
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
            <div className="flex flex-col gap-3">
              <Button variant="outline">Export Data</Button>
              <Button variant="outline">Manage Users</Button>
              <Button variant="outline">View Reports</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
