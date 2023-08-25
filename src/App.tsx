import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import MainPage from './pages/Main';
import TaskOne from './pages/TaskOne';
import TaskTwo from './pages/TaskTwo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="task_one" element={<TaskOne />} />
            <Route path="task_two" element={<TaskTwo />} />
          </Route>

          {/* its good to add some routes for not-found, not-allowed... pages too */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
