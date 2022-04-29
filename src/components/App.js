import { Routes, Route } from 'react-router-dom';

import Landing from './card/Landing';
import Card from '../components/card/Card';

function App() {
  return (
    <>
      <Routes>
        <Route path="/card" element={<Card />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
