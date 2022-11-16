'use strict';

const arr=[]
        do {
            var val=parseInt(prompt('Anna numero'))
            arr.unshift(isNaN(val)?0:val)
        } while(!arr.includes(val,1))
        arr.sort((a,b)=>{return b-a})
        alert("Sama numero annettiin kahdesti")
        for(let i of arr.reverse())console.log(i)