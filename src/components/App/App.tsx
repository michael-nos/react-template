import { Route, Routes } from 'react-router-dom';
import { NotFound } from '@/components/NotFound';
import { Home } from '@/routes/Home';
import { Test } from '@/routes/Test';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/test' element={<Test />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
