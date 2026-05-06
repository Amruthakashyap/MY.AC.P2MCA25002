import Log from "./utils/logger";

function App() {
  const sendLog = async () => {
    await Log(
      "frontend",import Log from "./utils/logger";

function App() {

  const sendInfoLog = () => {
    Log(
      "frontend",
      "info",
      "component",
      "Info log triggered"
    );
  };

  const sendErrorLog = () => {
    Log(
      "frontend",
      "error",
      "component",
      "Error log triggered"
    );
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Logging Middleware</h1>

      <button onClick={sendInfoLog}>
        Send Info Log
      </button>

      <br /><br />

      <button onClick={sendErrorLog}>
        Send Error Log
      </button>
    </div>
  );
}

export default App;
      "info",
      "component",
      "Button clicked successfully"
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Logging Middleware</h1>

      <button onClick={sendLog}>Send Log</button>
    </div>
  );
}

export default App;

