import React from "react";
import Painting from "./components/Painting";
import paintings from "./paintings.json";

const App = () => {
  return (
    <div>
      <h2>Это гшлавный компонент App</h2>
      <p>
        <Painting url={paintings[0].url} title={paintings[0].title} />
      </p>
    </div>
  );
};

export default App;
