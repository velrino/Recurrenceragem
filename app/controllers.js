import services from './services';

const controllers = {
    project: {
        index : function() {
            return {
                message: 'Recurrenceragem is my personal project for learn more about the wonderful language programming with payment gateway in nodejs.'
            };
        },
    },
    plans: {
        list : function() {
            return services.PagarMe.request('1/plans')
            .then(result => { console.log(result); return result; })
            .catch(error => { console.error(error); throw error; });
        },
        create : function() {

            services.PagarMe.request(
                '1/plans',
                'POST',
                {
                    amount: 150,
                    days: 30,
                    name: 'Plan Teste',
                    payment_methods: ['boleto', 'credit_card']
                }
            )
            .then(result => { console.log(result); return result; })
            .catch(error => { console.error(error); throw error; });
            
            return {
                status: 'created'
            };
        }
    }
};

export default controllers;