import { Helmet } from "react-helmet";
import useQueryTanstack from "../Hooks/useQueryTanstack";
import Banner from "../components/Banner";
import BestOffer from "../components/BestOffer";
import Countries from "../components/Countries";
import SectionTitle from "../components/SectionTitle";
import Subscription from "../components/Subscription";
import TouristsSpotSection from "../components/TouristsSpotSection";

const Home = () => {
    const { isLoading } = useQueryTanstack()
    if (isLoading) {
        return <div className="min-h-[70vh] flex justify-center items-center">
            <h1 className="text-5xl"><span className="loading loading-ring loading-lg"></span></h1>
        </div>
    }
    return (
        <div>
            <Banner></Banner>
            <Helmet> <title> Home</title></Helmet>
            <SectionTitle sub_head="Take yourself" head="All Country Spots" ></SectionTitle>
            <Countries></Countries>
            <SectionTitle sub_head="Value before business" head="We Offer the best" ></SectionTitle>
            <BestOffer></BestOffer>
            <SectionTitle sub_head="Value before business" head="Best Spots In Country" ></SectionTitle>
            <TouristsSpotSection></TouristsSpotSection>
            <Subscription></Subscription>
        </div>
    );
};

export default Home;