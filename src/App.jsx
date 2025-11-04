
import { Suspense } from 'react'
import './App.css'
import DaisyNav from './components/DaisyNav/DaisyNav'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksData from './components/MarksData/MarksData'

const pricingPromise= fetch('../public/pricingData.json').then(res=>res.json())
const markPromise = axios.get('marksData.json');
function App() {

  return (
    <>
  
     <header>
      <DaisyNav></DaisyNav>

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <MarksData markPromise={markPromise}></MarksData>
      </Suspense>
      <ResultChart></ResultChart>

  
      
      </header> 

      <main>

      </main>
      


    </>
  )
}

export default App
