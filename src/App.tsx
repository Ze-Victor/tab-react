import "./App.css";
import { Tab } from "./components/Tab/Tab";
import { TabForm } from "./components/Form/Form";
import { TabProvider } from "./context/contextTab";

function App() {
  return (
    <TabProvider>
      <div className="App">
        <TabForm />
        <Tab />
      </div>
    </TabProvider>
  );
}

export default App;
