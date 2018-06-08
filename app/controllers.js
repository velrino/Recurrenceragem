import services from './services';

const controllers = {
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