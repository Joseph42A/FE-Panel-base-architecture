import { Link } from 'react-router-dom';

function App() {
  const test = 'Joseph';
  return (
    <div>
      <h2>Yureka New Architecture {test} </h2>
      <Link to="/admin">Admin</Link>
    </div>
  );
}

export default App;
