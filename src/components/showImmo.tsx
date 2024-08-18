import { Fragment } from 'react/jsx-runtime';
import { DataImmobiliers } from '../intefaces/interfaceImmo';
import ShowSlides from './slide/showSlides';
import { useState } from 'react';
import Dropdown from './dropDown/dropDown';
type ShowImmoProps = {
  data: DataImmobiliers;
};
export default function ShowImmo({ data }: ShowImmoProps) {
  const [downDropEquipementActive, setDownDropEquipementActive] =
    useState<boolean>(false);
  const [downDropDescriptionActive, setDownDescriptionDropActive] =
    useState<boolean>(false);
  return (
    <Fragment>
      <article className="immoSoloPage">
        <div>
          <ShowSlides images={data.pictures} />
        </div>
        <div className="slideBlock">
          <div className="slidInfo">
            <h1>{data.title}</h1>
            <p className="immoSoloPage_location">{data.location}</p>
            <ul className="immoSoloPage_ulTags">
              {data.tags.map((tag, index) => {
                return (
                  <li className="immoSoloPage_tags" key={index}>
                    {tag}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="slidRate">
            <h2 className="hostName">{data.host.name}</h2>
            <img className="hostPicture" src={data.host.picture} alt="" />
          </div>
        </div>

        <div className="immoSoloPage_info">
          <div className="immoSoloPage_info_description">
            <div className="dropdown">
              <h2>Description</h2>
              <Dropdown
                downDropActive={downDropDescriptionActive}
                setAction={setDownDescriptionDropActive}
              />
            </div>
            <p>{data.description}</p>
          </div>
          <div className="immoSoloPage_info_equipements">
            <div className="dropdown">
              <h2>Équipements</h2>
              <Dropdown
                downDropActive={downDropEquipementActive}
                setAction={setDownDropEquipementActive}
              />
            </div>
            <ul>
              {data.equipments.map((equipement, index) => {
                return <li key={index}>{equipement}</li>;
              })}
            </ul>
          </div>
        </div>
      </article>
    </Fragment>
  );
}
