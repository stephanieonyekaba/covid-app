import { FormControl } from '@mui/material';
import './App.css';
import {
  MenuItem,
  Select
} from "@mui/material"

function App() {
  return (
    <div className="app">
<div className="app__header">

     <h1>COVID TRACKER</h1>
     <FormControl className='app__dropdwon'> 
          <Select
            variant="outlined"
            value="abc"
          >
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
