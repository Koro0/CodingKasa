import { useParams } from 'react-router-dom';
import ShowImmo from '../components/showImmo';
import KasaData from '../data/KasaData.json';
import { DataImmobiliers } from '../intefaces/interfaceImmo';

export default function ImmoPage() {
  let { immoId } = useParams<{ immoId: string }>();
  const selectData: DataImmobiliers | undefined = KasaData.find(
    (item) => item.id === immoId
  );
  console.log(selectData);
  if (!selectData) {
    return <div>Le bien est indiponible</div>;
  }
  return (
    <section>
      <ShowImmo data={selectData} />
    </section>
  );
}
