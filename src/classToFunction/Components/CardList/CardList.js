import React, { Component } from "react";
// import Monsters from "../../Monsters";
import Card from "../Card/Card";
import "./CardList.scss";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((el) => {
          return (
            <Card key={el.name} id={el.id} name={el.name} email={el.email} />
          );
        })}
      </div>
    );
  }
}

export default CardList;
