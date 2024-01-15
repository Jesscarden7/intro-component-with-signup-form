import './App.css'
import Description from './components/description/Description';
import PriceTag from './components/priceTag/PriceTag';
import Form from './components/form/Form';

function App() {

  return (
    <div className='MainWrapper'>
      <Description/>
      <div className='RightWrapper'>
        <PriceTag/>
        <Form/>
      </div>
    </div>
  )
}

export default App
