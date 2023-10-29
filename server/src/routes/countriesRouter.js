const {Router}=require("express");
const { createCountryHandler } = require("../handlers/postCountryHandler");
const {getCountriesHandler}= require('../handlers/getCountriesHandler');
const { getCountryByIdHandler } = require("../handlers/getCountryByIdHandler");
const { updateCountryHandler } = require("../handlers/putCountryHandler");
const { deleteCountryHandler } = require("../handlers/deleteCountryHandler");


const countriesRouter = Router();

countriesRouter.post("/", createCountryHandler);
countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/:id", getCountryByIdHandler);
countriesRouter.put("/:id", updateCountryHandler);
countriesRouter.delete("/:id", deleteCountryHandler);

module.exports = countriesRouter;