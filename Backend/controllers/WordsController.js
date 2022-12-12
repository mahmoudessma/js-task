const Testdata = require('../TestData.json');

// make api the return random data
module.exports.getquestions=async(req , res)=>{

    try{
const data = Testdata.wordList
    const random = [...data].sort(()=> 0.5 - Math.random())
    const getrandom = random.slice(0 , 10);

    let noun =0 
    let verb=0
    let adverb=0 
    let adjective =0
        
    for(let i=0 ; i<getrandom.length ; i++)
    {
        if(getrandom[i].pos === "noun")
            noun++;
        else if(getrandom[i].pos === "verb")
            verb++;
        else if(getrandom[i].pos === "adverb")
            adverb++;
        else if(getrandom[i].pos === "adjective")
            adjective++;
    }
    if(noun > 0 && verb >0 && adverb>0 && adjective >0)
    {
            res.json(getrandom)
            console.log (verb , adverb , adjective , noun)
    }
} catch (error) {
    res.status(400);
    throw  new Error(error.message);
}
}
