import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { useState } from "react";
import Home from "./components/Home";
import FormElement from "./components/Form";


function App() {

  const [datas, setDatas] = useState([]);

  const onDataRegister =(register) => {
    setDatas([...datas, register]);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormElement onRegister={register => onDataRegister(register)}/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
