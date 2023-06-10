import Player from "./Player";
import Players from "./Players";
import React from "react";

const PlayersList = () => {
  const data = [
    {
      name: "Lionel Messi",
      team: "Paris Saint-Germain",
      nationality: "Argentina",
      jerseyNumber: 30,
      age: 34,
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/6/6c/Lionel_Messi_in_2018.jpg",
    },
    {
      name: "Cristiano Ronaldo",
      team: "Manchester United",
      nationality: "Portugal",
      jerseyNumber: 7,
      age: 36,
      imageUrl: "https://www.footmercato.net/build/images/player-covers/cristiano-ronaldo.352c95f5.jpg",
    },
    {
      name: "Neymar Jr.",
      team: "Paris Saint-Germain",
      nationality: "Brazil",
      jerseyNumber: 10,
      age: 29,
      imageUrl: "https://b.fssta.com/uploads/application/soccer/headshots/713.vresize.350.350.medium.34.png",
    },
    {
      name: "Kylian Mbappé",
      team: "Paris Saint-Germain",
      nationality: "France",
      jerseyNumber: 7,
      age: 22,
      imageUrl: "https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/2022-2023/21/56621.jpg",
    },
  ];
  return (
    <div>
      {data.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          imageUrl={player.imageUrl}
        />
      ))}
    </div>
  );
};

export default PlayersList;
