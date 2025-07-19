import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./page/HomePage.jsx";
import { PedidoPage } from "./page/PedidoPage.jsx";
import { PrivacyPolicy } from "./page/PrivacyPolicyPage.jsx";

function App() {
  return (
    <div data-theme="dark">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pedido" element={<PedidoPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
