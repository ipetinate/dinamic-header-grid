import React from "react";

import Header from "./components/Header";

const App = () => (
  <Header
    type="filters"
    title={
      <div
        style={{
          backgroundColor: "#333",
          color: "#fff",
          padding: 10,
          margin: 10
        }}
      >
        title here
      </div>
    }
    items={
      <div
        style={{
          backgroundColor: "#353",
          color: "#fff",
          padding: 10,
          margin: 10
        }}
      >
        actions/filter here
      </div>
    }
  />
);

export default App;
