import StarActive from '../../images/star-active.svg';
import StarInactive from '../../images/star-inactive.svg';

export default function RatingStars({ rating }: { rating: number }) {
  const starMax = 5;
  const activeStars = Array(rating).fill(null); // Tableau pour les étoiles actives
  const inactiveStars = Array(starMax - rating).fill(null); // Tableau pour les étoiles inactives

  return (
    <div>
      {activeStars.map((_, i) => (
        <img src={StarActive} key={`active-${i}`} alt="rating_Stars" />
      ))}
      {inactiveStars.map((_, i) => (
        <img src={StarInactive} key={`inactive-${i}`} alt="rating_Stars" />
      ))}
    </div>
  );
}
