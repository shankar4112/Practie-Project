import React from "react";
import './Menu.css';
class Menu extends React.Component {
  render() {
    return (
      <section id="menu">
        <div id="food">
          <div className="head">
            <h1 style={{ color: 'rgb(236, 12, 12)' }}>OUR FOODS</h1>
          </div>
          <div className="foods">
            <div className="foodCard">
              <img
                src="https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Roasted chicken Bowl"
              />
              <p>Roasted Chicken Bowl</p>
              <button>Add To Cart</button>
            </div>
            <div className="foodCard">
              <img
                src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Pan Cakes"
              />
              <p>Pan Cakes</p>
              <button>Add To Cart</button>
            </div>
            <div className="foodCard">
              <img
                src="https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Fish"
              />
              <p>Fish</p>
              <button>Add To Cart</button>
            </div>
            <div className="foodCard">
              <img
                src="https://images.pexels.com/photos/1132558/pexels-photo-1132558.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Smoothie"
              />
              <p>Smoothie</p>
              <button>Add To Cart</button>
            </div>
            <div className="foodCard">
              <img
                src="https://images.pexels.com/photos/1414234/pexels-photo-1414234.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Cakes"
              />
              <p>Cakes</p>
              <button>Add To Cart</button>
            </div>
            <div className="foodCard">
              <img
                src="https://images.pexels.com/photos/1788852/pexels-photo-1788852.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Pizza"
              />
              <p>Pizza</p>
              <button>Add To Cart</button>
            </div>
            <div className="foodCard">
              <img
                src="https://images.pexels.com/photos/5946069/pexels-photo-5946069.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Desserts"
              />
              <p>Desserts</p>
              <button>Add To Cart</button>
            </div>
            <div className="foodCard">
              <img
                src="https://images.pexels.com/photos/19902251/pexels-photo-19902251/free-photo-of-cooking-pasta-in-pot.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Italian Cuisine"
              />
              <p>Italian Cuisine</p>
              <button>Add To Cart</button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Menu;
