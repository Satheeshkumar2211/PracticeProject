import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import MainLayout from './common/MainLayout';
import { projectRoutes } from './pages/routes';
// import GitStyle from './components/apexChart/GitStyle';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/RHF" replace={true} />} />
        <Route element={<MainLayout />}>
          {projectRoutes}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
