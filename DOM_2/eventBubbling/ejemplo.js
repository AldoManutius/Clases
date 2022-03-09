"use strict"

function handleAdClick(){
    window.open("http://google.com")
}

const adCon = document.querySelector("#con")
const adSin = document.querySelector("#sin")

adCon.addEventListener("click", handleAdClick)
adSin.addEventListener("click", handleAdClick)

function handleCloseCon(){
    adCon.remove();
    console.log("cerrado el primer anuncio");}


function handleCloseSin(e){
    e.stopPropagation()
    adSin.remove()
    console.log("cerrado segundo anuncio");
}

const bottonCon = adCon.querySelector("button")
const bottonSin = adSin.querySelector("button")

bottonCon.addEventListener("click", handleCloseCon)
bottonSin.addEventListener("click", handleCloseSin)