const indexDao = require('./../dao/indexDao.js');

var getFoodList = async (userId) => {
    var users = indexDao.getFoodList(userId);

    return users;
}

module.exports = {
    getFoodList : getFoodList
}