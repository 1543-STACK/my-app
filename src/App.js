import "./App.css";
import "./index.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather city="Durban" />
      <footer>
        This project was coded by
        <a
          href="https://github.com/1543-STACK/my-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Anu Govender{" "}
        </a>{" "}
        and is
        <a
          href="https://gthub.com/1543-STACK/my-app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          on GitHub
        </a>{" "}
        and
        <a
          href="https://relaxed-zuccutto-09d782.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
export default App;
