import { useLoaderData } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nabvar from "../Navbar/Nabvar";
import Services from "../Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
    const services = useLoaderData();
    return (
        <div className="space-y-8">
            <Nabvar></Nabvar>
            <Banner></Banner>
            <Services services={services}></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;