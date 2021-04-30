import "./App.css";

import Tower from "./components/tower";

function App() {
  return (
    <div className="App">
      <main>
        <div>
          <Tower />
          <Tower />
          <Tower />
        </div>
      </main>
    </div>
  );
}

export default App;
