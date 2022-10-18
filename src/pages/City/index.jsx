import React from "react";
import CityHeader from "@/components/PubHeader";
import CurrentCity from "./CurrentCity";
import CityList from "./CityList";

function City() {
  //   const [currentCity, setCurrentCity] = useState("北京");
  //   const changeCity = (city) => {
  //     setCurrentCity(city);
  //   };
  return (
    <div>
      <CityHeader title="城市选择" />
      <CurrentCity />
      {/* <CurrentCity currentCity={currentCity} /> */}
      <CityList />
      {/* <CityList changeCity={changeCity} /> */}
    </div>
  );
}

export default City;
