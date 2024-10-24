import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">Hello, I'm [Your Name]</h1>
      <p className="text-lg text-gray-700 mb-8">
        A passionate developer focused on building web applications.
      </p>
      <a
        href="#projects"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        View My Projects
      </a>
    </div>

  );
}

export default App;
