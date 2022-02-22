import React from 'react';
import { useState, useEffect } from "react";
import { supabase } from "../../config/supabaseClient";
import { Routes , Route } from "react-router-dom";
import Account from "../Account";
import Navbar from "../Navbar";
import Recordatorios from "../Recordatorios";
import RecordatorioHome from "../RecordatorioHome";
import RecordatoriosAgregar from "../RecordatoriosAgregar";



export default function Rotas({ session }) {
    const [, setLoading] = useState(true);
    const [, setUsername] = useState(null);
    const [, setWebsite] = useState(null);
    const [, setAvatarUrl] = useState(null);
    const [, setTitulo] = useState(null);
    const [, setFechaCreacion] = useState(null);
    const [, setFechaRecordatorio] = useState(null);
    const [, setContenido] = useState(null);
    

    useEffect(() => {
        getAccount();
    }, [session]);

    //Recordatorios

    useEffect(() => {
        getRecordatorios();
    }, [session]);

    async function getAccount() {
        try {
            setLoading(true);
            const user = supabase.auth.user();

            let { data, error, status } = await supabase
                .from("profiles")
                .select(`username, website, avatar_url`)
                .eq("id", user.id)
                .single();

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setUsername(data.username);
                setWebsite(data.website);
                setAvatarUrl(data.avatar_url);
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

    async function getRecordatorios() {
        try {
            setLoading(true);
            const user = supabase.auth.user();

            let { data, error, status } = await supabase
                .from("recordatorio")
                .select(`titulo, fechacreacion, contenido, fecharecordatorio `)
                .eq("id", user.id)
                .single();

            if (error && status !== 406) {
                throw error;
            }

            if (data) {
                setTitulo(data.titulo);
                setFechaCreacion(data.fechacreacion);
                setContenido(data.contenido);
                setFechaRecordatorio(data.fecharecordatorio);
               console.log(data);
            }
        } catch (error) {
            console.log(error);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    }

   

    return (
        
        <div className="form-widget">
         <Navbar/>

           
            <Routes>
                        <Route path='/Account' element={<Account key={session.user.id} session={session}  />}/>
                        <Route path='/Recordatorios' element={<Recordatorios key={session.user.id} session={session}  />}/>
                        <Route path='/RecordatoriosAgregar' element={<RecordatoriosAgregar key={session.user.id} session={session}/>}/>
                        <Route path='/' element={<RecordatorioHome key={session.user.id} session={session}/>}/>
            </Routes>

        </div>
    );
}