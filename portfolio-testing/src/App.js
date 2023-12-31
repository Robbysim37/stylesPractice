import logo from './logo.svg';
import './App.css';
import HexagonPage from './shapes/HexagonPage';
import SvgPage from './SVG/svgPage';


// Width as a base (100px)
// Height is 110% of the base (110px)
// surrounding margin is 5% of base (5px)
// 32:50 ratio - 50 == half of width (50px)
// 32:50 ratio - 32 == 64% of half of the width (32px)
// margin left on every even row == same as surrounding margin (5px)


function App() {
  return (
    <div className="App">
      <SvgPage/>
    </div>
  );
}

export default App;
