const routes = [
    {
        path: '/',
        method: 'GET',
        handler: ( request, reply ) => {
            return "Hello World";
        }
    },
];

export default routes;