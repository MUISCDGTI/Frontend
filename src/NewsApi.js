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

        const response = await fetch(request);

        if(! response.ok){
            throw Error('Respuesta no válida ' + response.status);
        }

        return response.json();
    }
}

export default NewsApi;