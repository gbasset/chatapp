import React from 'react';

import Contact from './Contact';

// An array of objects
const ListQ = [
    {
      online: true,
      name: "Homer Simpson",
      avatar:
        "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
        id:1,
        alt: "bite",
    },
    {
        online: false,
        name: " Jean Luc Alfonso ",
        avatar:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523",
          id:2,
      },
      {
        online: false,
        name: " Bart Simpson ",
        avatar:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
          id:3,
      },
      {
        online: true,
        name: " Kurt KAK ",
        avatar:
          "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FSeymourSkinner.png?1497567511460",
          id:4,
      },
      {
        online: false,
        name: " Marmedin Beloutchin ",
        avatar:
          "https://static.hitek.fr/img/actualite/s-p-5-jpg.png",
          id:5,
      },
  ];
  const ListQList = () => (
    <div>

      {ListQ.map(item => (
  <Contact key={item.id} name={item.name} avatar={item.avatar} online={item.online} alt={item.alt} />
))}
    </div>
  );

export default ListQList;