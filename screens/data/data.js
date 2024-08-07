// src/data/data.js
import camisola1Img1 from '../../img/black3.png';
import camisola1Img2 from '../../img/backblack3.png';
import camisola1Img3 from '../../img/blackside2.png'

import camisola2Img3 from '../../img/black2.png';
import camisola2Img4 from '../../img/backblack2.png';

import camisola1Img5 from '../../img/black3.png';
import camisola2Img6 from '../../img/backblack2.png';

import camisola2Img7 from '../../img/white2.png';
import camisola2Img8 from '../../img/white1back.png';
 

import camisola2Img9 from '../../img/white2.png';
import camisola2Img10 from '../../img/backwhite3.png';
import camisola2Img11 from '../../img/white2side.png';

import calcao1Img1 from '../../img/calcoes1.png';
import calcao1Img2 from '../../img/calcoesback1.png';

import calcao1Img3 from '../../img/calcoes2.png';
import calcao1Img4 from '../../img/calcoesback2.png';

import calcao1Img5 from '../../img/calcoes3.png';
import calcao1Img6 from '../../img/calcoesback3.png';



const shirtsData = [
  {
    id: '1',
    title: 'Camisola 1',
    images: [camisola1Img1, camisola1Img2, camisola1Img3],
  },
  {
    id: '2',
    title: 'Camisola 2',
    images: [camisola2Img3, camisola2Img4, camisola1Img3],
  },
  {
    id: '3',
    title: 'Camisola 3',
    images: [camisola1Img5, camisola2Img6, camisola1Img3],
  },
  {
    id: '4',
    title: 'Camisola 4',
    images: [camisola2Img7, camisola2Img8, camisola2Img11],
  },
  {
    id: '5',
    title: 'Camisola 5',
    images: [camisola2Img9, camisola2Img10, camisola2Img11],
  },
  // ... more data
];

const shortsData = [
  {
    id: '6',
    title: 'Calção 1',
    images: [calcao1Img1, calcao1Img2],
  },
  {
    id: '7',
    title: 'Calção 2',
    images: [calcao1Img3, calcao1Img4],
  },
  {
    id: '8',
    title: 'Calção 3',
    images: [calcao1Img5, calcao1Img6],
  },
  // ... more data
];


export { shirtsData, shortsData };
