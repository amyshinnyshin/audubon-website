import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import TopNav from './components/TopNav';
import ShowBirdPage from './ShowPage';

const listOfBirds = [
  {
    id: 1,
    name: "Acadian Flycatcher",
    genus: "Empidonax virescens",
    conservationStatus:
      "Would be vulnerable to loss of habitat, but no significant decline noted so far. In some regions, Brown-headed Cowbirds often lay eggs in nests of this species.",
    image:
      "https://media.audubon.org/nas_birdapi/4492_Sibl_9780307957900_art_r1.jpg",
    homepage: "https://www.audubon.org/field-guide/bird/acadian-flycatcher",
  },
  {
    id: 2,
    name: "Acorn Woodpecker",
    genus: "Melanerpes formicivorus",
    conservationStatus:
      "Still widespread and common. Reliance on specific oak habitats may make it vulnerable to the effects of climate change.",
    image:
      "https://media.audubon.org/nas_birdapi/2420_Sibl_9780307957900_art_r1.jpg",
    homepage: "https://www.audubon.org/field-guide/bird/acorn-woodpecker",
  },
  {
    id: 3,
    name: "American Black Duck",
    genus: "Anas rubripes",
    conservationStatus:
      'Still abundant locally, but has declined drastically in interior parts of range. Clearing of forest has favored invasion by Mallards, which hybridize extensively with Black Ducks, leading to genetic "swamping" of population.',
    image:
      "https://media.audubon.org/nas_birdapi/783_Sibl_9780307957900_art_r1.jpg",
    homepage: "https://www.audubon.org/field-guide/bird/american-black-duck",
  },
  {
    id: 4,
    name: "American Flamingo",
    genus: "Phoenicopterus ruber",
    conservationStatus: "",
    image:
      "https://media.audubon.org/nas_birdapi/601_Sibl_9780307957900_art_r1.jpg",
    homepage: "https://www.audubon.org/field-guide/bird/american-flamingo",
  },
  {
    id: 5,
    name: "American White Pelican",
    genus: "Pelecanus erythrorhynchos",
    conservationStatus:
      "Colonies are vulnerable to disturbance and habitat loss. Total population probably declined through first half of 20th century, substantial increase since 1970s.",
    image:
      "https://media.audubon.org/nas_birdapi/267_Sibl_9780307957900_art_r1.jpg",
    homepage: "https://www.audubon.org/field-guide/bird/american-white-pelican",
  },
  {
    id: 6,
    name: "Aplomado Falcon",
    genus: "Falco femoralis",
    conservationStatus: "",
    image:
      "https://media.audubon.org/nas_birdapi/990_Sibl_9780307957900_art_r1.jpg",
    homepage: "https://www.audubon.org/field-guide/bird/aplomado-falcon",
  },
  {
    id: 7,
    name: "Atlantic Puffin",
    genus: "Fratercula arctica",
    conservationStatus:
      "Major declines during 19th century were owing to overharvesting of eggs and adults. During 20th century, continued to decrease at southern end of breeding range in both North America and Europe. Vulnerable to introduction of predators (such as rats) to nesting islands. An ambitious Audubon project to re-introduce puffins on former nesting islands off Maine, started in the 1970s, has been a major success. However, at the southernmost colonies, puffins have poor breeding success in warm-water years, which are becoming more frequent as the climate heats up.",
    image:
      "https://media.audubon.org/nas_birdapi/2514_Sibl_9780307957900_art_r1.jpg",
    homepage: "https://www.audubon.org/field-guide/bird/atlantic-puffin",
  },
  {
    id: 8,
    name: "Aztec Thrush",
    genus: "Ridgwayia pinicola",
    conservationStatus: "",
    image:
      "https://media.audubon.org/nas_birdapi/3556_Sibl_9780307957900_art_r1.jpg",
    homepage: "https://www.audubon.org/field-guide/bird/aztec-thrush",
  },
];


function App() {
  return (
    <Router>
      <TopNav />
      <Routes>
        <Route path="/" element={<HomePage listOfBirds={listOfBirds} />} />
        <Route path="/birds/:id" element={<ShowBirdPage listOfBirds={listOfBirds} />} />
      </Routes>
    </Router>
  );
}

export default App;
