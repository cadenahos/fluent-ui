import React, { useState } from "react";
import MyCard from "./Components/Card";
import LoginModal from "./Components/Login";
import Navbar from "./Components/Navbar";
import { Stack } from "@fluentui/react";
import { Text } from "@fluentui/react-components";
import { MyGrid } from "./Components/Grid";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const gridItems = Array(2).fill(0); // Replace 6 with the number of items you want

  return (
    <div className="App">
      <Navbar setIsModalOpen={setIsModalOpen} />
      <Stack horizontal styles={{ root: { width: "100%" } }}>
        <Stack.Item
          styles={{
            root: {
              width: "50%",
              height: "100vh",
              overflow: "auto",
            },
          }}
        >
          {gridItems.map((_, index) => (
            <MyCard key={index} />
          ))}
        </Stack.Item>
        <Stack.Item styles={{ root: { width: "50%" } }}>
          <MyGrid />
        </Stack.Item>
      </Stack>
      <LoginModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
}

export default App;
