const {Model} = require('objection')
class Channel extends Model{
    static get tableName(){
        return 'channel'
    }
}

module.exports = Channel;