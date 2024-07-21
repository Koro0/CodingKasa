import { ShowImmoListProps } from '../intefaces/interfaceImmo';

export default function ShowImmoList({
  key,
  id,
  cover,
  title,
}: ShowImmoListProps) {
  return (
    <article key={key}>
      <a href={`/${id}`}>
        <img src={cover} alt="photo_interieur" />
        <h2>{title}</h2>
      </a>
    </article>
  );
}
