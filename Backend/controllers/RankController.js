const Testdata = require('../TestData.json');

// make the api the calculate the rank
module.exports.getrank=async(req , res)=>{
    try {
        let count=0;
    const scoree = req.params.scoree
    const score = Testdata.scoresList.map(a=> {
        if(scoree >a)
            count ++
    });
    const rank =( count *100 )/ score.length
    res.json(rank)
   
        
    } catch (error) {
        res.status(400);
        throw  new Error(error.message);
    }
    
}