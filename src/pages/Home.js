import Ccarousel from "../components/Carousel";
import { Carousel } from "@trendyol-js/react-carousel";
import { useEffect, useState } from "react";
import useProducts from "../Hooks/Useproducts";

import Options from "../components/Options"
import ProductSlider from "../components/ProductSlider"
import OffersBaner from "../components/OffersBaner"

const Home = () => {

  // Hooks
  const {Getproducts , Products} = useProducts()
  const [OfferItems, setOfferItems] = useState([])


  useEffect(()=>{
    Getproducts()
  },[])

  useEffect(()=> {
    if(Products){
      setOfferItems(Products.filter(p => p.category === "Mouse"))  
    }
  }, [Products])

  return (
    <div className="home">
      <div className="Carousel">
        <Ccarousel />

        <Options/>
        <ProductSlider Items={OfferItems}/>
        <OffersBaner Items={Products}/>
      </div>
    </div>
  );
};

export default Home;
