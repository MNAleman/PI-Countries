const getActivitiesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        if(name){
            const ActivityByName = await getActivitiesByName(name);
            res.status(200).json(ActivityByName);
        }else{
            const allActivities = await getAllActivities();
            res.status(200).json(allActivities);
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports ={
    getActivitiesHandler
}