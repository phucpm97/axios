function Services() {
    this.fetchData = function() {
        return axios({
            url: "https://6256e8756ea703700541c7c3.mockapi.io/api/DSGV",
            method: "GET",
        });

    };
    this.deleteProduct = function(id) {
        return axios({
            // url: "https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/products/" + id,
            url: `https://6256e8756ea703700541c7c3.mockapi.io/api/DSGV/${id}`,
            method: "DELETE",
        })
    };
    this.addProductApi = function(product) {
        return axios({
            url: "https://6256e8756ea703700541c7c3.mockapi.io/api/DSGV",
            method: "POST",
            data: product,
        })
    };


    this.getProductById = function(id) {
        return axios({
            url: `https://6256e8756ea703700541c7c3.mockapi.io/api/DSGV/${id}`,
            method: "GET",
        })
    };
    this.UpdateProductById = function(product) {
        return axios({
            url: `https://6256e8756ea703700541c7c3.mockapi.io/api/DSGV/${product.id}`,
            method: "PUT",
            data: product,
        })
    };

}
// cua mk
// https://6256e8756ea703700541c7c3.mockapi.io/api/products

// cua GV
// https://5a6451dcf2bae00012ca1a6a.mockapi.io/api/products