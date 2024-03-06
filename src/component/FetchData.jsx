/* eslint-disable jsx-a11y/img-redundant-alt */

import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const FetchData = ({cat = "General"}) => {
  const [Data, setData] = useState("");

  const fetchData = async () => {
    await axios
      .get(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=e4635766ae594a88a2012e2b0497246b`)
         
    //   cat  ? 'https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=e4635766ae594a88a2012e2b0497246b'
    //     :"https://newsapi.org/v2/top-headlines?country=in&apiKey=e4635766ae594a88a2012e2b0497246b"
    //   )
      .then((res) => setData(res.data.articles));
  };
  useEffect(() => {
    fetchData();
  }, [cat]);
  return (
    <>
      <div className="container my-4 " style={{minHeight:"100vh"}}>
        <h3>TOP HEDLINE</h3>
        <div className=" container d-flex justify-content-center align-items-center flex-column my-2">
          {Data
            ? Data.map((items, index) => (
                <>
                  <div className="container my-3 p-3 " style={{width:"600px", boxShadow:"2px 2px 10px silver", borderRadius:"5px"}}>
                    <h5>{items.title}</h5>
                    <img
                      src={items.urlToImage}
                      alt="Image not found "
                      className="img-fluid"
                      style={{
                        width: "100%",
                        height: "300px",
                        objectFit: "cover",
                      }}
                    />
                    <p>{items.content}</p>
                    <a href={items.url}  target="blank">View More</a>
                  </div>
                </>
              ))
            : "LOADING...."}
        </div>
      </div>
    </>
  );
};

export default FetchData;
