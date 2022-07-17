import React, { useContext, useState } from "react";
import { TabContext } from "../../context/contextTab";
import "./style.css";

export const Tab = () => {
  const { tabs } = useContext(TabContext);
  const [currentTab, setCurrentTab] = useState(0);

  const handleTab = (tabIndex: number) => {
    setCurrentTab(tabIndex);
  };

  const isSelectTab = (tabIndex: number) => {
    const selected = tabIndex === currentTab ? true : false;
    return selected;
  };

  return (
    <div className="paneConteudo">
      <h1>Conteúdo</h1>
      {tabs.length === 0 ? (
        <div>
          <div className={isSelectTab(0) ? "isSelected" : "buttonTab"}>
            <div onClick={() => handleTab(0)}>Tab 1</div>
          </div>
          <p>Sem conteúdo</p>
        </div>
      ) : (
        <div>
          <div className="buttonsTab">
            {tabs.map((tabItem, index) => (
              <div
                className={isSelectTab(index) ? "isSelected" : "buttonTab"}
                key={`tab-${index}`}
                onClick={() => handleTab(index)}
              >
                {tabItem.title}
              </div>
            ))}
          </div>
          <div>{tabs[currentTab].text}</div>
        </div>
      )}
    </div>
  );
};
