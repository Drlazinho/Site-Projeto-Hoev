import React from 'react'
import Tilty from 'react-tilty'
import './card.css'

export default function Card() {
    return (
        <div className="sectionCard">


{/* Assistência de Personalidade */}
            <Tilty gyroscope="true" perspective={5000} reset={true} >
                <div className="card personalidade">
                    <div className="card-image">
                        <img />
                    </div>
                    <div className="card-text">
                        <h2 className="titleCard"> Assistência de Personalidade </h2>
                    </div>
                    <div className="contact">
                    </div>
                </div>
            </Tilty>

{/*  Mentoria de matemática e Quimica    */}
            <Tilty gyroscope="true" perspective={5000} reset={true} >
                <div className="card exatas">
                    <div className="card-image">
                        <img />
                    </div>
                    <div className="card-text">
                        <h2 className="titleCard"> Mentoria de Matemática e Química </h2>
                    </div>
                    <div className="contact">
                    </div>
                </div>
            </Tilty>

{/* Atendimento Psicológico */}
            <Tilty gyroscope="true" perspective={5000} reset={true} >
                <div className="card psicologico">
                    <div className="card-image">
                        <img />
                    </div>
                    <div className="card-text">
                        <h2 className="titleCard"> Atendimento Psicológico </h2>
                    </div>
                    <div className="contact">
                    </div>
                </div>
            </Tilty>

{/* Projeto de Desenvolvimento */}
            <Tilty gyroscope="true" perspective={5000} reset={true} >
                <div className="card desenvolvimento">
                    <div className="card-image">
                        <img />
                    </div>
                    <div className="card-text">
                        <h2 className="titleCard"> Projeto de Desenvolvimento </h2>
                    </div>
                    <div className="contact">
                    </div>
                </div>
            </Tilty>

{/* Assistencia enm Relacionamentos */}
            <Tilty gyroscope="true" perspective={5000} reset={true} >
                <div className="card relacionamentos">
                    <div className="card-image ">
                        <img/>
                    </div>
                    <div className="card-text">
                        <h2 className="titleCard"> Assistência em Relacionamentos </h2>
                        <p>------</p>

                    </div>
                    <div className="contact">
                    </div>
                </div>
            </Tilty>

{/* Análise Vocacional */}
            <Tilty gyroscope="true" perspective={5000} reset={true} >
                <div className="card vocacional">
                    <div className="card-image ">
                        <img />
                    </div>
                    <div className="card-text">
                        <h2 className="titleCard"> Análise Vocacioanl </h2>
                    </div>
                    <div className="contact">
                    </div>
                </div>
            </Tilty>

        </div>

    )
}
