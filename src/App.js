import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Nabvar from "./components/Nabvar";
import Feed from "./components/Feed";
import VideoDeatil from "./components/VideoDeatil";
import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
// import Error from "./components/Error";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <Nabvar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video:id" exact element={<VideoDeatil />} />
            <Route path="/channel:id" exact element={<ChannelDetail />} />
            <Route path="/search:serachTerm" exact element={<SearchFeed />} />
            {/* <Route path="/*" exact element={<Error />} /> */}
          </Routes>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
