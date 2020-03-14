countTotalSum = (array, prop) => {
    let sum = 0;
    array.forEach((elem) => {
        sum += elem[prop];
    });
    return sum;
};

const createStatsArray = (usersArray, usersDataArray) => {
    let statsArray = [];
    usersArray.forEach((user) => {
        let currentUserData = usersDataArray.filter((field) => field.user_id === user.id);
        statsArray.push({
            user_id: user.id,
            first_name: user.first_name,
            last_name: user.last_name,
            email: user.email,
            gender: user.gender,
            ip_address: user.ip_address,
            total_clicks: countTotalSum(currentUserData, 'clicks'),
            total_views: countTotalSum(currentUserData, 'page_views'),
        })
    });
    return statsArray;
};

module.exports = createStatsArray;
