import { useState } from 'react'

const StatisticsLine = ({text, value})=>{
  return(
    <tr>
      <td style={{ paddingRight: '20px' }}>{text}</td>
      <td>{value}</td>
    </tr>
  )
}
const Button =({func, text})=>{
  return(
    <button onClick={func}>{text}</button>
  )
}
const Statistics = (props) =>{
  const totalStatistics = (props.bad + props.neutral + props. good)
  const puntuacion=((props.bad * -1)+(props.neutral*0)+(props.good*1))/totalStatistics
  const porcentajePositive = (props.good)/totalStatistics
  if( totalStatistics ==0){
    return(
      <p>estadisticas no disponibles</p>
    )
  }
  return(
    <div>
      <StatisticsLine text= "bad" value ={props.bad}/>
      <StatisticsLine text= "neutral" value ={props.neutral}/>
      <StatisticsLine text= "good" value ={props.good}/>
      <StatisticsLine text= "average" value ={puntuacion}/>
      <StatisticsLine text= "positive" value ={porcentajePositive}/>
    </div>
  )
}
const App = () => {
  // guarda los clics de cada botón en su propio estado

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickgood=()=>{
    setGood(good+1)
  }
  const clickNeutral =()=>{
    setNeutral(neutral+1)
  }
  const clickBad=()=>{
    setBad(bad+1)
  }
  
  return (
    <div>
      <h1>give Feedback</h1>
      <Button func={clickBad} text={"Bad"}/>
      <Button func={clickNeutral} text={"Neutral"}/>
      <Button func={clickgood} text={"Good"}/>

      <h1>Statistics</h1>
      <Statistics bad={bad} neutral ={neutral} good= {good}></Statistics>
    </div>
  )
}

export default App