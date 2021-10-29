const baseMentorUrl = 'http://localhost:8080/mentors'

class Service {

    getMentor(){
      return fetch(baseMentorUrl).then(res => res.json());
    }
  
    post(baseMentorUrl, payload){
        return fetch(baseMentorUrl, {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        })
    }
      
    put(baseAppUrl, payload){
        return fetch(baseAppUrl, {
          method: "PUT",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        })
    }
}

export default Service;