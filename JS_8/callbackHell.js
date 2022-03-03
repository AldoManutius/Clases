"use strict";


function por2(num){
    return new Promise((resolve)=> {
        setTimeout(()=>{
            console.log(num);
            resolve(num * 2)
        })
    })
}

por2(4).then(res =>{
    por2(res).then(res =>{
        por2(res).then(res =>{
            por2(res).then(res =>{
                por2(res).then(res =>{ 
                    por2(res).then(res =>{  
                        por2(res).then(res =>{ 
                            por2(res).then(res =>{  
                                por2(res).then(res =>{  
                                    console.log(res);
                                })
                            }) 
                        })
                    }) 
                })
            })
        })
    })
})
