export type DataImmobiliers = {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  host: DataImmobiliersHost;
  description: string;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
};
type DataImmobiliersHost = { name: string; picture: string };

export type ShowImmoListProps = {
  key: string;
  id: string;
  title: string;
  cover: string;
};
