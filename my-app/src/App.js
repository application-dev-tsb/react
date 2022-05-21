import './App.css';

function App() {
  const buttonText = 'Click Me!';

  return (
    <div style={{ backgroundColor: 'red', border: '1px solid red' }}>
      
      <label for="name">Enter Name:</label>
      <input id="name" type="text"/> 

      <button>{buttonText}</button>
    </div>
  );
}

export default App;
