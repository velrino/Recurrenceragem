import controllers from './controllers';

const routes = [
    {
        path: '/',
        method: 'GET',
        handler: ( request, reply ) => {
            return { 
                data: controllers.plans.list()
            };
        }
    },
    {
        path: '/',
        method: 'POST',
        handler: ( request, reply ) => {
            return { 
                data: controllers.plans.create()
            };
        }
    },
];

export default routes;