const baseMentorUrl = 'http://localhost:8080/mentors'
const baseMenteeUrl = 'http://localhost:8080/'
const baseMeetingUrl = 'http://localhost:8080/'

class Service {

    // TODO needed?
    getMentor(){
        return fetch(baseMentorUrl).then(res => res.json());
    }

    // delete(baseAppUrl, id) {
    //     return fetch(baseAppUrl, {
    //       method: "DELETE",
    //       headers: {'Content-Type': 'application/json'}
    //     })
    // }
  
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