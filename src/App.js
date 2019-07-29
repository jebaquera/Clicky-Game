// imports dependencies and files
import React, { Component } from "react";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
import Footer from "./components/Footer";
import popArt from "./popArt.json";
import "./App.css";

// sets state to 0 or empty


// when you click on a card ... the pop art image is taken out of the array


// if you click on a pop art image that has already been selected, the game is reset and cards reordered


// if you click on an available pop art image, your score is increased and cards reordered


// if you get all 12 pop art images correct, you get a congrats message and the game resets        


// the order of components to be rendered: nav, title, wrapper, card, footer
render() {
    return (
      <div>
        <Nav 
          score={this.state.score}
        />
        <Title />
        <div className="wrapper">
          {this.state.popArt.map(popArt => (
            <Card
              imageClick={this.imageClick}
              id={popArt.id}
              key={popArt.id}
              image={popArt.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;