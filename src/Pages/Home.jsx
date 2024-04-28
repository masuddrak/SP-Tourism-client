import useQueryTanstack from "../Hooks/useQueryTanstack";
import Banner from "../components/Banner";
import Countries from "../components/Countries";
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
            <Countries></Countries>
            <TouristsSpotSection></TouristsSpotSection>
        </div>
    );
};

export default Home;