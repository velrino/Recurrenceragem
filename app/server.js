import Hapi from 'hapi';
import routes from './routes';

const server = new Hapi.Server({  
    port: 3000
})

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