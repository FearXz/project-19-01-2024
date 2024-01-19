import "./assets/css/mybootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import MySideBar from "./components/MySideBar";
import MyMain from "./components/MyMain";
import Player from "./components/Player";
import MyPlaylist from "./components/MyPlaylist";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container fluid className=" mb-5">
                <Row>
                  <MySideBar />
                  <MyMain />
                </Row>
              </Container>
              <Player />
            </>
          }
        />
        <Route
          path="/playlist"
          element={
            <>
              <Container fluid className=" mb-5">
                <Row>
                  <MySideBar />
                  <MyPlaylist />
                </Row>
              </Container>
              <Player />
            </>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
