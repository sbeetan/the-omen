import './App.css';
import { useState, forwardRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Chat from './components/Chatter';
import { width } from '@mui/system';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import iPic from '../src/assets/info.png'
import chatPic from '../src/assets/message.png'
import Tooltip from '@mui/material/Tooltip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import Chatter from './components/Chatter';


function App() {

  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  const [age, setAge] = useState('');

  const arr = [1,1,1,1,1,1,2,2,2,2,2,2,1,2,1,2,1,2,1,2,1,1,2,1,2,1,2,1,2];

  const [open, setOpen] = useState(false);
  const [data, setData] = useState("")

  const handleClickOpen = (m) => {
    // alert("clicked"+m)
    setData("abcdvefibuebfvoefewobfv"+m)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };


  return (
    <div className="App">
      <div className='app-layout'>

    {arr.map((m) => {
      if(m === 1){return (<> <div className='input-group'>
      <div className='tool-tip'>
      <Tooltip title="Do you want registration?" placement="top">
        <img src={iPic} alt="" className='i-pic'/>
      </Tooltip>
        <img src={chatPic} alt="" className='chat-pic' onClick={ () => handleClickOpen(m)}/>
      </div>
    <Typography variant="h7" gutterBottom sx={{width: "200px", marginLeft: "0px", marginBottom:"15px"}}>
    Do you want registration? {m}
    </Typography>
    <Select
      labelId="demo-select-small"
      id="demo-select-small"
      value={age}
      label="Age"
     onChange={handleChange}
     sx={{width: "150px", height:"40px", marginBottom:"50px"}}
    >
      <MenuItem value={10}>Yes</MenuItem>
      <MenuItem value={20}>No</MenuItem>
    </Select>
  
    </div>
  
    </>
    )}
    if(m === 2){return (<> <div className='input-group'>
      <div className='tool-tip'>
      <Tooltip title="Do you want registration?" placement="top">
        <img src={iPic} alt="" className='i-pic'/>
      </Tooltip>
        <img src={chatPic} alt="" className='chat-pic' onClick={ () => handleClickOpen(m)}/>
      </div>
    <Typography variant="h7" gutterBottom sx={{width: "200px", marginLeft: "0px", marginBottom:"15px"}}>
    Do you want registration? {m}
    </Typography>
    <TextField id="standard-basic" label="" variant="standard" sx={{width: "200px", marginBottom:"50px"}}/>
  
    </div>
  
    </>
    )}
      
    })}


 
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {data}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
     



     
      {/* <TextField id="standard-basic" label="" variant="standard" sx={{width: "200px", marginLeft: "30px", marginBottom:"50px"}}/> */}

      {/* <Typography variant="h7" gutterBottom sx={{width: "200px", marginLeft: "30px"}}>
      Do you want registration?
      </Typography>
      <TextField id="standard-basic" label="" variant="standard" sx={{width: "200px", marginLeft: "30px", marginBottom:"50px"}}/>

      <Typography variant="h7" gutterBottom sx={{width: "200px", marginLeft: "30px"}}>
      Do you want registration?
      </Typography>
      <TextField id="standard-basic" label="" variant="standard" sx={{width: "200px", marginLeft: "30px", marginBottom:"50px"}}/>

      <Typography variant="h7" gutterBottom sx={{width: "200px", marginLeft: "30px"}}>
      Do you want registration?
      </Typography>
      <TextField id="standard-basic" label="" variant="standard" sx={{width: "200px", marginLeft: "30px", marginBottom:"50px"}}/> */}
      </div>
   
    </div>
  );
}

export default App;
