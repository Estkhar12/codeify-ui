import React from 'react'
import "../css/banner.css"; 

/* Categories */

const Category = () => {
  return (
    <div>
      <div className="category">
        <div className="cat-title">
          <h2>Categories</h2>
          <h1>CATEGORIES WE'RE DEALIGN IN</h1>
        </div>
        <div className="cat-cards">
          <div className="cat-card">
            <img
              src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1060&t=st=1696082065~exp=1696082665~hmac=d3ad6403a0f3bbbe8dd07d3d2bda2c7e3904e8de8fdd7579b83c78796e682cca"
              alt="sports"
            />
            <h3>Sports</h3>
          </div>
          <div className="cat-card">
            <img
              src="https://img.freepik.com/free-photo/couple-training-together-gym_651396-1076.jpg?w=1060&t=st=1696082239~exp=1696082839~hmac=4f6712e8e7af285306893be38750530783ce97049fc1173bc5c829a61a19b369"
              alt="gym"
            />
            <h3>Gym</h3>
          </div>
          <div className="cat-card">
            <img
              src="https://img.freepik.com/free-photo/clothing-rack-with-floral-hawaiian-shirts-hangers-hat_23-2149366018.jpg?w=1060&t=st=1696082314~exp=1696082914~hmac=6a7fa1fc5f1bed0f21560a4f87805eb74bd6aa58dcf175052846c7c5b4e35a6b"
              alt="clothing"
            />
            <h3>Clothing</h3>
          </div>
          <div className="cat-card">
            <img
              src="https://img.freepik.com/free-photo/woman-with-tablet-checking-shopping-cart-see-if-she-has-everything-she-needs-lunch_342744-1111.jpg?w=1060&t=st=1696082609~exp=1696083209~hmac=4af45c8b349422f68e9254db5c20d27a38ff319cbe87923c5ecb5b92c5b14124"
              alt="grocery"
            />
            <h4>Grocery</h4>
          </div>
          <div className="cat-card">
            <img
              src="https://img.freepik.com/premium-photo/backpack-with-lot-books-pencils-it_567739-6613.jpg?w=900"
              alt="stationary"
            />
            <h4>Stationary</h4>
          </div>
          <div className="cat-card">
            <img
              src="https://img.freepik.com/free-photo/gold-necklace-earrings-are-displayed-red-background_1340-42832.jpg?t=st=1696082830~exp=1696086430~hmac=e8b54a3355f99125beab6584317cc48674267d215ee9a6e6e5e9ea69f7f7c517&w=1060"
              alt="jwellary"
            />
            <h4>Jwellary</h4>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default Category
