import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import { NewPost } from "./components/NewPost";
import { UpdatePost } from "./components/UpdatePost";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Contents from "./components/Contents";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <BrowserRouter>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header></Header>

          <Routes>
            <Route path="/" element={<Contents />} />
            <Route
              path="/addPost"
              element={
                <NewPost
                  selectedTab={selectedTab}
                  setSelectedTab={setSelectedTab}
                />
              }
            />
            <Route path="/updatePost/:id" element={<UpdatePost />} />
          </Routes>
          <Footer></Footer>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
