import { useState } from 'react';
import '../App.css';

export default  function Tabs({tabsContents, onChange}){

    const [currentTabIndex, setCurrentTabIndex] = useState(0);

    function handleOnClick(getCurrentIndex){
      setCurrentTabIndex(getCurrentIndex)
      onChange(getCurrentIndex)
    }


    return (<div className='wrapper'>
       <div className="heading">
       {
            tabsContents.map((tabItem,index) => <div className={`tab-item ${currentTabIndex === index ? 'active': ''}`} onClick={() => handleOnClick(index)} key={tabItem.label}>
                <span className="label">{tabItem.label}</span>
            </div>)
         }
       </div>
       <div className="content">
         {
            tabsContents[currentTabIndex] && tabsContents[currentTabIndex].content
         }
       </div>
      
    </div>);
}
