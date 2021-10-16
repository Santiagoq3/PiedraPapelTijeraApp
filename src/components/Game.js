import React from "react";
import { useSelector } from "react-redux";
import GameOptions from "./GameOptions";
import OptionSelected from "./OptionSelected";

const Game = () => {
  const { pcOption, svg, bgc } = useSelector((state) => state.pc);

  const {winner} = useSelector(state => state.game)

  return (
    <div className="game">
      <OptionSelected title="You picked" />

      <div className="game__winner">
        <h3>{winner}</h3>
      </div>

      <div>
        <p></p>
      </div>
      <div className="game__results">
        <p className="game__results-players">The PC picked</p>

        {pcOption === null ? (
          <p className="game__option"></p>
        ) : (
          <GameOptions img={svg} title={pcOption} bgc={bgc} />
        )}
      </div>
    </div>
  );
};
export default Game;
