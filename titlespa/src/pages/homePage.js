import Card from "../UI/card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import "../App.css";
import { getAction, findAction } from "../state/Action";

const Home = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.list);
  
  const searchTitle = (title) => {
    if (title !== "") {
      dispatch(findAction(title));
    } else {
      dispatch(getAction());
    }
  };
  useEffect(() => {
    dispatch(getAction());
  }, []);
  
  console.log(" list ", list);
  return (
    <div>
      <header
        className="py-5 bg-image-full"
        style={{
          backgroundImage:
            'url("https://cdn.wallpapersafari.com/22/13/5TCzIa.jpg")',
        }}
      >
        <div className="text-center my-5">
          <div class="input-group input-group-lg container ">

            <input type="text" class="form-control" aria-label="Sizing example input"
              placeholder="Search..." aria-describedby="inputGroup-sizing-lg"
               onChange={(e) => searchTitle(e.target.value)} />

          </div>
        </div>
      </header>


      <div class="mx-auto main_container">

      
      {list?.length > 0 ? (
        <div>       
          <div className="grid-5-item">
            {list?.map((item) => (
              <Card item={item} key={item.titleId} />
            ))}
          </div>
        </div>
      ) : (
        <div className="not_item">
          <h1>No movie found</h1>
        </div>
      )}
    </div>
   </div>
  );
};

export default Home;
