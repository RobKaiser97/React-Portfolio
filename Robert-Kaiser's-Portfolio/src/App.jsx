import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header className="App-header" />
      <main className="App-main">
        <Outlet />
      </main>
      <Footer className="App-footer" />
    </>
  );
}

export default App;
