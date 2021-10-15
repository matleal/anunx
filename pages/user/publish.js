import { Container, Typography, Box, TextField, Select, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';

import TemplateDefault from '../../src/templates/Default'


const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8,0,6),
    },
    boxContainer: {
        marginBottom: theme.spacing(3),
    },
    box: {
        backgroundColor: '#E6E6E6',
        padding: theme.spacing(3),
        borderRadius: 10,
        boxShadow: 10,
    },
}));


const Publish = () => {
    const classes = useStyles();

    return(
        <TemplateDefault>
            <Container maxWidth="sm" className={classes.container}>
                <Typography component="h1" variant="h2" align="center">
                    Publicar Anúncio
                </Typography>
                <Typography component="h2" variant="h5" align="center">
                    Quanto mais detalhado, melhor!
                </Typography>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6">
                        Título do Anúncio
                    </Typography>
                    <TextField 
                        label="ex.: Bicicleta Aro 18 com garantia"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <Typography component="h6" variant="h6">
                        Categoria
                    </Typography>
                    <Select
                        native
                        size="small"
                        value=""
                        fullWidth
                        onChange={() => {}}
                        inputProps={{
                            name: 'age',
                        }}
                    >
                        <option value="">Selecione</option>
                        <option value="1">Bebe e criança</option>
                        <option value="2">Agriculta</option>
                        <option value="3">Carro, moto e barcos</option>
                        <option value="3">Serviços</option>
                        <option value="3">Lazer</option>
                        <option value="3">Animais</option>
                        <option value="3">Moveis, casa e jardim</option>
                        <option value="3">Imoveis</option>
                        <option value="3">Equipamentos e Ferramentas</option>
                        <option value="3">Celulares e Tablets</option>
                        <option value="3">Esporte</option>
                        <option value="3">Tecnologia</option>
                        <option value="3">Emprego</option>
                        <option value="3">Outros</option>
                    </Select>

                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6">
                        Título do Anúncio
                    </Typography>
                    <Typography component="div" variant="body2">
                        A primeira imagem é a foto principal do anúncio.
                    </Typography>
                </Box>
            </Container>

            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6">
                        Descrição
                    </Typography>
                    <Typography component="div" variant="body2">
                        Escreva os detalhes do que esta vendendo.
                    </Typography>
                    <TextField 
                        multiline
                        rows={6}
                        variant="outlined"
                        fullWidth
                    />
                </Box>
            </Container>
                        
            <Container maxWidth="md" className={classes.boxContainer}>
                <Box className={classes.box}>
                    <Typography component="h6" variant="h6">
                        Dados de contato
                    </Typography>
                    <TextField 
                        label="Nome"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <TextField 
                        label="E-mail"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                    <br /><br />
                    <TextField 
                        label="Telefone"
                        variant="outlined"
                        size="small"
                        fullWidth
                    />
                </Box>
            </Container>    

            <Container  maxWidth="md" className={classes.boxContainer}>
                <Box textAlign="right">
                    <Button variant="contained" sx={{backgroundColor: '#000000'}}>
                        Publicar Anúncio
                    </Button>
                </Box>           
            </Container>
        </TemplateDefault>
    );
}

export default Publish;