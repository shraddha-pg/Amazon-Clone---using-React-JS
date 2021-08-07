import React from 'react';
import "./Home.css";
import Product from "./Product";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg" alt="" />


                <div className="home__row">
                    <Product 
                    title="Whirlpool 7 Kg 5 Star Semi-Automatic Top Loading Washing Machine"
                    price={9190}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Qqj2C2RzL._SL1500_.jpg"
                    rating={5}
                    />
                    <Product title="New Apple iPad Air (10.9-inch, Wi-Fi + Cellular, 64GB) - Space Gray (Latest Model, 4th Generation)"
                    price={55103}
                    image="https://images-na.ssl-images-amazon.com/images/I/71a64TBFrwL._AC_SL1500_.jpg"
                    rating={5}/>
                    <Product title="Smallest True Wireless Earbuds, ABRAMTEK E8 Mini Bluetooth 5.0 Headphones"
                    price={3064}
                    image="https://images-na.ssl-images-amazon.com/images/I/51apwYwv-wL._AC_SL1000_.jpg"
                    rating={4}/>
                </div>

                <div className="home__row">
                <Product title="SweatyRocks Sweatshirt Pullover Fleece Drop Shoulder Striped Hoodie"
                price={1455}
                image="https://images-na.ssl-images-amazon.com/images/I/718wsxGp-TL._AC_UY500_.jpg"
                rating={4}/>
                <Product title="Disney Mickey Mouse Boys' Face T-Shirt"
                price={930}
                image="https://images-na.ssl-images-amazon.com/images/I/61zvuAxZHVL._AC_UX569_.jpg"
                rating={5}/>

                </div>

                <div className="home__row">
                   <Product title="Samsung MS14K6000AS 1.4 cu. ft. Countertop Microwave Oven with Sensor and Ceramic Enamel Interior, Stainless Steel"
                   price={10584}
                   image="https://images-na.ssl-images-amazon.com/images/I/71U4jX1C7OL._AC_SX679_.jpg" 
                   rating={5}/>
                </div>
            
               <div className="home__row">
               <Product title="Willful Smart Watch for Android Phones and iOS Phones Compatible iPhone Samsung"
               price={2760}
               image="https://images-na.ssl-images-amazon.com/images/I/51oAPLRW9DL._AC_SX679_.jpg"
               rating={5}/>
               <Product title="WowWee Pinkfong Baby Shark Official Song Cube - Baby Shark"
               price={612}
               image="https://images-na.ssl-images-amazon.com/images/I/71fw5Z2CBHL._AC_SX569_.jpg"
               rating={3}/>
               <Product title="4K Digital Camera, Video Camera Camcorder VideoSky UHD 48MP "
               price={11503}
               image="https://m.media-amazon.com/images/I/71FHwnZxZUL._AC_UY218_.jpg"
               rating={4}/>
               <Product title="Sony WH-1000XM4 Wireless Industry Leading Noise Canceling Overhead Headphones"
               price={21321}
               image="https://images-na.ssl-images-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg"
               rating={4}/>

            </div>
        </div>
        </div>
    )
}

export default Home
