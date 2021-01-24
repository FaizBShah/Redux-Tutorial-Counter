import './App.css';
import FirstCounter from "./components/FirstCounter";
import SecondCounter from "./components/SecondCounter";
import Buttons from "./components/Buttons";
import store from "./store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={ store }>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <FirstCounter />
          </div>
          <div className="col-md-6 col-sm-12">
            <SecondCounter />
          </div>
        </div>
        <div className="mt-5">
          <Buttons />
        </div>
      </div>
    </Provider>
  );
}

export default App;
