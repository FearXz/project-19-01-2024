import "./assets/css/mybootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import MySideBar from "./components/MySideBar";
import MyMain from "./components/MyMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Container fluid>
              <Row>
                <MySideBar />
                <MyMain />
              </Row>
            </Container>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
