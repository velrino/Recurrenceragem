import services from './services';

const controllers = {
    teste: {
        init : function() {
            return {
                info: services.PagarMe.init()
            };
        }
    }
};

export default controllers;