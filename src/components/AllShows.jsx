import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"

const apiUrl = 'https://api.tvmaze.com/search/shows?q=all';

const AllShows = () => {

    const [allShows, setAllShows] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    localStorage.setItem('data', JSON.stringify(data));
                    setAllShows(data);
                })
                .catch(error => {
                    console.log('Error:', error);
                });
        }
        fetchData();
    }, []);


    const oneShow = async (id) => {
        navigate(`/show/${id}`);
    }

    if (!allShows.length) return (
        <h3>Loading...</h3>
    );

    return (
        <>
            <div className="AllShows">
                {
                    allShows.length > 0 ?
                        allShows.map((item, index) =>
                        <>
                            <div className="card">
                                <div key={item.show.id} className="card-details">
                                    <div>
                                        <img src={item.show.image.original} alt={item.show.name} />
                                        <p className="name"><a href={item.show.url}>{item.show.name}</a></p>
                                    </div>
                                    <div className="language-genres">
                                        <p>{item.show.language}</p>
                                        <p>{item.show.genres.join(', ')}</p>
                                    </div>
                                    <div className="rating-premier">
                                        <p>Rating: {item.show.rating.average}</p>
                                        <p>Premiered: {item.show.premiered}</p>
                                    </div>
                                    <div className="details">
                                        <button className="details-btn"
                                            onClick={() => oneShow(item.show.id)}>
                                            Show Details
                                        </button>
                                    </div>
                                </div>
                            </div>                 
                        </>
                        )
                        :
                        <h1>NO SHOWS FOUND</h1>
                }
            </div>

        </>
    )
}

export default AllShows;