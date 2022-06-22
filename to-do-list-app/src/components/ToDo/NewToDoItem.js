import { useSelector, useDispatch } from 'react-redux'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import moment from 'moment'
import { useState } from "react";
import { setToDoItemInfo } from '../../redux/actions/users'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Menu = () => {

    const [state, setState] = useState({
        title: '',
        dateTime: moment().format('yyyy-MM-DDThh:mm'),
        details: ''
    });

    const { title, dateTime, details } = state;

    const handleOnChange = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
    }

    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const testItem = [
        {
            id: 'e5',
            title: title,
            date: new Date(dateTime),
            details: details
        }]

    const handleOnClick = () => {
        dispatch(setToDoItemInfo({ items: [...users.info.items, ...testItem] }))
        toast("Successfully Created!");
    }

    const notify = () => toast("Successfully Created!");
    
    // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'), 'abc');
    // console.log(moment().format('yyyy-MM-DD Thh:mm'), 'julius');

    console.log(state, 'state');

    return (

        <Grid container spacing={2} >
            <Grid item xs={12}  >
                <Grid item xs={6}>
                    <Box m={2}>
                        <TextField
                            id="outlined-basic"
                            fullWidth
                            label="Title"
                            variant="outlined"
                            name='title'
                            value={title}
                            onChange={handleOnChange}
                        />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box m={2}>
                        <TextField
                            id="datetime-local"
                            fullWidth
                            label="Date and Time"
                            type="datetime-local"
                            defaultValue={dateTime}
                            value={dateTime}
                            name='dateTime'
                            onChange={handleOnChange}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box m={2}>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Details"
                            name='details'
                            multiline
                            fullWidth
                            maxRows={4}
                            value={details}
                            onChange={handleOnChange}
                        />
                    </Box>
                </Grid>

                <Grid item xs={6}>
                    <Box m={2}>

                        <ToastContainer />
                        <Button
                            variant="contained"
                            onClick={() => handleOnClick()}
                            fullWidth >
                            Create ToDo Item</Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Menu;