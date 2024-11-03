import Banner from "../../components/fancyStuff/banner";
import Category from "../../components/category/Category";
import HomePageProductCard from "../../components/homePageProductCard/HomePageProductCard";
import Layout from "../../components/layout/Layout";
import Track from "../../components/track/Track";
import { useContext } from "react";
import myContext from "../../context/myContext";
import { Loader } from "lucide-react";

const HomePage = () => {
    const context = useContext(myContext);
    const name = context;
    return (
        <Layout>
            <Banner/>
            <Category/>
            <HomePageProductCard/>
            <Track/>
            <Loader/>
            Homepage For Ecommmerce Website
        </Layout>
    );
}

export default HomePage;