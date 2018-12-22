const mysql = require('./../utils/mysqlUtil.js');

var getFoodList = async (userId) => {
    let mysqlOptions = {
        sql : 'select * from food_menu',
        args : [userId]
    };

    var users = await mysql.execQuery(mysqlOptions);
    if(users.length == 0) {
        return null;
    } else {
        return users;
    }
}

module.exports = {
    getFoodList : getFoodList
}