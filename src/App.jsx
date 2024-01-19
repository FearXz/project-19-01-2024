import "./assets/css/mybootstrap.min.css";
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import MySideBar from "./components/MySideBar";
import MyMain from "./components/MyMain";
import Player from "./components/Player";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container fluid>
                <Row>
                  <MySideBar />
                  <MyMain />
                </Row>
              </Container>
              <Player />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
