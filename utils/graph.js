const createDataForGraphBuild = (id, data) => {
    return data.filter((field) => field.user_id === +id);
};

module.exports = createDataForGraphBuild;
