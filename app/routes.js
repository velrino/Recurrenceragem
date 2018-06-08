import controllers from './controllers';

const routes = [
    {
        path: '/',
        method: 'GET',
        handler: (request,reply) => {
            return { 
                data: controllers.project.index()
            };
        },
        options: {
            description: 'ABOUT',
            notes: 'About this project',
        }
    },
    {
        path: '/plans',
        method: 'GET',
        handler: (request,reply) => {
            return { 
                data: controllers.plans.list()
            };
        },
        options: {
            description: 'PLANS',
            notes: 'List plans',
        }
    },
    {
        path: '/plans',
        method: 'POST',
        handler: (request,reply) => {
            return { 
                data: controllers.plans.create()
            };
        },
        options: {
            description: 'PLANS',
            notes: 'Create plan',
        }
    },
];

export default routes;