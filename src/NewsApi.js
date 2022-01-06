class NewsApi {
    static API_BASE_URL = "/api/v1";

    static requestHeaders() {
        return {}
    }

    static async getAllNews () {
        const headers = this.requestHeaders();
        const request = new Request(NewsApi.API_BASE_URL + "/news", {
            method: 'GET',
            headers: headers
        });

    /* CLASSES
            return fetch(request).then(response => {
                return response.json();
            });
    */
        
        const response = await fetch(request);
        
        if(! response.ok){
            throw Error('Respuesta no válida ' + response.status);
        }
        
        return response.json();

    }


    static async createNews (noticia) {
        const headers = this.requestHeaders();
        const request = new Request(NewsApi.API_BASE_URL + "/news", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(noticia)
        });

        console.log(console.log(JSON.stringify(noticia)));
        
        const response = await fetch(request);
        
        if(! response.ok){
            throw Error('Respuesta no válida ' + response.status);
        }
        
        return response.json();

    }

    static async getHola() {

        console.log("hola HOLA ==================================================")

    }
}

export default NewsApi;