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
        <Skills skills={["HTML", "CSS"]} />
      </div>
    );
  }
}

export default App;
