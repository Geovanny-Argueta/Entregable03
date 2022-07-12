import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from '../Components/Header'
import RicksItems from '../Components/RicksItems'
import './App.css'
import bgImage from './video/video.mp4'

function App() {

  const[ricks, setRick] = useState({})
  const[input, setInput] = useState("")
  const[info, setInfo]= useState("")

  useEffect(()=>{
    let random = Math.floor(Math.random() * 126)+1
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then(res=> setRick(res.data))
  },[])

  const searchCharacter = () =>{
    axios.get(`https://rickandmortyapi.com/api/location/${input}`)
    .then(res=> setRick(res.data))
  }



  console.log(ricks);

  return (
    
    <div className="App">
      
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video>
      <Header input={input} searchCharacter={searchCharacter} rick={ricks} setInput={setInput}/>

      <input className='valueInput' type="text" value={ricks.type} / >
      <input  className='valueInput' type="text" value={ricks.dimension} />
      <input  className='valueInput' type="text" value={ricks.created} />
      
      
      <ul>
        {
          ricks.residents?.map(rick =>(
           <RicksItems rick={rick} key={rick}/>
          ))
        }
      </ul>
    </div>
  )
}

export default App
