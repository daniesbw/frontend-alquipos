import React, { useEffect, useState } from "react";
import "./Inventario.css";
import Axios from "axios";
import ReactLoading from 'react-loading';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';



function Inventario() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [modalAgregar, setModalAgregar] = useState(false);
    const [nuevoNombre, setNuevoNombre] = useState('');
    const [nuevoInventario, setNuevoInventario] = useState('');

    useEffect(() => {
        /*
        setLoading(true);
        try {
            Axios.get("https://backend-alquipos-production.up.railway.app/api/productos/getProductos").then((response) => {
                setData(response.data);
            }).finally(() => {
                setLoading(false);
                console.log(JSON.stringify(data))
            });

        } catch (error) {
            console.error("Error fetching data:", error);
        }*/

        setData([{ "idProducto": 1, "NombreProducto": "manzanas", "Inventario": 50 }]);
        setLoading(false);


    }, []);


    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleToggleModal = (itemId) => {
        setSelectedItemId(itemId);

    };

    const handleDownload = () => {
        const csvData = Papa.unparse(data);
        const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });
        saveAs(blob, `reporte.csv`);
    };

    const handleInputChange = () => {
        if (nuevoInventario === "" && nuevoNombre !== "") {
            setData((prevItems) =>
                prevItems.map((item) =>
                    item.idProducto === selectedItemId ? { ...item, NombreProducto: nuevoNombre } : item
                )
            );
        } else if (nuevoNombre === "" && nuevoInventario !== "") {
            setData((prevItems) =>
                prevItems.map((item) =>
                    item.idProducto === selectedItemId ? { ...item, Inventario: nuevoInventario } : item
                )
            );
        }

        setSelectedItemId(null);
        setNuevoInventario("");
        setNuevoNombre("");
    };

    const handleModalClose = () => {


        setSelectedItemId(null);
        setModalAgregar(false);
        setNuevoInventario("");
        setNuevoNombre("");
    };


    const crearProducto = () => {
        window.location.reload(true)

        setModalAgregar(false)
        setNuevoInventario("");
        setNuevoNombre("");
    }

    if (loading) {

        return (
            <div className="div-principal-inventario">
                <ReactLoading type="spin" color="#fff" height={'10%'} width={'10%'} />
            </div>
        );

    } else {
        return (
            <div className="div-principal-inventario">
                <div class="div-container-inventario">
                    <h1 className="titulo-inventario">Inventario</h1>
                    <div class="table-wrapper-scroll-y  my-custom-scrollbar">
                        <table class="table table-hover table-striped mb-0">

                            <thead class="table-dark cabezera-tabla-inventario">
                                <tr>
                                    <th scope="col">Código</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Inventario</th>

                                </tr>
                            </thead>
                            <tbody >
                                {/* Renderizar lo que hay en la base de datos */}
                                {data.map((data) => {
                                    return (
                                        <tr className="row-inventario"
                                            key={data.idProducto} onClick={() => handleToggleModal(data.idProducto)}>

                                            <th scope="row">{data.idProducto}</th>
                                            <td>{data.NombreProducto}</td>
                                            <td>{data.Inventario}</td>

                                        </tr>
                                    )

                                }
                                )}
                            </tbody>
                        </table>
                        {selectedItemId && (
                            <div className="modal">

                                <div className="modal-content">
                                    <div class="flex-column d-flex align-items-end">
                                        <button type="button" class="btn-close d-flex justify-content-end " aria-label="Close" onClick={handleModalClose}>

                                        </button>
                                    </div>

                                    <form>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">Nombre del Producto</label>
                                            <input type="text" class="form-control" id="formGroupExampleInput"
                                                onChange={(e) => {
                                                    setNuevoNombre(e.target.value)
                                                }}
                                                placeholder={(data.find(obj => obj.idProducto === selectedItemId) || {}).NombreProducto || null} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="formGroupExampleInput2">Inventario</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="formGroupExampleInput2"
                                                onChange={(e) => {
                                                    setNuevoInventario(e.target.value);
                                                }}
                                                placeholder={(data.find((obj) => obj.idProducto === selectedItemId) || {}).Inventario || null}
                                            />


                                        </div>

                                    </form>
                                    <button class="btn btn-primary" onClick={handleInputChange}>Cambiar Informacion</button>
                                </div>
                            </div>
                        )}


                    </div>

                    <button type="button" class="btn btn-primary btn-lg boton-inventario1" onClick={() => {
                        setModalAgregar(true)
                    }}>Agregar Producto</button>

                    {modalAgregar && (
                        <div className="modal">
                            <div className="modal-content">
                                <div class="flex-column d-flex align-items-end">
                                    <button type="button" class="btn-close d-flex justify-content-end " aria-label="Close" onClick={handleModalClose}>

                                    </button>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label for="formGroupExampleInput">Nombre del Producto</label>
                                        <input type="text" class="form-control" id="formGroupExampleInput"
                                            onChange={(e) => {
                                                setNuevoNombre(e.target.value)
                                            }}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="formGroupExampleInput2">Inventario</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="formGroupExampleInput2"
                                            onChange={(e) => {
                                                setNuevoInventario(e.target.value);
                                            }}

                                        />


                                    </div>

                                </form>
                                <button class="btn btn-primary" onClick={crearProducto}>Agregar Producto</button>
                            </div>
                        </div>
                    )}
                    <button type="button" class="btn btn-secondary btn-lg boton-inventario"
                        onClick={handleDownload}
                    >Reporte</button>
                </div>

            </div>
        );
    }

}

export default Inventario;      