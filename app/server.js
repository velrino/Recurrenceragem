import Hapi from 'hapi';
import routes from './routes';

const server = new Hapi.Server({  
    port: 3000
})

console.log('------------------------------------------------');
routes.forEach( ( route ) => {
    console.log( `Tag: ${ route.options.description } | Method: ${ route.method } , Path : ${ route.path } | Notes: ${ route.options.notes }`  );
    server.route( route );
} );
console.log('------------------------------------------------');

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