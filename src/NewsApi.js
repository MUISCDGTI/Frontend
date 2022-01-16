class NewsApi {
    static API_BASE_URL = "https://api-fis-josenggn.cloud.okteto.net/api/v1";

    static requestHeaders() {
        return {}
    }

    static async getAllNews () {
        const headers = this.requestHeaders();
        const request = new Request(NewsApi.API_BASE_URL + "/news?apikey=1ad4ca7f-f0bd-4f36-947b-2effe8a07720", {
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


    static createNews (noticia) {
        const headers = this.requestHeaders();
        const request = new Request(NewsApi.API_BASE_URL + "/news", {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(noticia)
        });

        console.log(console.log(JSON.stringify(noticia)));
        
        const response = fetch(request).then(console.log(JSON.stringify(noticia)))
            .catch(err => console.log(err))
            .then(res => res.json())
            .then(thing => console.log(thing));
        
        // if(! response.ok){
        //     throw Error('Respuesta no válida ' + response.status);
        // }
        
        return response;

    }

    static async getHola() {

        console.log("hola HOLA ==================================================")

    }
}

export default NewsApi;