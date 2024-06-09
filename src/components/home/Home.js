import Navbar from "./NavBar"
import Intro from "./Intro"

const Home = () => {
    return (
        <div className="bg">
            <div>
                <Navbar />
            </div>
            <div className="intro">
                <Intro />
            </div>
        </div>
    )
}

export default Home