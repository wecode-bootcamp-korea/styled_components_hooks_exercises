import React, { Component } from "react";
import SearchBox from "./Components/SearchBox/SearchBox";
import CardList from "./Components/CardList/CardList";
import "./Monsters.scss";

/**********************************************************
  API 주소: https://jsonplaceholder.typicode.com/users

  1. 

***********************************************************/

class Monsters extends Component {
  state = {
    monsters: [],
    userInput: "",
  };

  // 데이터 로딩
  componentDidMount() {
    this.getMonsters();
  }

  getMonsters = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ monsters: res }));
  };

  inputHandler = (e) => {
    this.setState({ userInput: e.target.value });
  };

  render() {
    return (
      <div className="Monsters">
        <h1>컴포넌트 재사용 연습!</h1>
        <SearchBox handleChange={this.inputHandler} />
        <CardList
          monsters={this.state.monsters.filter((el) => {
            return el.name
              .toLowerCase()
              .includes(this.state.userInput.toLowerCase());
          })}
        />
      </div>
    );
  }
}

export default Monsters;
