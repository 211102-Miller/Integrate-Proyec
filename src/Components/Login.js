import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from "react";
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";

const theme = createTheme();

export default function SignIn(props) {

    
    const data = useState({
        email: '',
        password: ''
    })

    const url= 'http://54.219.81.144/api/user/login'

    const { handleSubmit, register, formState: { errors } } = useForm();
    

    const onSubmit = value =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": value.email,
            "password": value.password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://54.219.81.144/api/user/login", requestOptions)
            .then(response => response.json())
            .then(result => {
                switch (result.error) {
                    case "Usuario no encontrado":
                        Swal.fire({
                            title: 'Error!',
                            text: 'Usuario no encontrado',
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                        break;
                    case "Usuario no verificado":
                        Swal.fire({
                            title: 'Error!',
                            text: 'Usuario no verificado',
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                        break;
                    case "contraseña no válida":
                        Swal.fire({
                            title: 'Error!',
                            text: 'contraseña no válida',
                            icon: 'error',
                            confirmButtonText: 'Ok'
                        })
                        break;

                    default:
                        
                        break;
                }
            })
            .catch(error => console.error);

    }



    return (

            <ThemeProvider theme={theme} >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h5">DEV-OPS</Typography>
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">Iniciar Sesion</Typography>
                        <Box component="form"  noValidate sx={{ mt: 1 }}  noValidate onSubmit={handleSubmit(onSubmit)}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Correo electronico"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                required {...register("email",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                pattern:{
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalido email"
                                }
                            })}
                            />
                            {errors.email && <span className="text-danger">{errors.email.message}</span>}
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                required {...register("password",{
                                required: {
                                    value: true,
                                    message: "El campo requerido",
                                },
                                minLength:{
                                    value: 8,
                                    message: "La contraseña debe tener minimo 8 caracteres"
                                }
                            })}
                            />
                            {errors.password && <span className="text-danger">{errors.password.message}</span>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/forgot-password" variant="body2">
                                        Olvido su contraseña?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/createsss" variant="body2">
                                        {"No tiene una cuenta? Registrese"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
    );
}