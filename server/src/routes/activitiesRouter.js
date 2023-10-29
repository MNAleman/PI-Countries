const { Router } = require("express");
const { createActivityHandler  } = require("../handlers/postActivitiesHandler");
const { getActivitiesHandler } = require("../handlers/getActivitiesHandler");
const { updateActivityHandler } = require("../handlers/putActivitiesHandler");
const { deleteActivityHandler } = require("../handlers/deleteActivitiesHandler");

const activitiesRouter = Router();


activitiesRouter.post("/", createActivityHandler );
activitiesRouter.get("/", getActivitiesHandler);
activitiesRouter.put("/:id",updateActivityHandler);
activitiesRouter.delete("/:id", deleteActivityHandler);


module.exports = activitiesRouter;