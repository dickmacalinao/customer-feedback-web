import { useState } from "react";
import Tabs from "../../components/common/Tabs";
import PromiseAsyncAwait from "./sandbox/PromiseAsyncAwait";
import ArrayFunctions from "./sandbox/ArrayFunctions";
import Generator from "./sandbox/Generator";

export default function Sandbox() {
  const tabs = [
    { id: "promise", label: "Promise / Async / Await" },
    { id: "array", label: "Array Functions" },
    { id: "generator", label: "Generator" },
  ];

  const [selectedTab, setSelectedTab] = useState(tabs[0].id);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <Tabs
        tabs={tabs}
        selected={selectedTab}
        onChange={(tab) => {
          setSelectedTab(tab);
        }}
      />
      {selectedTab === "promise" && <PromiseAsyncAwait />}
      {selectedTab === "array" && <ArrayFunctions />}
      {selectedTab === "generator" && <Generator />}
    </div>
  );
}
