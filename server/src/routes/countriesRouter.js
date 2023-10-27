const {Router}=require("express");
const {getCountriesHandler}= require('../handlers/getCountriesHandler');
const { getCountryByIdHandler } = require("../handlers/getCountryByIdHandler");


const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/:id", getCountryByIdHandler);
//countriesRouter.get("/:name", getCountriesByName)


module.exports = countriesRouter;