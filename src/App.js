import { FormControl } from '@mui/material';
import './App.css';
import {
  MenuItem,
  Select
} from "@mui/material"
import {useState, useEffect} from "react"
import InfoBox from './InfoBox';
import Map from './Map.js'
import {Card, CardContent, Typography} from '@mui/material';

function App() {
//here we are using setState to initialize a list of states.
const [states, setStates] = useState ([])
const [state, setState] = useState('countrywide')
const [stateInfo, setStateInfo] = useState({})
//https://disease.sh/v3/covid-19/states
//in order to make a call to this api we use the useEffect function 
//the use effect hook runs a piece of code based on a given condition 
//this function will run once the app loads. if you put something inside the brackets
//in this case, the function will run each time the app loads and each time the
//state of the state variable is changed (see setState function above)

useEffect(() => {
  fetch("https://disease.sh/v3/covid-19/countries/usa")
    .then(response => response.json())
    .then(data => {
      setStateInfo(data)

    })
}, [])


useEffect (() => {
//we use an async function. sends a request waits for esponse.use promise chain to deal with response
  const getStatesData = async () => {
    await fetch ("https://disease.sh/v3/covid-19/states")
    .then((response) => response.json())
    .then((data) => {
      const states = data.map((state) => (
        {
          name: state.state,
        }))
        setStates(states)
    })
  }
  getStatesData();
}, []);

const onStateChange = async (event) => {
  const stateCode = event.target.value;
setState(stateCode);

//we are saying if the statecode is === countrywide we want to use the url for all country covid cases
//otherwise we use the original url for each individual state
const url = stateCode === 'countrywide' ? 'https://disease.sh/v3/covid-19/countries/usa' 
:`https://disease.sh/v3/covid-19/states/${stateCode}`

await fetch(url)
  .then(response =>response.json())
  .then(data => {
        setState(stateCode)
        setStateInfo(data)
  })
};

console.log("THIS IS THE STATE INFO>>>>>>>>>>>>>", stateInfo)




  return (
<div className="app">
  
<div className="app__left">
<div className="app__header">
    {/* THIS IS THE HEADER */}
        <h1>COVID TRACKER</h1>
    {/* THIS IS THE DROP DOWN MENU FOR EACH STATE */}
        <FormControl className='app__dropdwon'> 
              <Select variant="outlined" onChange={onStateChange} value={state}>
              <MenuItem value="countrywide">All of US</MenuItem>

                {/* HERE WE WANT TO LOOP THROUGH ALL THE STATES AND SHOW A DROP DOWN MENU FOR EACH  */}
              {/* //this is JSX. it essentially allows us to write JS in HTML */}
                {states.map(state => (
                    <MenuItem value={state.name}>{state.name}</MenuItem>
                  ))}

              </Select>
          </FormControl>
</div>


{/* THIS IS THE STATES PAGE */}
<div className="app__stats">

      {/* INFO BOX 1: COVID CASES  */}
                <InfoBox title='Covid Cases' cases={stateInfo.cases} total={stateInfo.casesPerOneMillion}/>
      {/* INFO BOX 2: COVID DEATHS */}
                <InfoBox title='Covid Deaths' cases={stateInfo.deaths} total={stateInfo.deathsPerOneMillion}/>
      {/* INFO BOX 3: ACTIVE CASES */}
                <InfoBox title='Recoveries' cases={stateInfo.recovered} total={stateInfo.recovered}/>
       
</div>

  </div>

<Map />
<Card className="app__right">
  <CardContent>
    <h3>Covid Cases by State</h3>
    <h3>Covid Cases Nationwide</h3>

  </CardContent>
    {/* TABLE */}
    {/* GRAPH */}
</Card>

</div>


  );
}

export default App;
