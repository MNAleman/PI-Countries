const { Router } = require("express");
const { createActivityHandler  } = require("../handlers/postActivitiesHandler");
const { getActivitiesHandler } = require("../handlers/getActivitiesHandler");

const activitiesRouter = Router();


activitiesRouter.post("/", createActivityHandler );
activitiesRouter.get("/", getActivitiesHandler);

//activitiesRouter.put("/")
//activitiesRouter.delete("/")

module.exports = activitiesRouter;