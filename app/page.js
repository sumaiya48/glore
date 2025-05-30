import Image from "next/image";
import Policy from "./policy";
import Banner from "./components/Banner";
import Footer from "./Footer";
import LatestCollections from "./LatestCollections";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <div className="">
      <Banner></Banner>
      <LatestCollections></LatestCollections>
     <Policy></Policy>
     <Footer></Footer>
    </div>
  );
}
