import "../App";
import { Link } from "react-router-dom";

const card = ({ item }) => {
  return (
    <Link to={{ pathname: `/details/${item.titleId}`, state: { id: item.titleId, }, }}>
      <section className="card_item">
            <div className="col-lg-12">
              <h4>{item?.titleName}</h4>
              <p className="lead"> Release Year:
                <span className="badge bg-info">{item?.releaseYear}</span>
              </p>
            </div>
      </section>
    </Link>
  );
};

export default card;
