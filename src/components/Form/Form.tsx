import { Fragment, useContext, useState } from "react";
import { TabContext, ItemTab } from "../../context/contextTab";
import "./style.css";

const tabListInitial: ItemTab[] = [
  {
    title: "",
    text: "",
  },
];

export const TabForm = () => {
  const { saveNewTab } = useContext(TabContext);
  const [numTabs, setNumTabs] = useState(1);
  const [tabs, setTabs] = useState<ItemTab[]>(tabListInitial);

  const newTabs = (newnumTabs: number): ItemTab[] => {
    const newTabList = [];
    const condition = newnumTabs;

    for (let i = 0; i < condition; i++) {
      newTabList.push({
        title: "",
        text: "",
      });
    }

    return newTabList;
  };

  const handleNumTabs = (value: string) => {
    const newNumTabs = Number(value);

    if (newNumTabs) {
      const newTabList = [...newTabs(newNumTabs)];

      setTabs(newTabList);
    }

    newNumTabs && setNumTabs(newNumTabs);
  };

  const handleTabs = (index: number, key: keyof ItemTab, value: string) => {
    const newTabList: ItemTab[] = [...tabs];
    newTabList[index][key] = value;

    setTabs(newTabList);
  };

  const buttonDisabled = () => {
    if (tabs.length > 0 && tabs[0].title === "" && tabs[0].text === "") {
      return true;
    }

    return false;
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    saveNewTab(tabs);
  };

  return (
    <div className="paneForm">
      <h1>Tabs</h1>
      <div className="form">
        <form onSubmit={(event) => handleOnSubmit(event)}>
          <form>
            <label>Núm. tabs: </label>
            <input
              className="input"
              type="number"
              min={1}
              name="numTabs"
              value={numTabs}
              onChange={(event) => handleNumTabs(event.target.value)}
            />
          </form>
          <br />
          <hr />
          <br />
          {tabs.map((tabItem, index) => (
            <Fragment key={`tabItem-${index}`}>
              <form>
                <label>Título: </label>
                <input
                  type="text"
                  className="input"
                  name={`title-${index}`}
                  value={tabItem.title}
                  onChange={(event) =>
                    handleTabs(index, "title", event.target.value)
                  }
                  placeholder="Título do tab..."
                />
              </form>
              <form className="inputArea">
                <label>Conteúdo: </label>
                <textarea
                  name={`text-${index}`}
                  className="textAreaInput"
                  value={tabItem.text}
                  onChange={(event) =>
                    handleTabs(index, "text", event.target.value)
                  }
                  placeholder="Conteúdo do tab..."
                />
              </form>
            </Fragment>
          ))}
          <button
            className={
              buttonDisabled() ? "buttonSalvar" : "buttonSalvarAtivado"
            }
            type="submit"
            disabled={buttonDisabled()}
          >
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
};
