import controllers from './controllers';

const routes = [
    {
        path: '/',
        method: 'GET',
        handler: ( request, reply ) => {
            return controllers.teste.init();
        }
    },
];

export default routes;