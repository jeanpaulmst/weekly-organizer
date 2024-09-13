const express = require('express');
const axios = require('axios');
const puppeteer = require('puppeteer');

const url = 'http://encuesta.frm.utn.edu.ar/horariocurso/';

const app = express();
const PORT = 3000;


//---Meterse desde la especialidad de sistemas---
async function openWebPage() {
    
    const browser = await puppeteer.launch({ headless: false }); 
    const page = await browser.newPage();
  
    await page.goto('http://encuesta.frm.utn.edu.ar/horariocurso/'); 
  
    await page.select('select#especialidad', '5'); //"especialidad es el id del select y "5" es el valor de la especialidad sistemas
  
    await page.waitForNavigation();     //Espera a que navegue a la pagina siguiente


    const newPageContent = await page.content();

    await newPageContent.waitForTimeout(3000);      //Espera un tiempo para mostrar el contenido
  
    //PROXIMO POR HACER -- Meterse en el 4to td de cada lista, eso indica la comision
    //Por cada vez que aparece la comisión se debe filtrar por plan 2023, recuperar el nombre de la materia, los dias
    //de cursado, y por cada día de cursado se debe recuperar el horario

    
    await browser.close();      //cerrar navegador
}
openWebPage();


//---Crear un arreglo que guarde objetos que contengan la información de cada materia: nombre,horario---

//---Traerse de alguna manera todos los horarios de una comisión especifica e ir generando los objetos---

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
