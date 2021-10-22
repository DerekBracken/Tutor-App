import "../styles/header.css"
import {Link} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";


const HeaderComponent = () => {
    const { currentUser } = useAuth()
    let profile;
    if (currentUser){
      profile = "profile"
    } else {
      profile = "login"
    }


    return(
        <>
        <div id="main-nav">

            <div>
            <Link to="/"><button>
              Home
            </button>
            </Link>
            </div>

            <div>
            <Link to="/learningresources"><button>
              Learning resources
            </button>
            </Link>
            </div>

            <div>
                <button >Mentor/mentee</button>
            </div>

            {/* <div>
                <button >Chat</button>
            </div> */}

            <div>
            <Link to="/profile"><button>
              {profile}
            </button>
            </Link>
            </div>
           
        </div>
        </>
    )
}

export default HeaderComponent;