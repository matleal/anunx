import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@mui/styles';
import TemplateDefault from '../../src/templates/Default';
import Button from '@mui/material/Button'
import { Block } from '@material-ui/icons';

const useStyles = makeStyles((appTheme) => ({
  container: {
    padding: appTheme.spacing(8, 0, 6),
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
    </TemplateDefault>
  );
}
