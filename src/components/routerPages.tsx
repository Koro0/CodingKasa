import { Routes, Route } from 'react-router-dom';

import Error404 from './error';
import APropos from '../pages/aPropos';
import HomePage from '../pages/homePage';
import ImmoPage from '../pages/immoPage';

export default function RouterPages() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a_propos" element={<APropos />} />
      <Route path="/:immoId" element={<ImmoPage />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}
