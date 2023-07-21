import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const pets =[
    {id: 1, name: "Hatari"},
    {id: 2, name: "Murembo"}
  ]

  const colorElements = colors.map((color)=>{
    return <li key={color} style={{color:color}}>{color}</li>
  })

  const petlist = pets.map((pet)=>{
    return <p id={pet.id}>{pet.name}</p>
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
      <p>{petlist}</p>
    </div>
  );
}

export default ColorList;
