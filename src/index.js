import PolicyAndPrivacy from "./Components/PolicyAndPrivacy/PolicyAndPrivacy";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
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
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BrowserRouter>
    <TopNavbar />
    <Switch>
        <Route path="/index" render={props => <HomePage {...props} />} />
        <Route path="/institucional" render={props => <Institucional {...props} />} />
        <Route path="/atuacao" render={props => <Acting {...props} />} />
        <Route path="/tecnologia" render={props => <Technology {...props} />} />
        <Route path="/fique-por-dentro" render={props => <StayIn {...props} />} />
        <Route path="/sustentabilidade" render={props => <Sustainability {...props} />} />
        <Route path="/contato" render={props => <Contact {...props} />} />
        <Route path="/politica-privacidade" render={props => <PolicyAndPrivacy {...props} />} />
        <Redirect to="/index" />
    </Switch>
    <Footer />
</BrowserRouter>
);
