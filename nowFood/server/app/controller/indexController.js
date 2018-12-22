import indexService from '../service/indexService'

var getIndexInfo = async (cxt, next) => {
    let data = await indexService.getFoodList()
    cxt.body = {
        code:0,
        data: data
    }
    next()
}

export default {
    'GET /index': getIndexInfo,
}