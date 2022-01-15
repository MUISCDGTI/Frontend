class FilmsApi {
    static API_BASE_URL = "/api/v1";

    static requestHeaders() {
        return {}
    }

    static async getAllFilms() {
        const headers = this.requestHeaders();
        const request = new Request(FilmsApi.API_BASE_URL + "/films", {
            method: 'GET',
            headers: headers
        });

        const response = await fetch(request);

        if (! response.ok) {
            throw Error("Response not valid" + response.status);
        }

        return response.json();
    }
}

export default FilmsApi;