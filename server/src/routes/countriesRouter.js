const {Router}=require("express");
const {getCountriesHandler}= require('../handlers/getCountriesHandler');


const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);
//countriesRouter.get("/:id", getDetailHandler);


module.exports = countriesRouter;