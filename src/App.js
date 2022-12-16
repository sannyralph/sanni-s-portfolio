import './App.css';
import MyportfolioDetails from './components/MyPortfolioDetails';
import MyHomePage from './components/MyHomePage';
import MyAboutPage from './components/MyAboutPage';
import ResumePage from './components/ResumePage';
import MyServicePage from './components/MyServicePage';
import MyContactPage from './components/MyContactPage';



function App() {
  return (
    <body className="App">
      <MyportfolioDetails/>
      <MyHomePage/>
      <MyAboutPage/>
      <ResumePage/>
      <MyServicePage/>
      <MyContactPage/>
    </body>
  );
}

export default App;
