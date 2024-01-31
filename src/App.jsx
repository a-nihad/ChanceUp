import { BrowserRouter, Route, Routes } from "react-router-dom";
import Router from "./router/Router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Router />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
