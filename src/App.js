import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import NovoProjeto from "./components/pages/NovoProjeto";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Projetos from "./components/pages/Projetos";

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <Navbar/>
      <Container customClass="min-height">
      <Routes>
      <Route exact path="/" element={<Home/>} > </Route>
      <Route path="/empresa" element={<Empresa/>} > </Route>
      <Route path="/contato" element={<Contato/>} > </Route>
      <Route path="/novoProjeto" element={<NovoProjeto/>} > </Route>
      <Route path="/projetos" element={<Projetos/>} > </Route>
      </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
