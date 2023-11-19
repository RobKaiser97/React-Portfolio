// import "../styles/Header.css";
import Nav from "./Nav";
import { useLocation } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [currentPage, setCurrentPage] = useState(useLocation().pathname);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </nav>
  );
}
