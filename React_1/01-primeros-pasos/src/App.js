import './App.css';

const entry = {
  name: 'MyCorp',
  status: 'active',
  url: 'http://example.com',
  logo: 'https://pbs.twimg.com/profile_images/721710364799283200/5muw-J7c_400x400.jpg',
}

const firstEmployee = {
  name: 'Amancio López',
  avatar: 'https://images.assetsdelivery.com/compings_v2/microphoto1981/microphoto19811710/microphoto1981171000024.jpg',
}

function App() {

  return (
    <div className={`company-card ${entry.status}`}>
      <div className="logo" style={{ backgroundImage: `url(${entry.logo})` }} />
      <a href={entry.url}>
        {entry.name}
      </a>
      <p>
        Empleados:
        <div>
          {firstEmployee.name}
        </div>
      </p>
    </div>
  );
}
