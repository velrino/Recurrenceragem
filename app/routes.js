const routes = [

    {

        path: '/birds',
        method: 'GET',
        handler: ( request, reply ) => {
            return "Hello World";
        }

    },
];

export default routes;