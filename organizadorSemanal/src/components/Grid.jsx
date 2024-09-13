import { useState } from 'react'

export default function Grid(){

    //Una funcion para llenar las casillas con los horarios de cada comision en cierto semestre

    //Una función para recuperar los valores de cada casilla si se presiona fijar

    //Una función que exporte los valores de las casillas al componente GridStudent

    //



    return<>
    
    <div className='Grid'>
        
        <div className='weekDayColumn' id='monday'>
            <div className='weekDay'>
                Lunes
            </div>
            <div className='subject' id='monday1'>Computación Paralela    12:30 - 23:30
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='monday2'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='monday3'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
                
        </div>
        <div className='weekDayColumn' id='tuesday'>
            <div className='weekDay'>
                Martes
            </div>
            <div className='subject' id='tuesday1'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='tuesday2'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='tuesday3'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
        </div>

        <div className='weekDayColumn' id='wednesday'>
            <div className='weekDay'>
                Miercoles
            </div>
            <div className='subject' id='wednesday1'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='wednesday2'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='wednesday3'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
                
        </div>

        <div className='weekDayColumn' id='thursday'>
            <div className='weekDay'>
                Jueves
            </div>
            <div className='subject' id='thursday1'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='thursday2'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='thursday3'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
               
        </div>

        <div className='weekDayColumn' id='friday'>
            <div className='weekDay'>
                Viernes
            </div>
            <div className='subject' id='friday1'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='friday2'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='friday3'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
               
        </div>

        <div className='weekDayColumn' id='saturday'>
            <div className='weekDay'>
                Sabado
            </div>
            <div className='subject' id='saturday1'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='saturday2'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
            <div className='subject' id='saturday3'>
                <button className='fixButton' type="submit">Fijar</button>
            </div>
        </div>


    </div>

    </>

}