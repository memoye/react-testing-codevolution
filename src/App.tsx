import "./App.css";
import { MuiMode } from "./components/mui/mui-mode";
import { Skills } from "./components/skills/skills";
import { AppProviders } from "./providers/app-providers";
// import { Application } from "./components/application/application";

function App() {
  // return <Application />;
  {
    return (
      <AppProviders>
        <div
          style={{
            minHeight: "100dvh",
            display: "flex",
            placeItems: "center",
          }}
        >
          <Skills skills={["HTML", "CSS"]} />
        </div>
        <MuiMode />
      </AppProviders>
    );
  }
}

export default App;
