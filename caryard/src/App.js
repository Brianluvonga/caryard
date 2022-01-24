
import './App.css';
import Book_Appointment from './pages/user/Book_Appointment.js'
import Homepage from './pages/homepage/Homepage'
import CarPage from './pages/cars/CarPage'
// import Car_Details from './pages/cars/Car_Details'
import Navigationbar from './components/navigationbar/Navigationbar';


import Footer from './pages/footer/Footer.js'
import Credit_Card from './pages/finances/Credit_Card.js'


function App() {
  return (
    <div className="App">
      <Navigationbar />
      {/* <Homepage /> */}
      {/* <Car_Details /> */}
     <Credit_Card />
      {/* <Book_Appointment />
      <CarPage />   */} 

    </div>
  );
}

export default App;
