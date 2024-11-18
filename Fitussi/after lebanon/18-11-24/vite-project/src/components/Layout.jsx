import react from "react"

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Site Header </h1>
      </header>

      <footer>
        <p>Site Footer © 2024</p>
      </footer>
    </div>
  );
};

export default Layout;