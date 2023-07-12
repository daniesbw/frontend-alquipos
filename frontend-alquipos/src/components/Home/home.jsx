import "./home.css"
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";


function Home() {
    const [data, setData] = useState([]);
    const [email, setEmail] = useState("");
    const [password1, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e) =>  {
        e.preventDefault();
        if (
            data.find((item) => item.correo == email) &&
            data.find((item) => item.correo == email).password == password1
        ) {
            await Swal.fire({
                title: '¡Éxito!',
                text: 'Los datos se han ingresado correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
              });
            

            setEmail("");
            setPassword("");
              navigate("/Main")
        }else{
            await Swal.fire({
                title: 'Error!',
                text: 'Los datos ingresados son incorrectos',
                icon: 'error',
                confirmButtonText: 'Entendido'
              })
        }

    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Axios.get("https://backend-alquipos-production.up.railway.app/api/usuarios/");
                setData(response.data);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();


    }, []);





    return (

        <section className="vh-100 gradient-custom">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white " style={{ borderRadius: '1rem' }}>
                            <div className="card-body p-5 text-center mt-0">

                                <div className="">

                                    <h2 className="fw-bold mb-2 text-uppercase">Iniciar Sesión</h2>
                                    <p className="text-white-50 mb-5">Por favor ingresa tu correo y contraseña</p>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="email"
                                                id="typeEmailX"
                                                className="form-control form-control-lg"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                autoComplete="off"
                                            />
                                            <label className="form-label" htmlFor="typeEmailX">Correo</label>
                                        </div>

                                        <div className="form-outline form-white mb-4">
                                            <input
                                                type="password"
                                                id="typePasswordX"
                                                className="form-control form-control-lg"
                                                value={password1}
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="off"
                                            />
                                            <label className="form-label" htmlFor="typePasswordX">Contraseña</label>
                                        </div>

                                        <button className="btn btn-outline-light btn-lg px-5" type="submit">Iniciar Sesión</button>


                                    </form>
                                </div>



                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}
export default Home