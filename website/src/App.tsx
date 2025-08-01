import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import PresentationPage from './pages/PresentationPage';
import MethodologyPage from './pages/MethodologyPage';
import DataSourcesPage from './pages/DataSourcesPage';
import AboutPage from './pages/AboutPage';
import './App.css';

function App() {
  return (
    <Router basename="/retirement-revolution">
      <div className="App">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/presentation" element={<PresentationPage />} />
            <Route path="/methodology" element={<MethodologyPage />} />
            <Route path="/data-sources" element={<DataSourcesPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
