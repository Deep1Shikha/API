import "./Content.css";

const ContentCard = (props) => {
  const { recipeObj } = props;
  return (
    
    <>
      <div className="container">
        <img src={recipeObj.image} alt="food_picture" className="foodimage" />
        <p>{recipeObj.label}</p>
        <p className="ingredients">Ingredients</p>
        <p className="contact">Contact Now</p>
      </div>

    </> 
  );
};
export default ContentCard;
