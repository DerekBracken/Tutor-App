const baseMentorUrl = 'http://localhost:8080/mentors'
const baseMenteeUrl = 'http://localhost:8080/'
const baseMeetingUrl = 'http://localhost:8080/'

class Service {

    getMentor(){
        return fetch(baseMentorUrl).then(res => res.json());
    }

    // delete(baseAppUrl, id) {
    //     return fetch(baseAppUrl, {
    //       method: "DELETE",
    //       headers: {'Content-Type': 'application/json'}
    //     })
    // }
  
    postMentor(baseMentorUrl, payload){
        return fetch(baseMentorUrl, {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        })
    }
      
    // patch(baseAppUrl, payload){
    //     return fetch(baseAppUrl, {
    //       method: "PATCH",
    //       headers: {'Content-Type': 'application/json'},
    //       body: JSON.stringify(payload)
    //     })
    // }

}

export default Service;