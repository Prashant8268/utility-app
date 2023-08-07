
import "./Home.css";
import { Link } from "react-router-dom";

function Home(){

    return(
        <div className="home-container">
         
                <Link  to='/todo'  className="nav-link active" aria-current="page">
                To Do App
            </Link>
            <Link to ='/notes'>  
                Note Keeper
                </Link>

        </div>
    )
}

export default Home;