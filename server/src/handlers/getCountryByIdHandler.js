const {getCountriesById} = require('../controllers/getCountriesById');
const getCountryByIdHandler = async (req, res)=>{
    const {id} = req.params;
    try{
        const response = await getCountriesById(id);
        res.status(200).json(response);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}
module.exports = {
    getCountryByIdHandler
}