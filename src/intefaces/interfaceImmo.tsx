export type DataImmobiliers = DataImmobiliersHost & {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  rating: number;
  location: string;
  equipments: string[];
  tags: string[];
};
type DataImmobiliersHost = [name: string, picture: string];

export type ShowImmoListProps = {
  key: string;
  id: string;
  title: string;
  cover: string;
};
