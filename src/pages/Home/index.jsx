import HeaderNav from "@/components/HeaderNav";
import Swiper from "@/components/Swiper";
import banner1 from "@/assets/images/banner1.webp";
import banner2 from "@/assets/images/banner2.webp";
import banner3 from "@/assets/images/banner3.webp";
import banner4 from "@/assets/images/banner4.webp";
import HotList from "./HotList";

function Home() {
  return (
    <div>
      <HeaderNav />
      <Swiper bannerList={[banner1, banner2, banner3, banner4]} />
      <HotList />
    </div>
  );
}

export default Home;
