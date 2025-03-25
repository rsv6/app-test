import { Link } from "react-router";

const Home = () => {
    return (
        <div>
            <h1>Welcome Home</h1>
            <Link to="/about">About</Link>
        </div>
        
    );
}

export default Home;