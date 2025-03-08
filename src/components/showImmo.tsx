import { Fragment } from 'react/jsx-runtime';
import { DataImmobiliers } from '../intefaces/interfaceImmo';
import ShowSlides from './slide/showSlides';
import arrowUp from '../images/arrow_dropdown_up.svg';
import arrowDown from '../images/arrow_dropdown_down.svg';
import { useState } from 'react';
import RatingStars from './slide/ratingStars';
type ShowImmoProps = {
  data: DataImmobiliers;
};
export default function ShowImmo({ data }: ShowImmoProps) {
  const [descriptionDropBool, setDescriptionDropBool] =
    useState<boolean>(false);
  const [equimentDropBool, setEquimentDropBool] = useState<boolean>(false);
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
            <div className="host">
              <h2 className="hostName">{data.host.name}</h2>
              <img className="hostPicture" src={data.host.picture} alt="" />
            </div>
            <div className="stars">
              <RatingStars rating={parseInt(data.rating)} />
            </div>
          </div>
        </div>

        <div className="immoSoloPage_info">
          <div className="immoSoloPage_info_description">
            <div className="dropdown">
              <h2>Description</h2>
              <button
                onClick={() => setDescriptionDropBool(!descriptionDropBool)}
              >
                <img
                  src={descriptionDropBool ? arrowUp : arrowDown}
                  alt="drop"
                />
              </button>
            </div>
            <p
              className={
                !descriptionDropBool
                  ? 'immoSoloPage_inactiveElt'
                  : 'immoSoloPage_activeElt'
              }
            >
              {data.description}
            </p>
          </div>
          <div className="immoSoloPage_info_equipements">
            <div className="dropdown">
              <h2>Équipements</h2>
              <button onClick={() => setEquimentDropBool(!equimentDropBool)}>
                <img src={equimentDropBool ? arrowUp : arrowDown} alt="drop" />
              </button>
            </div>
            <ul
              className={
                !equimentDropBool
                  ? 'immoSoloPage_inactiveElt'
                  : 'immoSoloPage_activeElt'
              }
            >
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
