import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import FormComponent from "./FormComponent";

function OneShow() {

    const [show, setShow] = useState([]);
    const param = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('data'));
        if (items) {
            setData(items);
        }
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            let searchResults = data.filter(item => item.show.id == param.id);
            searchResults = searchResults[0].show;
            setShow(searchResults);
        }
    }, [data, param.id]);

    var size = Object.keys(show).length;
    if (!size) return (
        <h3>Loading...</h3>
    );

    return (
        <>
            {
                size > 0 ? <>
                    <h3 className="show-name">{show.name}</h3>
                    <div className="show">
                        <div className="img">
                            <img src={show.image.original} alt={show.title} />
                        </div>
                        <div className="show-details">
  <div dangerouslySetInnerHTML={{ __html: show.summary }} className="summary" />
  <div className="details">
    <div className="innerdiv">
      <p>Type: {show.type}</p>
      <p>Language: {show.language}</p>
      <p>Genres: {show.genres.join(', ')}</p>
    </div>
    <div className="innerdiv">
      <p>Premiered: {show.premiered}</p>
      {show.schedule.days.length !== 0 && (
        <p>{show.schedule.days.join(', ')} at {show.schedule.time}</p>
      )}
      <p>Rating: {show.rating.average}</p>
    </div>
  </div>
</div>


                        <button >Book Now</button>
                    </div>
                </>
                    :
                    <h1>SHOW NOT FOUND</h1>
            }

        </>
    );
}

export default OneShow;
