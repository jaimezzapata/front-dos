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
import Home from "../pages/Home";

export let enrutadorApp = [
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/home",
        element: <ProtectedRoute proteger={<Home />} />
    },
    {
        path: "/consumo-api",
        element: <ProtectedRoute proteger={<ConsumoAPI />} />
    },
    {
        path: "/contexto",
        element: <ProtectedRoute proteger={<Contexto />} />
    },
    {
        path: "/hooks-basicos",
        element: <ProtectedRoute proteger={<HooksBasicos />} />
    },
    {
        path: "/introduccion",
        element: <ProtectedRoute proteger={<Introduccion />} />
    },
    {
        path: "/jsx-props",
        element: <ProtectedRoute proteger={<JSXProps />} />
    },
    {
        path: "/proyecto-integrador",
        element: <ProtectedRoute proteger={<ProyectoIntegrador />} />
    },
    {
        path: "/pruebas-unitarias",
        element: <ProtectedRoute proteger={<PruebasUnitarias />} />
    },
    {
        path: "/react",
        element: <ProtectedRoute proteger={<React />} />
    },
    {
        path: "/rutas",
        element: <ProtectedRoute proteger={<Rutas />} />
    },
    {
        path: "/spa",
        element: <ProtectedRoute proteger={<SPA />} />
    },
    {
        path: "/dashboard",
        element: <ProtectedRoute proteger={<Dashboard />} />
    }
];
