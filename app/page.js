import Image from "next/image";
import Banner from "./components/Banner";
import Footer from "./Footer";
import LatestCollections from "./LatestCollections";
import Policy from "./Policy";

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
