const services = {
    PagarMe: {
        token : function() {
            return "12345";
        },
        init : function() {
            return {
                token: this.token()
            };
        },
    }
};

export default services;