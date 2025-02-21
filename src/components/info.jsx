import React from 'react';
import hospedaje from "../assets/hospedaje.png";
import lugaresTuristicos from "../assets/lugaresTuristicos.png";
import restaurantes from "../assets/restaurantes.png";
import '../components/css/info.css';

export const Info = () => {
    return (
        <div className='container-info'>
            <div className='links-info'>
                <a href="https://www.canva.com/design/DAGdVuMnU7c/x4xvInm-QmD5BCKvRF7kfw/view?utm_content=DAGdVuMnU7c&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8c560813e3" target="_blank" rel="noopener noreferrer">
                    <img src={hospedaje} alt="hospedaje" className='img' />
                </a>
                <a href="https://www.google.com/search?q=qu%C3%A9+hacer+en+santa+marta&sca_esv=f986b5c0d721604c&udm=15&biw=1440&bih=730&sxsrf=AHTn8zrIavAx-gmmQDDHCOm09GdcImszJg%3A1740100862120&ei=_tS3Z8-LB9aNwbkPz8zt-A0&oq=Qu%C3%A9+h&gs_lp=EhBnd3Mtd2l6LW1vZGVsZXNzIgZRdcOpIGgqAggAMgoQABiABBhDGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgoQABiABBhDGIoFMgUQABiABDIKEAAYgAQYQxiKBTILEAAYgAQYsQMYyQMyBRAAGIAEMgUQABiABEjZP1AAWLM0cAN4AZABAJgBgAGgAdgGqgEDMC43uAEByAEA-AEBmAIFoAKZBagCAJgDAfEFRdCtYPFTRyqSBwMwLjWgB_El&sclient=gws-wiz-modeless" target="_blank" rel="noopener noreferrer">
                    <img src={lugaresTuristicos} alt="lugaresTuristicos" className='img' />
                </a>
                <a href="https://tuliorecomienda.com/2023/02/19/los-mejores-restaurantes-santa-marta/" target="_blank" rel="noopener noreferrer">
                    <img src={restaurantes} alt="restaurantes" className='img' />
                </a>

            </div>
        </div>
    );
};


