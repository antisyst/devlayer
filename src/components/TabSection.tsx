import React, { useState } from 'react';

interface Tab {
  title: string;
  content: React.ReactNode;
}

interface Props {
  tabs: Tab[];
  defaultActiveTab?: number;
  onTabChange?: (index: number) => void;
}

function TabSection({ tabs, defaultActiveTab = 0, onTabChange }: Props) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  function handleTabChange(index: number) {
    setActiveTab(index);
    if (onTabChange) {
      onTabChange(index);
    }
  }

  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabChange(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        {tabs[activeTab].content}
      </div>
    </div>
  );
}

export default TabSection;