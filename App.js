import './App.css';
import { FaArrowRightLong } from "react-icons/fa6";
import { TiStarFullOutline } from "react-icons/ti";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from "swiper/modules";
import { FaInstagram } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
import { IoVideocamSharp } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import {Link, useNavigate} from "react-router-dom";
import { useState } from 'react';
import { BiSolidMoviePlay } from "react-icons/bi";
import { useStore } from '..//utils/Store.js';
function App() {
  const info=[
    {
      title:"Diverse Movie Selection",
      paragraphe:"Explore a wide range of movies across various genres, ensuring there's something for every type of viewer.",
     
    },
    {
      title:"Expert Reviews",
      paragraphe:"Get insights from our community of film critics and enthusiasts to help you choose your next watch.",
      
    },
      {
        title:"Vibrant Community",
        paragraphe:"Connect with fellow movie lovers, share your opinions, and engage in discussions about your favorite films.",
  
     
      },
        {
          title:"Personalized Recommendations",
          paragraphe:"Receive tailored movie suggestions based on your viewing history and preferences."
        }
  ]
  const Movies=[
    {
      name: "Interstellar",
      slogan: "Mankind was born on Earth. It was never meant to die here.",
      rate: 4.8, // Rate out of 5
      author: "Christopher Nolan",
      story: `In the near future, Earth is devastated by environmental disasters, leading a group of astronauts to explore a wormhole near Saturn. 
            Their mission is to find a habitable planet for humanity, as Earth faces an inevitable collapse. 
            Along the journey, they encounter strange worlds and must make tough choices that impact the survival of the human race.`,
      type: ["Sci-Fi", "Adventure", "Drama"],
      image: "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/aa5b9295-8f9c-44f5-809b-3f2b84badfbf/8a7dd34b09c9c25336a3d850d4c431455e1aaaf0.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom" // 4K Image from Google
    },
    {
      name: "The Godfather",
      slogan: "An offer you can't refuse.",
      rate: 4.9,
      author: "Mario Puzo",
      story: `A powerful mafia family navigates the treacherous world of organized crime in post-war America. 
            Don Vito Corleone attempts to pass his empire to his reluctant youngest son, Michael, who eventually embraces the family business. 
            As betrayal, violence, and power struggles ensue, Michael becomes a ruthless leader of the Corleone family.`,
      type: ["Crime", "Drama", "Thriller"],
      image: "https://play-lh.googleusercontent.com/ZucjGxDqQ-cHIN-8YA1HgZx7dFhXkfnz73SrdRPmOOHEax08sngqZMR_jMKq0sZuv5P7-T2Z2aHJ1uGQiys" // 4K Image from Google
    },
    {
      name: "Inception",
      slogan: "Your mind is the scene of the crime.",
      rate: 8.8,
      author: "Christopher Nolan",
      story: "A skilled thief, Dom Cobb, is an expert in extracting secrets from deep within the subconscious during dreams.  He is offered a chance to have his criminal record erased if he can accomplish the impossible: inception.The task is to plant an idea into someone’s mind without them realizing, all while navigating layers of dreams.",
      type: ["Sci-Fi", "Action", "Thriller"],
      image: "https://www.daily-movies.ch/wp-content/uploads/2014/11/daily-movies.ch_Inception.jpeg"
    },
    {
      name: "Pulp Fiction",
      slogan: "Just because you are a character doesn't mean you have character.",
      rate: 4.6,
      author: "Quentin Tarantino",
      story: `The film weaves together multiple stories of crime and redemption in Los Angeles, featuring hitmen, a boxer, 
              and a gangster's wife. With sharp dialogue and a non-linear narrative, "Pulp Fiction" explores the absurdities of life.`,
      type: ["Crime", "Drama", "Thriller"],
      image: "https://printler.com/media/photo/162428.jpg" // 4K Image from Google
    },
    {
      name: "The Matrix",
      slogan: "What is the Matrix?",
      rate: 4.5,
      author: "Lana and Lilly Wachowski",
      story: `In a dystopian future, a computer hacker named Neo discovers that reality as he knows it is a simulation 
              created by machines. He joins a rebellion to free humanity and uncover the truth behind the Matrix.`,
      type: ["Sci-Fi", "Action", "Thriller"],
      image: "https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg" // 4K Image from Google
    },
    {
      name: "Forrest Gump",
      slogan: "Life is like a box ; you never know what you're gonna get.",
      rate: 4.8,
      author: "Winston Groom",
      story: `The film follows the extraordinary life of Forrest Gump, a man with a low IQ who unwittingly influences 
              several historical events while pursuing his childhood sweetheart, Jenny. His journey is a touching exploration 
              of love, destiny, and perseverance.`,
      type: ["Drama", "Romance", "Biography"],
      image: "https://m.media-amazon.com/images/S/pv-target-images/f9ddd832d1b566f5b8dd29a4dbc76b7531c420c8c8d9fdfe94eca128bda8e2b1.jpg" // 4K Image from Google
    }
]
const NowShowing=[  {
  name: "The Substance",
  image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2024/05/the-substance-2024-film-teaser-poster.jpg",
  place: "Limited release",
  time: "2 hours",
  type: "Drama, Horror",
  date:"december 2025"
},
{
  name: "Megalopolis",
  image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Megalopolis_%28film%29_poster.jpg/220px-Megalopolis_%28film%29_poster.jpg",
  place: "Major theaters",
  time: "3 hours",
  type: "Sci-Fi, Drama",
   date:"july 2026" 
},
{
  name: "Speak No Evil",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBnFl1sGRYxKB0WOJL5VTnU1DYmsyFjoDy9w&s",
  place: "Select theaters",
  time: "1 hour 45 minutes",
  type: "Thriller, Psychological",
   date:"February 2025"
},
{
  name: "The Killer’s Game",
  image: "https://m.media-amazon.com/images/M/MV5BODg4MTBiOGQtN2I5Yi00MWY2LWI1ODktZTUzZjhlYmZjMjFkXkEyXkFqcGc@._V1_.jpg",
  place: "National release",
  time: "2 hours 10 minutes",
  type: "Action, Crime",
   date:"june 2026"
},
{
  name: "Never Let Go",
  image: "https://assets-prd.ignimgs.com/2024/07/03/never-let-go-button-1720008410731.jpg",
  place: "Limited release",
  time: "1 hour 30 minutes",
  type: "Horror, Supernatural",
   date:"April 2025"
},]
const upcomingMovies = [
  {
    name: "Dune: Part Two",
    image: "https://i.ytimg.com/vi/53BBRKF-L60/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gQygTMA8=&rs=AOn4CLDgS78KBd_b20u0o-YBvLDGs6De2A",
    placeOfWatch: "Theaters",
    howManyPeopleWantToSeeIt: 85, 
    type: "Sci-Fi",
    releaseDate: '2024-11-03',
    story:"Dune: Part TwoIn Dune: Part Two, Paul Atreides (Timothée Chalamet) continues his journey of revenge against those who destroyed his family. With the help of the Fremen and Chani (Zendaya), Paul learns the harsh ways of the desert and embraces his destiny to lead the Fremen in a rebellion against the Harkonnen forces. The film explores themes of power, destiny, and survival as Paul faces complex political and spiritual challenges in the harsh desert landscape of Arrakis."
  },
  {
    name: "Killers of the Flower Moon",
    image: "https://m.media-amazon.com/images/M/MV5BMjE4ZTZlNDAtM2Q3YS00YjFhLThjN2UtODg2ZGNlN2E2MWU2XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    placeOfWatch: "Theaters",
    howManyPeopleWantToSeeIt: 75, 
    type: "Drama/Thriller",
    releaseDate: '2024-10-20' ,
    story:"Directed by Martin Scorsese, Killers of the Flower Moon tells the true story of the Osage Murders in 1920s Oklahoma. After oil is discovered on Osage Nation land, the indigenous Osage people are targeted in a series of murders for their newfound wealth. As bodies pile up, an FBI investigation led by Tom White (Jesse Plemons) unveils a shocking conspiracy. The story delves into themes of greed, systemic corruption, and cultural conflict, as seen through the perspectives of Mollie Burkhart (Lily Gladstone) and her husband, Ernest (Leonardo DiCaprio)."
    
    
  },
  {
    name: "Aquaman and the Lost Kingdom",
    image: "https://m.media-amazon.com/images/I/71EwLg5sFKL._AC_UF894,1000_QL80_.jpg",
    placeOfWatch: "Streaming and Theaters",
    howManyPeopleWantToSeeIt: 90, 
    type: "Action/Adventure",
    releaseDate: '2024-12-25',
    story:"In Aquaman and the Lost Kingdom, Arthur Curry (Jason Momoa) returns to defend Atlantis and the surface world from a mysterious ancient power. This time, he faces Black Manta (Yahya Abdul-Mateen II), who wields a more dangerous weapon to exact revenge on Aquaman. To save his kingdom, Arthur must join forces with Orm, his estranged brother, and uncover a long-buried threat in the Lost Kingdom. This adventure challenges Arthur's strength, leadership, and loyalty as he seeks to unite all underwater tribes for a common cause."
  }
];
const [trouve,settrouve]=useState(false)
const {addMovie} = useStore()
const navigate = useNavigate();
  const { setSelectedMovie } = useStore();

  const handleWatchTrailer = (movie) => {
    setSelectedMovie(movie);
    navigate('/trailer');
  };
  return (
    <div id="App">
<nav>
  <h1>CinemaHub  </h1>
  <div className="navbare">
<a href="#App">Home</a>
<a href="#about">About us</a>
<a href="#movies">Movies</a>
<a href="#reviews">Reviews</a>
<a href="#coming-soon">Coming Soon</a>
<a href="#support">Support</a>
  </div>
  <Link to="/Add">

  <div style={{
    display:"flex",
    flexDirection:"row",
  }} className='up'>
<BiSolidMoviePlay style={{fontSize:"30px" , color:"black"}} />
<div style={{
  borderRadius:"100%",
 height:"8px",
  width:"8px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  position:"relative",
  top:"-10px",
  backgroundColor:trouve ? "red":"white",
  color:"black"
  }}>
</div>
</div>
</Link>
  <div className="buttons">
    <Link to="/Login">
    <button className="button1">Login</button>
    </Link>
    <Link to="Signin">
    <button className="button2">Sign In</button>
    </Link>
  </div>
</nav>
<div id="home">
<div className='p1'>Welcome to CinemaHub</div>
<div className='p2'>Your ultimate destination for movie reviews, discussions, and recommendations!</div>
<Link to="/Explore">
  <button className="button3">Explore Movies <FaArrowRightLong /></button>
  </Link>
</div>
<div className='secound'>
<h1>Why Choose CinemaHub?</h1>
<div className='all'>
  {info.map(function(item){
    return(
    <div className="box" >
      <div className="title">{item.title}</div>
      <div className='paragraphe'>{item.paragraphe}</div>
    </div>)
  })}
</div>
</div>
<div id='about'>
  <h1>About CinemaHub</h1>
  <div className='both'>
    <div className='right'>
      <p>CinemaHub is more than just a movie review platform; it's a vibrant community where film enthusiasts from all walks of life come together to discuss, critique, and celebrate the art of cinema. Founded in 2023, our mission is to create an inclusive and exciting space for casual viewers and cinephiles alike.</p>
      <p>With a diverse selection of reviews ranging from blockbuster hits to indie gems, CinemaHub offers insights into every corner of the film world. Our platform is designed to be user-friendly, allowing you to discover new movies, share your opinions, and connect with fellow movie lovers easily.</p>
      <p>Join CinemaHub today and become part of a growing community of passionate film enthusiasts. Whether you're here to find your next favorite movie, engage in deep discussions about film theory, or simply enjoy reading reviews, CinemaHub is your go-to destination for all things cinema.</p>
    </div>
    <div className='left'>
      <img className='i' src='https://ntvb.tmsimg.com/assets/p17843098_v_h8_as.jpg?w=1280&h=720' />
      <img className='i' src='https://ntvb.tmsimg.com/assets/p9742170_v_h10_av.jpg?w=960&h=540' />
      <img className='i' src='https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/0/b/g/small-spos13127-poster-jumanji-sl-13127-wall-poster-13x19-inches-original-imaggefhpxsgg7zh.jpeg?q=90&crop=false' />
      <img className='i' src='https://c4.wallpaperflare.com/wallpaper/162/163/718/the-lord-of-the-rings-the-hobbit-an-unexpected-journey-movies-gandalf-wallpaper-preview.jpg' />
    </div>
  </div>
</div>
<div id='movies'>
  <h1>Movie Catalog</h1>
  <div className='all2'>
      {Movies.map(function(movie){
    return(
      <div className='box_22'>
        <img src={movie.image} />
        <div className='inbox'>
    <div className='name'>{movie.name}</div>
    <div style={{height:"30px"}} className='slogan'>{movie.slogan}</div>
    <div className='alighn'>
      <div className='Right'><TiStarFullOutline /> {movie.rate}</div>
      <div className='author'>{movie.author}</div>
    </div>
    <div  className='story'>{movie.story}</div>
    <div className='types'>
      <div className='type'>{movie.type[0]}</div>
      <div className='type'>{movie.type[1]}</div>
      <div className='type'>{movie.type[2]}</div>
    </div>
    <button className='button2' onClick={() => handleWatchTrailer(movie)}>
    <HiOutlineInformationCircle /> More Information && watch Trailer <IoVideocamSharp />
  </button>
    </div>
    </div>
  )
  })}
</div>
</div>
<div id='reviews'>
  <h1 className='h1'>Now Showing</h1>
  <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={50}
      slidesPerView={3}
      loop={true}
      effect="coverflow" 
      coverflowEffect={{
        rotate: 50, 
        stretch: 0, 
        depth: 100, 
        modifier: 1, 
        slideShadows: true, 
      }}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
    >
  <div className='all_1'>
  {NowShowing.map(function(film){
    return(
      <SwiperSlide>
     <div className='box_3'>
      <img src={film.image} />
      <p>Now Showing</p>
      <div className='name'>{film.name}</div>
      <div className='palce'>{film.place}</div>
      <div className='alighn'>
      <div className='Right'> {film.time}</div>
      <div className='author'>{film.type}</div>
    </div>
    <button className='button3'>coming in {film.date}</button>
  </div>
  </SwiperSlide>)
  })}
 
 </div>
 </Swiper>
</div>
<div id='coming-soon'>
        <h1>Coming Soon</h1>
        <div className='global'>
          {upcomingMovies.map((coming,i) => (
            <div key={coming.name} className='box_44'>
              <img src={coming.image} alt={coming.name} />
              <div className='inbox'>
                <div className='name'>{coming.name}</div>
                <div className='place'>{coming.placeOfWatch}</div>
                <div>{coming.releaseDate}</div>
                <div style={{height:"150px"}} className='story'>{coming.story}</div>
                <div className='alighn'>
                  <div className='Right'>{coming.howManyPeopleWantToSeeIt} % Want To See</div>
                  <div className='author'>{coming.type}</div>
                </div>
                <button 
                  onClick={() => {
                    addMovie(coming)
                    settrouve(true)
                  }} 
                  className='button2'
                >
                  Add To WatchList
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
<div id='support'>
<div className='p1'>Join the CinemaHub Communityb</div>
<div style={{
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"
}} className='p22'>
<div className='p2'>Sign up now to access exclusive reviews, participate in discussions, and</div>
<div className='p2'>get personalized movie recommendations!</div>
</div>
<Link to="/Login">
  <button className="button3">Sign Up For Free</button>
  </Link>
</div>
<div className='end'>
 <section>
  <h2>Company</h2>
  <div className='h5'>About Us</div>
  <div className='h5'>Careers</div>
  <div className='h5'>Press</div>
 </section>
 <section>
  <h2>Support</h2>
  <div className='h5'>Help Center</div>
  <div className='h5'>Safety Center</div>
  <div className='h5'>Community Guidelines</div>
  </section>
 <section>
  <h2>Legal</h2>
  <div className='h5'>Terms of Service</div>
  <div className='h5'>Privacy Policy</div>
  <div className='h5'>Cookie Policy</div>
  </section>
 <section>
  <h2>Follow Us</h2>
 <div className='logos'>
 <FaInstagram />
 <SiFacebook />
 <FaTwitter />
 </div>
 </section>
  </div>
    </div>
  );
}

export default App;