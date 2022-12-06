import './App.css';
import Card from './Components/Card';
import Titulo from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Titulo Titulo="Galeria de imágenes con React"/>
      <Card source={require('./assets/img/dalmatan.jpeg')} nombre="Dalmatan" descripcion="Perro tamaño grande."/>
      <Card source={require('./assets/img/pastor.jpeg')} nombre="Pastor Alemán" descripcion="Perro grande, muy buen guardián."/>
      <Card source={require('./assets/img/labrador.jpeg')} nombre="Labrador" descripcion="Perro tamaño grande, muy buen compañero."/>
      <Footer/>
    </div>
  );
}

export default App;
