import React from 'react';
// Matieral UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//////////////////////

const useStyles = makeStyles({
    card: {
      width: 325,
      margin: 15,
    },
    media: {
      height: 180
    },
  });


const Cards = props =>{
    const classes = useStyles();

    return (
        <>
        <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title="user image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.user}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           
            
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          {props.link}
        </Button>
      </CardActions>
    </Card>
            {/* <div className='card'>
                <img src={props.image} alt='user profile pic' />
                <div className='card-text'>
                    <h2>{props.user}</h2>
                    <a href={props.link}>{props.link}</a>

                </div>
            </div> */}
        </>
    );
}

export default Cards;

