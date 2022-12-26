import { FormControl } from '@mui/material';
import './App.css';
import {
  MenuItem,
  Select
} from "@mui/material"
import {useState, useEffect} from "react"


function App() {
//here we are using setState to initialize a list of states.
const [states, setStates] = useState ([])

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
}, [])






  return (
    <div className="app">
<div className="app__header">

     <h1>COVID TRACKER</h1>
     <FormControl className='app__dropdwon'> 
          <Select
            variant="outlined"
            value="abc"
          >

            {/* HERE WE WANT TO LOOP THROUGH ALL THE STATES AND SHOW A DROP DOWN MENU FOR EACH  */}
          {/* //this is JSX. it essentially allows us to write JS in HTML */}
            {
              states.map(state => (
                <MenuItem value={state.value}>{state.name}</MenuItem>
              ))}
            <MenuItem value="worldwide">OPTION 1 </MenuItem>
            <MenuItem value="worldwide">OPTION 2 cases </MenuItem>
            <MenuItem value="worldwide">OPTION 3 </MenuItem>

          </Select>
      </FormControl>
</div>
    {/* //HEADDER
    //TITLE AND SELECT INPUT DROPDOWN
    
    //INFOBOX
    //INFOBOX

    //TABLE
    //GRAPH
    //MAP */}



    </div>
  );
}

export default App;
