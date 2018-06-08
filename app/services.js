const axios = require('axios');

const services = {
    PagarMe: {
        API : 'https://api.pagar.me/',
        TOKEN: 'ak_test_SdI4Oxc40Pioxgb9kdJiJrCPjPNyU2',
        request : function(url,method="GET",body={}) {
            let self = this;
            return axios({
                method: method,
                headers: {
                    api_key: self.TOKEN,
                },
                url: self.API+url,
                data: Object.assign({api_key: self.TOKEN}, body)
              }).then(function (response) {
                return response.data;
              }).catch(function (error) {
                return error;
            })
        },
    }
};

export default services;