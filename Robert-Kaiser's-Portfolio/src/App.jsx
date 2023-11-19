import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header className="App-header" />
      <main className="App-main">
        <div className="content">
          <Outlet />
        </div>
      </main>
      <Footer
        className="App-footer"
        github="https://github.com/RobKaiser97"
        linkedin="https://linkedin.com/in/robert-kaiser1"
        facebook="https://facebook.com/RobertScottKaiserJR"
      />
    </>
  );
}

export default App;
