import "./App.css";
import logo from "./logo-tessandersen.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="developer" />
        </main>
        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://www.linkedin.com/in/tess-andersen/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tess Andersen
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/andersentess/dictionary-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
