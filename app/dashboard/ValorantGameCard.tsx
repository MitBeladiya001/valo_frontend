import React from 'react';
import Image from 'next/image';

const GameCards = () => {
  const games = [
    {
      name: "Valorant",
      image: "/valo.jpeg"
    },
    {
      name: "League of Legends",
      image: "/lol.jpeg"
    },
    {
      name: "Counter Strike",
      image: "/cs.jpeg"
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 p-4">
      {games.map((game, index) => (
        <div
          key={index}
          className="w-64 h-80 bg-opacity-50 bg-[#1b1e23] backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer"
        >
          <div className="relative w-full h-3/4">
            <Image
              src={game.image}
              alt={game.name}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-4 text-white flex justify-center items-center h-1/4 bg-opacity-50 bg-[#1b1e23] backdrop-blur-sm">
            <h3 className="text-xl font-semibold group-hover:text-[#6094d0] transition-colors duration-300">
              {game.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GameCards;