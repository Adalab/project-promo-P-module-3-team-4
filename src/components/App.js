import { Routes, Route } from 'react-router-dom';

import Landing from './card/Landing';
import Card from '../components/card/Card';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/card" element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
