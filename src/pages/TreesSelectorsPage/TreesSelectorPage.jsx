import React from 'react';
import birch from '../../assets/trees/birch.jpg';
import chestnut from '../../assets/trees/chestnut.jpg';
import linden from '../../assets/trees/linden.jpg';
import maple from '../../assets/trees/maple.jpg';
import oak from '../../assets/trees/oak.jpg';
import rowan from '../../assets/trees/rowan.jpg';
import TreeCard from "../../components/TreeCard/TreeCard.jsx";
import './TreesSelectorPage.css';
const treesArray = [
  {
    src: birch,
    heading: 'Березка',
    id: 'birch',
    name: 'birch-tree',
    class: 'birchTree',
    'data-type': 'trees',
  },
  {
    src: chestnut,
    heading: 'Каштан',
    id: 'chestnut',
    name: 'chestnut-tree',
    class: 'chestnutTree',
    'data-type': 'trees',
  },
  {
    src: linden,
    heading: 'Липа',
    id: 'linden',
    name: 'linden-tree',
    class: 'lindenTree',
    'data-type': 'trees',
  },
  {
    src: maple,
    heading: 'Клен',
    id: 'maple',
    name: 'maple-tree',
    class: 'mapleTree',
    'data-type': 'trees',
  },
  {
    src: oak,
    heading: 'Дуб',
    id: 'oak',
    name: 'oak-tree',
    class: 'oakTree',
    'data-type': 'trees',
  },
  {
    src: rowan,
    heading: 'Рябина',
    id: 'rowan',
    name: 'rowan-tree',
    class: 'rowanTree',
    'data-type': 'trees',
  },
]

const TreesSelectorPage = () => {
  return (
      <div className="root">
        <div className="gallery">
          <div className="container">
            <section className="gallery__content">
              {treesArray.map(tree =>  <TreeCard key={tree.name} {...tree}/>)}
            </section>
          </div>
        </div>
      </div>
  );
};

export default TreesSelectorPage;
