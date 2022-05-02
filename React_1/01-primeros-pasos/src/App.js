import logo from './logo.svg';
import './App.css';

const entry = {
  name: "MyCorp",
  status: "diseable",
  url: "http://example.com"
}

function App() {
  return (
    <div className={entry.status}>
      <a href={entry.url}>{entry.name}</a>
    </div>
  );
}

export default App;
