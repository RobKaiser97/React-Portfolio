import { Outlet } from "react-router-dom";
import { Header, Footer } from "./components";
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
