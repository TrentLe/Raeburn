import './App.scss'
import { Routes, Route } from 'react-router-dom';

import Layout from './componenets/Layout';
import Home from './componenets/Home';

const App = () => {
    return (
      <>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Home />} />
      </Routes>
      </>
    
    );
};

export default App;