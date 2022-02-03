exports.seed = async function(knex){
    await knex.raw('TRUNCATE TABLE "user" CASCADE');
    await knex.raw('TRUNCATE TABLE "channel" CASCADE');
    await knex.raw('TRUNCATE TABLE "video" CASCADE');


    // await knex('channel').insert([
    //     {
    //         id:1,
    //         name:"channel1"
    //     },
    //     {
    //         id:2,
    //         name:"channel2"
    //     }
    // ])

    // await knex('user').insert([
    //     {
    //         id:1,
    //         name:"user1",
    //         email:"test@gmail.com",
    //         channelId:"1"
    //     },
    //     {
    //         id:2,
    //         name:"user2",
    //         email:"testa@gmail.com",
    //         channelId:"2"
    //     },
    //     {
    //         id:3,
    //         name:"user3",
    //         email:"testb@gmail.com",
    //     }
    // ])

    // return knex('video').insert([
    //     {
    //         id:1,
    //         title:'ah1',
    //         channelId:1
    //     },
    //     {
    //         id:2,
    //         title:'ah2',
    //         channelId:1
    //     },
    //     {
    //         id:3,
    //         title:'ahhhh',
    //         channelId:2
    //     }
    // ])

}

