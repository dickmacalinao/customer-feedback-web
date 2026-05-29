import React, { useState } from "react";

type Tab = {
  id: string;
  label: string;
};

type TabsProps = {
  tabs: Tab[];
  selected?: string;
  onChange?: (value: number | string) => void;
};

const Tabs: React.FC<TabsProps> = ({
  tabs = [],
  selected = null,
  onChange,
}) => {
  const [selectedValue, setSelectedValue] = useState(selected);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const listTabs = tabs.map((tab) => (
    <button
      onClick={handleChange}
      className={`px-6 py-3 rounded-lg font-medium transition-all ${
        selectedValue === tab?.id
          ? "bg-blue-600 text-white shadow-md"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
    >
      {tab.label}
    </button>
  ));

  return (
    <>
      {/* Tabs */}
      <div className="flex justify-center mb-8 gap-4">{listTabs}</div>
    </>
  );
};

export default Tabs;
