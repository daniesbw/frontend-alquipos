import "./MainPage.css"
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Swal from 'sweetalert2'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();
    return (
        <section className="vh-100 gradient-custom">
            <div class="div-cards-main">
                <div class="container-home">
                    <div class="row">
                        <div class="col-md-4 col-xl-3">
                            <div class="card bg-c-blue order-card">
                                <div class="card-block">
                               
                                    <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>Facturación</span> <i class="bi bi-calculator"></i></h2>
                                   
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                            <div class="card bg-c-green order-card">
                                <div class="card-block">
                              
                                    <h2 class="text-right"><i class="fa fa-rocket f-left"></i><span>Cobros</span><i class="bi bi-currency-dollar"></i></h2>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-3"
                            onClick={()=>{
                                navigate("/Inventario");
                            }}
                        >
                            <div class="card bg-c-yellow order-card">
                                <div class="card-block">
                                   
                                    <h2 class="text-right"><i class="fa fa-refresh f-left"></i><span>Inventario </span><i class="bi bi-card-checklist"></i></h2>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                            <div class="card bg-c-pink order-card">
                                <div class="card-block">
                                   
                                    <h2 class="text-right"><i class="fa fa-credit-card f-left"></i><span>Fechas de Entrega</span> <i class="bi bi-calendar-event-fill"></i></h2>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                            <div class="card bg-c-green2 order-card">
                                <div class="card-block">
                                   
                                    <h2 class="text-right"><i class="fa fa-credit-card f-left"></i><span>Base de Datos </span><i class="bi bi-database-fill"></i></h2>
                                    
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                            <div class="card bg-c-violet order-card">
                                <div class="card-block">
                                   
                                    <h2 class="text-right"><i class="fa fa-credit-card f-left"></i><span>Cotizaciones</span> <i class="bi bi-envelope-paper-fill"></i></h2>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default MainPage;