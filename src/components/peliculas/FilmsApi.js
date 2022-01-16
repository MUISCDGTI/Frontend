class FilmsApi {
    static API_BASE_URL = "/api/v1/films";

    static requestHeaders() {
        return {};
    }

    static async getAllFilms() {
        const headers = this.requestHeaders();
        let request = new Request(FilmsApi.API_BASE_URL + "//?apikey=06271241-163c-4b95-bcb3-880be1e0be95", {
            //"", {
            method: 'GET',
            headers: headers
        });
        
        const response = await fetch(request);

        if (! response.ok) {
            throw Error("Response not valid" + response.status);
        }
        return response.json();
    }

    static async postFilm(film) {

        let body = {...film.getFieldsValue()};
        body['released_at']= body['released_at'].toISOString().split('T')[0]

        console.log(JSON.stringify(body));
        
        const request = new Request(FilmsApi.API_BASE_URL + "/?apikey=06271241-163c-4b95-bcb3-880be1e0be95", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(body),
        });

        let response = fetch(request).catch((err) => console.log(err));
        return response.json();
    }
}

export default FilmsApi;