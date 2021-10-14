import { makeStyles } from '@mui/styles';
import TemplateDefault from '../../src/templates/Default';
import {
  Typography,
  Container,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from '@mui/material'

import { Block } from '@material-ui/icons';

const useStyles = makeStyles((appTheme) => ({
  container: {
    padding: appTheme.spacing(8, 0, 6),
  },
  cardMedia: {
    paddingTop: '56%',
  },
  buttonAd: {
    margin: '30px auto',
    display: 'block',
    backgroundColor: 'black',
  },
}))


export default function Home() {
  const classes = useStyles();
  
  return (
    <TemplateDefault>
      <Container maxWidth="sm" className={classes.container}>
        <Typography component="h1" variant="h2" align="center">
          Meus Anúncios
        </Typography>
        <Button variant="contained" className={classes.buttonAd}>
          Publicar novo Anúncio
        </Button>
      </Container>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{color:'black'}}>
                  Editar
                </Button>
                <Button size="small" sx={{color:'black'}}>
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{color:'black'}}>
                  Editar
                </Button>
                <Button size="small" sx={{color:'black'}}>
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia 
                className={classes.cardMedia}
                image={'https://source.unsplash.com/random'}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  Produto X
                </Typography>
                <Typography>
                  R$ 60,00
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" sx={{color:'black'}}>
                  Editar
                </Button>
                <Button size="small" sx={{color:'black'}}>
                  Remover
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </TemplateDefault>
  );
}
