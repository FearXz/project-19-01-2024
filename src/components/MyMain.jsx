import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyNavbar from "./MyNavbar";
import Gallery from "./Gallery";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";

function MyMain() {
  const [fetchedData, setFetchedData] = useState(null);
  const searchedQuery = useSelector((state) => state.global.searchResult);

  /* questa fetch è locale al componente e non deve condividere il suo oggetto fetchato con nessun altro componente  */

  const handleSection = async (artistName) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + artistName, {
        method: "GET",
        headers: {
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
          "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
        },
      });
      if (response.ok) {
        let { data } = await response.json();
        setFetchedData((prevData) => ({ ...prevData, [artistName]: data }));
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    handleSection("queen");
    handleSection("katyperry");
    handleSection("eminem");
  }, []);

  return (
    <Col xs={12} md={{ span: 9, offset: 3 }} className="mainPage">
      <MyNavbar />
      <Row>
        <Col xs={10}>
          <div id="searchResults" style={{ display: "none" }}>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"></div>
          </div>
        </Col>
      </Row>
      {searchedQuery && <SearchResult category="Search Result" songsInfo={searchedQuery} />}
      {fetchedData && fetchedData.queen && fetchedData.katyperry && fetchedData.eminem && (
        <div className=" mb-5">
          <Gallery category={"Rock Classics"} songsInfo={fetchedData.queen} />
          <Gallery category={"Pop Culture"} songsInfo={fetchedData.katyperry} />
          <Gallery category={"#HipHop"} songsInfo={fetchedData.eminem} className=" mb-5" />
        </div>
      )}
    </Col>
  );
}

export default MyMain;
