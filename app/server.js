'use strict';

const Hapi=require('hapi');
// const routes=require('./routes');

const server = new Hapi.Server({  
    port: 3000
})

const routes = [
    {
        path: '/birds',
        method: 'GET',
        handler: ( request, reply ) => {
            return "Hello World";
        }
    },
];

routes.forEach( ( route ) => {
    console.log( `Method: ${ route.method } , Path : ${ route.path }` );
    server.route( route );

} );

async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }
    console.log('Running at:', server.info.uri);
};
start();