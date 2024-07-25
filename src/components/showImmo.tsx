import { DataImmobiliers } from '../intefaces/interfaceImmo';
type ShowImmoProps = {
  data: DataImmobiliers;
};
export default function ShowImmo({ data }: ShowImmoProps) {
  return (
    <div>
      <article className="immoSoloPage">
        <img
          className="immoSoloPage_image"
          src={data.cover}
          alt="image_du_bien"
        />
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
          <h2>{data.host.name}</h2>
          <img className="hostPicture" src={data.host.picture} alt="" />
        </div>
        <div className="immoSoloPage_info">
          <div className="immoSoloPage_info_description">
            <h2>Description</h2>
            <p>{data.description}</p>
          </div>
          <div className="immoSoloPage_info_equipements">
            <ul>
              {data.equipments.map((equipement, index) => {
                return <li key={index}>{equipement}</li>;
              })}
            </ul>
          </div>
        </div>
      </article>
    </div>
  );
}
