const {Model} = require('objection')
class Video extends Model{
    static get tableName(){
        return 'video'
    }
}

module.exports = Video;