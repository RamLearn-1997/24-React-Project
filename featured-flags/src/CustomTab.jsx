import  { useState } from 'react';
import './App.css';

function Tabs() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const tabsContents = [
    {
      label: "Tab 1",
      content: <h3>This is Tab 1</h3>,
    },
    {
      label: "Tab 2",
      content: <h3>This is Tab 2</h3>,
    },
    {
      label: "Tab 3",
      content: <h3>This is Tab 3</h3>,
    },
    {
      label: "Tab 4",
      content: <h3>This is Tab 4</h3>,
    },
  ];

  const handleTabChange = (index) => {
    setCurrentTabIndex(index);
    // You can add logic here to handle tab change if needed
    console.log('Selected tab index:', index);
  };

  return (
    <div className='tabs-wrapper'>
      <div className="tabs-heading">
        {tabsContents.map((tab, index) => (
          <div
            key={index}
            className={`tab-item ${currentTabIndex === index ? 'active' : ''}`}
            onClick={() => handleTabChange(index)}
          >
            <span className="tab-label">{tab.label}</span>
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabsContents[currentTabIndex] && tabsContents[currentTabIndex].content}
      </div>
    </div>
  );
}

export default function TabTest() {
  return <Tabs />;
}
