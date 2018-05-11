import React, { Component } from "react";
import "./App.css";
import Background from "./assets//background.jpg";

const styles = {
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  height: "55em",
  color: "black"
};

const textStyle = {
  background: "rgba(255,255,255, 0.3)"
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      antallPerson: 0,
      antallPizza: 0,
      antallDressing: 0
    };
  }

  calculatePrice = () => {
    const stottePerPers = 25;
    const totalKostnad =
      this.state.antallPizza * 159 + this.state.antallDressing * 33;

    if (!this.state.antallPerson || !this.state.antallPizza) return null;

    const stotte = stottePerPers * this.state.antallPerson;

    return (totalKostnad - stotte) / (this.state.antallPizza * 8);
  };
  render() {
    const price = this.calculatePrice();
    return (
      <div className="App" style={styles}>
        <div style={textStyle}>
          <p>
            Informasjon er basert på rømmedressing til 33 kroner på bunnpris,
            pizza til 159 (ingen frakt) og støtte per person på 25 kroner
          </p>

          <p className="App-intro" styles={{ paddingTop: "40em" }}>
            Skriv inn antall personer
          </p>
          <input
            onChange={evt => this.setState({ antallPerson: evt.target.value })}
          />
          <p />
          <p className="App-intro">Skriv inn antall pizzaer</p>
          <input
            onChange={evt => this.setState({ antallPizza: evt.target.value })}
          />
          <p />
          <p className="App-intro">Skriv inn antall dressinger</p>
          <input
            onChange={evt =>
              this.setState({ antallDressing: evt.target.value })}
          />
          <p />
          <p>
            Pris per stykke blir: {price ? price : ""} dollars
          </p>
        </div>
        <p>
          Credz til Vegard Hellem for progging og Jowey for npm-knoting

        </p>
      </div>
    );
  }
}

export default App;
