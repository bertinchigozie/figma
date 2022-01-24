import React, { useState, useEffect } from "react";
import { MainView } from "./MainView";
import axios from "axios";
import uuid from "react-uuid";
// import { DATA_PER_PAGE } from "./components/utility/constants";

function App() {
  const [getAPI, setGetAPI] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [pagination, setPagination] = useState(1);
  const [totalPerPage, setTotalPerPage] = useState(4);

  // Fetching data from api
  useEffect(() => {
    axios.get(`https://assessment-edvora.herokuapp.com`).then((response) => {
      setGetAPI(response.data);
      setIsLoading(true);
      // setTotalPerPage(response.data);
    });
  }, []);

  // get current page
  const indexOfLastPage = pagination * totalPerPage;
  const indexOfFirstPage = indexOfLastPage - totalPerPage;
  const currentPage = getAPI.splice(indexOfFirstPage, indexOfLastPage);
  return (
    <div>
      <MainView
        setGetAPI={setGetAPI}
        getAPI={getAPI}
        dropDown={dropDown}
        setDropDown={setDropDown}
        isLoading={isLoading}
        pagination={pagination}
        setPagination={setPagination}
        setTotalPerPage={setTotalPerPage}
        totalPerPage={totalPerPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
