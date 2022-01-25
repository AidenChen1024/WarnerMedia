import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import "../App.css";
import { getDetailAction } from "../state/Action";


const Details = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [details, setdetails] = useState(null);
  
  const getTitleDetail = async () => {
    const data = await dispatch(getDetailAction(id));
    setdetails(data);
    console.log(data);
  };
  
  useEffect(() => {
    getTitleDetail();
  }, [id]);

  return details ? (
    <div class="col-lg-8 mx-auto py-md-5 main_container">
      <main>
          <p className="text-center h1">{details?.titleName}</p>
          <hr className="col-12 col-md-12 mb-12" />
          <div className="row">
            <div className="col-md-6">
          <h4 className="detail-title">Genres</h4>

            
              {details?.genres.map((genre) => (
                <span className="badge bg-secondary" key={genre.id}>
                  <i className="fa fa-check-circle"></i>
                  {genre.name}
                </span>
              ))}
          
          </div>
          <div className="col-md-6">
          <h4 className="detail-title">Release Year</h4>
          <span class="badge bg-secondary">{details?.releaseYear}</span>
          </div>
          </div>
          
          <hr className="col-12 col-md-12 mb-12" />


        
        <div className="row story-line">
          {/* story line */}
          <div className="col-md-12">
            <div className="story-container">
              <h4 className="detail-title">Story Line</h4>

              {details?.storyLines?.map((item, index) => {
                return (
                  <div className="story-item" key={index}>
                    <p>{item?.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr className="col-12 col-md-12 mb-12" />

          
         
          <h4 className="detail-title">Awards</h4>

            <ul className="icon-list">
              {details?.awards.length > 0 && details?.awards.map((award) => (                           
                      <span class="badge bg-secondary">{award?.awards}</span>   
                ))}
            </ul>
 
       
      </main>
    </div>
  ) : (
    <div className="loading">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Details;
