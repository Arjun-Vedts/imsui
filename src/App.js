import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import { Routes, Route } from "react-router-dom";
import QmRevisionRecordsComponent from './components/qms/qm/qm-revisionrecords.component';
import Dashboard from './components/dashboard/dashboard.component';
import QmAddDocContentComponent from './components/qms/qm/qm-add-doc-content/qm-add-doc-content.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quality-manual" element={<QmRevisionRecordsComponent />} />
        <Route path="/qm-add-content" element={<QmAddDocContentComponent />} />
      </Routes>
{/* <Login/> */}
    </div>
  );
}

export default App;
