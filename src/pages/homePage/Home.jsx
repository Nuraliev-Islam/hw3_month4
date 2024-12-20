import { Banner, NewArrivals, TopSelling, Brands, DressStyle } from "../../widgets";

export const Home = () => {
    return (
        <div>
            <Banner />
            <Brands />
            <NewArrivals />
            <TopSelling />
            <DressStyle />
        </div>
    );
}

