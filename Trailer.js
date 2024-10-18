import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaStar, FaFilm, FaHome } from "react-icons/fa";
import { CiClock1 } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { HiMiniTrophy } from "react-icons/hi2";
import { useStore } from '../utils/Store.js';

export default function Trailer() {
  const { selectedMovie } = useStore();
  const [matchingMovie, setMatchingMovie] = useState(null);

  useEffect(() => {
    if (selectedMovie) {
      const match = TrailerOfMovie.find(movie => movie.name === selectedMovie.name);
      setMatchingMovie(match || null);
    }
  }, [selectedMovie]);

  if (!matchingMovie) {
    return <div>No matching movie found. Please go back and select a movie.</div>;
  }

  return (
    <div style={{
     margin:"20px",
     border:"5px gray solid",
     padding:"20px",
     background: "linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)"
    }} className="trailer">
      <div>
        <iframe
          width="100%"
          height="700px"
          src={matchingMovie.youtub}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"space-between",
          margin:"20px 0"
        }} className="lin">
          <div className="name">{matchingMovie.name}</div>
          <div className="rate">
            <FaStar style={{ color: "goldenrod" }} /> {matchingMovie.rate}/10
            <br />
            {matchingMovie.numberOfVotes.toLocaleString()} votes
          </div>
        </div>
        <div style={{margin:"20px 0"}} className="slogan">"{matchingMovie.slogan}"</div>
        <div style={{margin:"20px 0", display:"flex",gap:"20px"}}  className="type.">
          {matchingMovie.types.map((type) => (
            <button  className="b">
              <FaFilm /> {type}
            </button>
          ))}
          <button  className="b">
            <CiClock1 /> {matchingMovie.time}
          </button>
          <button  className="b">
            <MdOutlineDateRange /> {matchingMovie.dateOfEdition}
          </button>
        </div>
        <div className="name">Synopsis</div>
        <p>{matchingMovie.story}</p>
        <div className="name">Director</div>
        <p>{matchingMovie.nameOfDirector}</p>
        <div className="name">Cast</div>
        <ul>
          {matchingMovie.actors.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
        <div className="name">Awards</div>
        <p>
          <HiMiniTrophy style={{ color: "gold" }} />
          Won {matchingMovie.oscarWins} Oscar. {matchingMovie.nominationTotal} nominations total.
        </p>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Link to="/">
            <div className="back">
              Return to home <FaHome />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}


const TrailerOfMovie = [
  {youtub:'https://www.youtube.com/embed/zSWdZVtXT7E?si=_YoV4MYZJ8WXJ5Uz',
    name: "Interstellar",
    rate: 8.6,
    numberOfVotes: 1800000,
    slogan: "Mankind was born on Earth. It was never meant to die here.",
    types: ["Adventure", "Drama", "Sci-Fi"],
    time: "2h 49min",
    dateOfEdition: "November 7, 2014",
    story: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    nameOfDirector: "Christopher Nolan",
    actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    oscarWins: 1,
    nominationTotal: 5,
  },
  {youtub:'https://www.youtube.com/embed/w3Wo6QiD3eU?si=k_MfohV2lyzgcGC6' ,
    name: "The Godfather",
    rate: 9.2,
    numberOfVotes: 1750000,
    slogan: "An offer you can't refuse.",
    types: ["Crime", "Drama"],
    time: "2h 55min",
    dateOfEdition: "March 24, 1972",
    story: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    nameOfDirector: "Francis Ford Coppola",
    actors: ["Marlon Brando", "Al Pacino", "James Caan"],
    oscarWins: 3,
    nominationTotal: 11,
  },
  {
    youtub:'https://www.youtube.com/embed/HcoZbHBDHQA?si=2d6oc3iQXZ_Greow',
    name: "Inception",
    rate: 8.8,
    numberOfVotes: 2200000,
    slogan: "Your mind is the scene of the crime.",
    types: ["Action", "Adventure", "Sci-Fi"],
    time: "2h 28min",
    dateOfEdition: "July 16, 2010",
    story: "A thief who enters the dreams of others is given a chance at redemption when he's offered the chance to plant an idea into the mind of a powerful figure.",
    nameOfDirector: "Christopher Nolan",
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    oscarWins: 4,
    nominationTotal: 8,
  },
  {
    youtub:'https://www.youtube.com/embed/Y6YBKdmOlM8?si=Nchn2NGtDjYCyEFt',
    name: "Pulp Fiction",
    rate: 8.9,
    numberOfVotes: 2000000,
    slogan: "Just because you are a character doesn’t mean you have character.",
    types: ["Crime", "Drama"],
    time: "2h 34min",
    dateOfEdition: "October 14, 1994",
    story: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
    nameOfDirector: "Quentin Tarantino",
    actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
    oscarWins: 1,
    nominationTotal: 7,
  },
  {
    youtub:'src="https://www.youtube.com/embed/9ix7TUGVYIo?si=ZLBL6T2Z8ekZBkoN',
    name: "The Matrix",
    rate: 8.7,
    numberOfVotes: 1700000,
    slogan: "What is real?",
    types: ["Action", "Sci-Fi"],
    time: "2h 16min",
    dateOfEdition: "March 31, 1999",
    story: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
    nameOfDirector: ["Lana Wachowski", "Lilly Wachowski"],
    actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    oscarWins: 4,
    nominationTotal: 4,
  },
  {
    youtub:'src="https://www.youtube.com/embed/bLvqoHBptjg?si=di4JJ1WhIIzuWKtU',
    name: "Forrest Gump",
    rate: 8.8,
    numberOfVotes: 1900000,
    slogan: "Life is like a box of chocolates...you never know what you're gonna get.",
    types: ["Drama", "Romance"],
    time: "2h 22min",
    dateOfEdition: "July 6, 1994",
    story: "The story of Forrest Gump, a simple man with good intentions, who unwittingly becomes involved in some of the most important events of the 20th century.",
    nameOfDirector: "Robert Zemeckis",
    actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
    oscarWins: 6,
    nominationTotal: 13,
  }
];
