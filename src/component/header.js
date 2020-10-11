import React from "react"
import ilustration from '../imgs/undraw_developer_activity_bv83 .svg'
import Form from './contact.form'

export default () => (
    <header className="bg-gray-400">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-gray-800 text-5xl"> ¡Hola! soy Gustavo</h1>
                    <p className="text-xl font-light">Desarrollador de Software</p>
                </div>
                <img src={ilustration} alt="Hombre en laptop" style={{height:"250px"}}></img>
            </div>
            <div>
                <Form />
            </div>
        </div>

    </header>
)