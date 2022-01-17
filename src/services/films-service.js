class FilmsApi {
    static API_BASE_URL = "/api/v1/films";
    static API_KEY = "?apikey=06271241-163c-4b95-bcb3-880be1e0be95";

    static requestHeaders() {
        return {'content-type': 'text/json'};
    }

    static async getAllFilms() {
        const headers = this.requestHeaders();
        const request = new Request(FilmsApi.API_BASE_URL + "/" + FilmsApi.API_KEY, {
            method: 'GET',
            headers: headers
        });
        
        const response = await fetch(request);

        if (! response.ok) {
            throw Error("Response not valid" + response.status);
        }
        return response.json();
    }

    static async getFilm(id) {
        const headers = this.requestHeaders();
        const request = new Request(FilmsApi.API_BASE_URL +"/"+id+"/" + FilmsApi.API_KEY, {
            method: 'GET',
            headers: headers
        });
        
        const response = await fetch(request);
        if (! response.ok) {
            throw Error("Response not valid" + response.status);
        }
        return response.json();
    }


    static updateFilm(film) {;
        let body = {...film.getFieldsValue()};
    
        const request = new Request(FilmsApi.API_BASE_URL + "/"+film._id+"/" + FilmsApi.API_KEY, {
          method: "PUT",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json"
          }
        });
    
        fetch(request)
          .catch((err) => console.log(err))
      }


    static /*async*/ deleteFilm(id) {
        const request = new Request(FilmsApi.API_BASE_URL +"/"+id+"/" + FilmsApi.API_KEY, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
              }
        });
        
        fetch(request).catch((err) => console.log(err))
        //return response.json();
    }


    static /*async */postFilm(film) {

        let body = {...film.getFieldsValue()};
        body['released_at']= body['released_at'].toISOString().split('T')[0]

        console.log(JSON.stringify(body));
        
        const request = new Request(FilmsApi.API_BASE_URL + "/" + FilmsApi.API_KEY, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify(body),
        });

        /*let response = fetch(request).catch((err) => console.log(err));
        return response.json();*/
        fetch(request).catch((err) => console.log(err))
    }
}

export default FilmsApi;