import { useState, useEffect, useEffectEvent } from "react";

import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import Tabs from "../../components/common/Tabs";
import { fetchCategories } from "../../api/categories";
import CategoryReport from "./reports/CategoryReport";

export default function Reports() {
  const [categoryTabs, setCategoryTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState(null);

  const { customerSlug } = useParams();

  // Fetch data from api
  const { data, isLoading, error } = useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(customerSlug),
  });

  const updateCategoryTabs = useEffectEvent((tabs) => {
    if (tabs.length > 0) {
      console.log("tabs", tabs);
      setCategoryTabs(tabs);
      setSelectedTab(tabs[0].id);
      console.log("selectedTab", selectedTab, tabs[0].id);
    }
  });

  useEffect(() => {
    console.log("Start synchronization");

    if (data && !isLoading && !error) {
      // console.log(data);
      let tabs = [];
      data?.data.forEach((category) => {
        tabs = [...tabs, { id: category.id, label: category.category }];
      });

      updateCategoryTabs(tabs);
    }

    return () => {
      console.log("Stop synchronization");
    };
  }, [data, isLoading, error]);

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gray-600">January - June 2026</p>
        </div>

        <Tabs
          tabs={categoryTabs}
          selected={selectedTab}
          onChange={(tab) => {
            setSelectedTab(tab);
          }}
        />

        {data && data.data && selectedTab && (
          <CategoryReport category={data.data[selectedTab - 1]} />
        )}
      </div>
    </div>
  );
}
