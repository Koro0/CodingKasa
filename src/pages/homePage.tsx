import React from 'react';
import ShowImmoList from '../components/showImmoList';
import KasaData from '../data/KasaData.json';

export default function HomePage() {
  return (
    <div>
      <div className="cadre">
        <div className="cadre_txt">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <section className="gallery">
        {KasaData.map((immo) => {
          return (
            <ShowImmoList
              key={immo.id}
              id={immo.id}
              title={immo.title}
              cover={immo.cover}
            />
          );
        })}
      </section>
    </div>
  );
}
