import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Sustainability from "./Components/Sustainability/Sustainability";
import Institucional from "./Components/Institutional/Institutional";
import Technology from "./Components/Technology/Technology";
import TopNavbar from "./Components/Navbars/TopNavbar";
import HomePage from "./Components/HomePage/HomePage";
import Contact from "./Components/Contact/Contact";
import StayIn from "./Components/StayIn/StayIn";
import Acting from "./Components/Acting/Acting";
import Footer from "./Components/Footer/Footer";
import ReactDOM from "react-dom/client";
import "./Config/i18n";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BrowserRouter>
    <TopNavbar />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/institucional" element={<Institucional />} />
        <Route path="/atuacao" element={<Acting />} />
        <Route path="/tecnologia" element={<Technology />} />
        <Route path="/fique-por-dentro" element={<StayIn />} />
        <Route path="/sustentabilidade" element={<Sustainability />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <Footer />
</BrowserRouter>);
