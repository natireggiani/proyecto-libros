import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare} from "react-icons/ai";



export default function Footer() {

    return (  
        <>
        <div className='footer container-fluid'>
            <div className='footer-datos'>
                <p> La Plata</p>
                <p> Buenos Aires</p>
                <p>ediciones.cosmonauta@gmail.com</p>
            </div>
            <div className='footer-redes'>   
                <div>
                    <Link to="//facebook.com/ediciones.cosmonauta/?_rdc=1_rdr" target="blank"><AiFillFacebook className='footer-redes-iconos'/></Link>
                    <Link to="//instagram.com/ediciones.cosmonauta/?hl=es" target="_blank"><AiFillInstagram className='footer-redes-iconos'/></Link>
                    <Link to="//twitter.com/edicionescosmo1?lang=es" target="blank"><AiFillTwitterSquare className='footer-redes-iconos'/></Link>
                </div>       
            </div>
        </div>
        </>
        );
    }
