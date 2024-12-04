import { Route, Routes } from "react-router";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.jsx";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import Container from "./components/Container/Container.jsx";

function App() {
  return (
    <div>
      <Navigation />
      <Container>
        <Routes>
          <Route path="/portofolio" element={<HomePage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
