import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Card, CardHeader } from '@mui/material';

const ToDoItem = (props) => {

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = props.date.toLocaleDateString('en-US', options)
    const time = props.date.toLocaleTimeString('en-US', { hour12: true });
    
    const cardStyle = {
        display: 'block',
        // width: auto,
        transitionDuration: '0.3s',
        // height: '5vw'
    }

    return (
        <Card style={cardStyle}>
            <CardHeader
                title={props.title}
                subheader={`${date} - ${time}`}/>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.details}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ToDoItem;