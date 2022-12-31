import { FormControl } from '@mui/material';
import './App.css';
import {
  MenuItem,
  Select
} from "@mui/material"
import {useState, useEffect} from "react"
import InfoBox from './InfoBox';


function App() {
//here we are using setState to initialize a list of states.
const [states, setStates] = useState ([])
const [state, setState] = useState('countrywide')
//https://disease.sh/v3/covid-19/states
//in order to make a call to this api we use the useEffect function 
//the use effect hook runs a piece of code based on a given condition 
//this function will run once the app loads. if you put something inside the brackets
//in this case, the function will run each time the app loads and each time the
//state of the state variable is changed (see setState function above)


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

const onStateChange = (event) => {
  const stateCode = event.target.value;

setState(stateCode);

};




  return (
    <div className="app">
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
              <InfoBox title='Covid Cases' total={3000} cases={50}/>
              <InfoBox title='Covid Deaths' total={60} cases={20}/>
              <InfoBox title='Recoveries' total={800} cases={40}/>
  
    {/* INFO BOX 2: COVID DEATHS */}
    {/* INFO BOX 3: ACTIVE CASES */}
          
        </div>



    </div>
  );
}

export default App;
