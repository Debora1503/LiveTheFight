// src/data/data.js
import camisola1Img1 from '../../img/backblack1.png';
import camisola1Img2 from '../../img/backblack2.png';
import camisola2Img1 from '../../img/backblack1.png';
import camisola2Img2 from '../../img/backblack2.png';
import calcao1Img1 from '../../img/backblack1.png';
import calcao1Img2 from '../../img/backblack2.png';
import calca1Img1 from '../../img/backblack1.png';
import calca1Img2 from '../../img/backblack1.png';
import casaco1Img1 from '../../img/backblack1.png';
import casaco1Img2 from '../../img/backblack1.png';

const shirtsData = [
  {
    id: '1',
    title: 'Camisola 1',
    images: [camisola1Img1, camisola1Img2],
  },
  {
    id: '2',
    title: 'Camisola 2',
    images: [camisola2Img1, camisola2Img2],
  },
  // ... more data
];

const shortsData = [
  {
    id: '1',
    title: 'Calção 1',
    images: [calcao1Img1, calcao1Img2],
  },
  // ... more data
];

const pantsData = [
  {
    id: '1',
    title: 'Calça 1',
    images: [calca1Img1, calca1Img2],
  },
  // ... more data
];

const jacketsData = [
  {
    id: '1',
    title: 'Casaco 1',
    images: [casaco1Img1, casaco1Img2],
  },
  // ... more data
];

export { shirtsData, shortsData, pantsData, jacketsData };
