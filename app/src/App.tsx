import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import { Pet } from './models/pets';
import { adopt, getContract, getPets } from './blockchainUtils';
import { BrowserProvider, Contract, ethers, Signer } from "ethers";

const PETS = [
  {
    "id": 0,
    "name": "Frieda",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Lisco, Alabama"
  },
  {
    "id": 1,
    "name": "Gina",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Tooleville, West Virginia"
  },
  {
    "id": 2,
    "name": "Collins",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Freeburn, Idaho"
  },
  {
    "id": 3,
    "name": "Melissa",
    "picture": "images/boxer.jpeg",
    "age": 2,
    "breed": "Boxer",
    "location": "Camas, Pennsylvania"
  },
  {
    "id": 4,
    "name": "Jeanine",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Gerber, South Dakota"
  },
  {
    "id": 5,
    "name": "Elvia",
    "picture": "images/french-bulldog.jpeg",
    "age": 3,
    "breed": "French Bulldog",
    "location": "Innsbrook, Illinois"
  },
  {
    "id": 6,
    "name": "Latisha",
    "picture": "images/golden-retriever.jpeg",
    "age": 3,
    "breed": "Golden Retriever",
    "location": "Soudan, Louisiana"
  },
  {
    "id": 7,
    "name": "Coleman",
    "picture": "images/golden-retriever.jpeg",
    "age": 3,
    "breed": "Golden Retriever",
    "location": "Jacksonwald, Palau"
  },
  {
    "id": 8,
    "name": "Nichole",
    "picture": "images/french-bulldog.jpeg",
    "age": 2,
    "breed": "French Bulldog",
    "location": "Honolulu, Hawaii"
  },
  {
    "id": 9,
    "name": "Fran",
    "picture": "images/boxer.jpeg",
    "age": 3,
    "breed": "Boxer",
    "location": "Matheny, Utah"
  },
  {
    "id": 10,
    "name": "Leonor",
    "picture": "images/boxer.jpeg",
    "age": 2,
    "breed": "Boxer",
    "location": "Tyhee, Indiana"
  },
  {
    "id": 11,
    "name": "Dean",
    "picture": "images/scottish-terrier.jpeg",
    "age": 3,
    "breed": "Scottish Terrier",
    "location": "Windsor, Montana"
  },
  {
    "id": 12,
    "name": "Stevenson",
    "picture": "images/french-bulldog.jpeg",
    "age": 3,
    "breed": "French Bulldog",
    "location": "Kingstowne, Nevada"
  },
  {
    "id": 13,
    "name": "Kristina",
    "picture": "images/golden-retriever.jpeg",
    "age": 4,
    "breed": "Golden Retriever",
    "location": "Sultana, Massachusetts"
  },
  {
    "id": 14,
    "name": "Ethel",
    "picture": "images/golden-retriever.jpeg",
    "age": 2,
    "breed": "Golden Retriever",
    "location": "Broadlands, Oregon"
  },
  {
    "id": 15,
    "name": "Terry",
    "picture": "images/golden-retriever.jpeg",
    "age": 2,
    "breed": "Golden Retriever",
    "location": "Dawn, Wisconsin"
  }
]


function App() {
  const [pets, setPets] = useState<Pet[]>([]);
  const [petIds, setPetIds] = useState<number[]>([]);

  useEffect(() => {
    // fetch("./assets/pets.json").then(res => res.json()).then(data => {
    //   setPets(data);
    // });
    setPets(PETS);
    init();
  }, []);

  const init = async () => {
    setPetIds(await getPets());
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-8 col-sm-push-2">
            <h1 className="text-center">Pete's Pet Shop</h1>
            <hr />
            <br />
          </div>
        </div>

        <div className="row">
          {pets.map(i =>
            <Card
              key={i.id}
              item={i}
              adopted={petIds.includes(i.id)}
              afterAdopt={init}
            />)}
        </div>
      </div>
    </>
  )
}

export default App
