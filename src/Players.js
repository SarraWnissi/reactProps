import React from 'react'

function Players() {
  const data = [
    {
      name: "Lionel Messi",
      team: "Paris Saint-Germain",
      nationality: "Argentina",
      jerseyNumber: 30,
      age: 34,
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Lionel_Messi_in_2018.jpg"
    },
    {
      name: "Cristiano Ronaldo",
      team: "Manchester United",
      nationality: "Portugal",
      jerseyNumber: 7,
      age: 36,
      imageUrl: "https:cristiano_ronaldo.jpg"
    },
    {
      name: "Neymar Jr.",
      team: "Paris Saint-Germain",
      nationality: "Brazil",
      jerseyNumber: 10,
      age: 29,
      imageUrl: "neymar_jr.jpg"
    },
    {
      name: "Kylian Mbappé",
      team: "Paris Saint-Germain",
      nationality: "France",
      jerseyNumber: 7,
      age: 22,
      imageUrl: "https://kylian_mbappe.jpg"
    }
  ];
  
  const listItems = data.map(
      (element) => {
          return (
              <ul type="disc">
                  <li style={{
                      fontWeight: 'bold',
                      color: 'red'
                  }}
                  >
                      {element.name}
                  </li>
                  <li>{element.team}</li>
                  <li>{element.nationality}</li>
                  <li>{element.jerseyNumber}</li>
                  <li>{element.age}</li>
                  <li>{element.imageUrl}</li>
              </ul>
          )
      }
  )
  return (
      <div>
          {listItems}
      </div>
  )
}
export default Players