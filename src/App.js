import { Route, Routes } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Sources from './pages/Sources';
import Navbar from './components/Navbar';
import { NotionData } from "./components/sourcesPage";

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/sources" element={<Sources />} />
      </Routes> */}
      <Sources />
    </>
  );
}

export default App;
