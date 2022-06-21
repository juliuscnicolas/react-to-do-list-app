import { Grid } from '@mui/material';
import ToDoItem from './ToDoItem';

const ToDos = (props) => {

    const gridItems = [];
    props.items.forEach(data => {
        gridItems.push(
            <Grid item xs={3}>
                <ToDoItem
                    title={data.title}
                    date={data.date}
                    details={data.details}>
                </ToDoItem>
            </Grid>
        )
    })

    return (
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {gridItems}
        </Grid>
    )
}

export default ToDos;