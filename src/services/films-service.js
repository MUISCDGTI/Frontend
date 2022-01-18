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

        return fetch(request).catch((err) => console.log(err));
    }

    static async postSuscription(film_id) {

        console.log("id recibida en el postSuscription del servicio: "+film_id);

        // post al microservicio suscriptions
        let url = "/api/v1/notifications?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Impvc2UiLCJpYXQiOjE2NDI0MTc3MDZ9.27_J8BZ0ngW3vD7TOaV8cRZol4t8E01-rCWwnhZT-ZI";
        const request = new Request(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
              },
            body: {
                "category" : "Pelicula",
                "referenceId": film_id
            },
            json: true
        });

        return fetch(request).catch((err) => console.log(err));
        
    }
}

export default FilmsApi;