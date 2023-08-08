
import "./Home.css";
import { Link } from "react-router-dom";

function Home(){

    return(
        <div className="home-container">
         
                <Link  to='/utility-app/todo'  className="nav-link active" aria-current="page">
                To Do App
            </Link>
            <Link to ='/utility-app/notes'>  
                Note Keeper
                </Link>

        </div>
    )
}

export default Home;