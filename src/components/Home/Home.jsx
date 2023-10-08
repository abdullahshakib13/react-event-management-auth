import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nabvar from "../Navbar/Nabvar";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <Nabvar></Nabvar>
            <Banner></Banner>
            <h2>This is Home</h2>
            <Services services={services}></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;