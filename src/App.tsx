import "./App.css";
import { Skills } from "./components/skills/skills";
// import { Application } from "./components/application/application";

function App() {
  // return <Application />;
  {
    return (
      <div
        style={{
          minHeight: "100dvh",
          display: "flex",
          placeItems: "center",
        }}
      >
        <Skills />
      </div>
    );
  }
}

export default App;
