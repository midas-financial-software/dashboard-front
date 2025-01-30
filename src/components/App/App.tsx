import Financials from "../../dashboard/features/Financials/Financials";
import Header from "../Header/Header";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Header />
      <Financials />
    </div>
  );
};

export default App;
