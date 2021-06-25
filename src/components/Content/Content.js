import food from "../../assets/food1.jpg";
import "./Content.css";

function ContentCard() {
  return (
    <div class="content">
      <div class="container">
        <img src={food} alt="food_picture" className="foodimage" />
        <p>Title</p>
        <p className="ingredients">Ingredients</p>
        <p className="contact">Contact Now</p>
      </div>

      <div class="container">
        <img src={food} alt="food_picture" className="foodimage" />
        <p>Title</p>
      </div>

      <div class="container">
        <img src={food} alt="food_picture" className="foodimage" />
        <p>Title</p>
      </div>

      <div class="container">
        <img src={food} alt="food_picture" className="foodimage" />
        <p>Title</p>
      </div>

      <div class="container">
        <img src={food} alt="food_picture" className="foodimage" />
        <p>Title</p>
      </div>

      <div class="container">
        <img src={food} alt="food_picture" className="foodimage" />
        <p>Title</p>
      </div>

      <div class="container">
        <img src={food} alt="food_picture" className="foodimage" />
        <p>Title</p>
      </div>
    </div>
  );
}

export default ContentCard;
