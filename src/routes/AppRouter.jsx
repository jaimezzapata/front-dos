import ConsumoAPI from "../pages/ConsumoAPI";
import Contexto from "../pages/Contexto";
import HooksBasicos from "../pages/HooksBasicos";
import Introduccion from "../pages/Introduccion";
import JSXProps from "../pages/JSXProps";
import Login from "../pages/Login";
import ProyectoIntegrador from "../pages/ProyectoIntegrador";
import PruebasUnitarias from "../pages/PruebasUnitarias";
import React from "../pages/React";
import Rutas from "../pages/Rutas";
import SPA from "../pages/SPA";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "../pages/Dashboard";

export let enrutadorApp = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/home/",
        element: <ProtectedRoute proteger={<Dashboard />} />,
        children: [
            {
                path: "consumo-api",
                element: <ConsumoAPI />
            },
            {
                path: "contexto",
                element: <Contexto />
            },
            {
                path: "hooks-basicos",
                element: <HooksBasicos />
            },
            {
                path: "introduccion",
                element: <Introduccion />
            },
            {
                path: "jsx-props",
                element: <JSXProps />
            },
            {
                path: "proyecto-integrador",
                element: <ProyectoIntegrador />
            },
            {
                path: "pruebas-unitarias",
                element: <PruebasUnitarias />
            },
            {
                path: "react",
                element: <React />
            },
            {
                path: "rutas",
                element: <Rutas />
            },
            {
                path: "spa",
                element: <SPA />
            }
        ]
    }
]