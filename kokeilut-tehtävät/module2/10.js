'use strick';

// silmukka alkaa
// kysyy ehdokkaiden nimiä
// Laita ehdokkaiden nimet ja äänimäärä listaan(ARRAY)
// silmukka loppuu
let candList=[]
        const candNum=prompt('Number of candidates')
        for(let i=1;i<=candNum;i++){
            candList.push({
                name: prompt(`Name for candidate number ${i}`),
                votes: 0
            })
        }
//Kysyy monta äänestäjää on
// silmukka (äänestäjien lkm)
// // Kysyy ketä jokainen äänestää
// // toinen silmukka (ehdokkaat)
// // jos (ääni = ehdokas.name)
// // kasvata ehdokas.vote yhdellä
const voters=prompt('Number of voters')
        let empty=0
        let cand
        let candVote
        for(let i=0;i<voters;i++){
            candVote=prompt('Enter candidate name to vote')
            cand=candList.find(a=>a.name==candVote)
            typeof(cand)==='undefined'?empty++:cand.votes++
        }

candList.sort((a,b)=>b.votes-a.votes)
        let results=`The winner is ${candList[0].name} with ${candList[0].votes} votes\nResults:\n`
        for(let i of candList)results += `${i.name}: ${i.votes}\n`
        console.log(results+=`empty: ${empty}`)



