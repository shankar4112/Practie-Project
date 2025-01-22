import React from 'react';
import './about.css';

class About extends React.Component {
  render() {
    return (
      <div id="food">
        <section id="about">
          <div className="foods">
            <div className="foodCard" style={{ backgroundColor: 'rgb(236, 12, 12)' }}>
              <h1>Welcome to AFOOD Restaurant, where passion meets taste!</h1>
            </div>
            <div className="foodCard" style={{ backgroundColor: 'rgb(236, 12, 12)' }}>
              <h2>Established in 2021, AFOOD restaurant has been a culinary destination for food lovers in the heart of the city.</h2>
            </div>
            <div className="foodCard" style={{ backgroundColor: 'rgb(236, 12, 12)' }}>
              <h2>Our journey began with a simple vision: to provide a dining experience that combines quality ingredients, authentic flavors, and exceptional service.</h2>
            </div>
            <div className="foodCard" style={{ backgroundColor: 'rgb(236, 12, 12)' }}>
              <h2>Over the years, we have worked tirelessly to refine our menu, sourcing the freshest ingredients from local farmers and producers.</h2>
            </div>
            <div className="foodCard" style={{ backgroundColor: 'rgb(236, 12, 12)' }}>
              <img src="https://images.pexels.com/photos/6249727/pexels-photo-6249727.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Restaurant scene 1" />
            </div>
            <div className="foodCard" style={{ backgroundColor: 'rgb(236, 12, 12)' }}>
              <img src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Restaurant scene 2" />
            </div>
            <div className="foodCard" style={{ backgroundColor: 'rgb(236, 12, 12)' }}>
              <img src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Restaurant scene 3" />
            </div>
            <div className="foodCard" style={{ backgroundColor: 'rgb(236, 12, 12)' }}>
              <img src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Restaurant scene 4" />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
