const baseMentorUrl = 'http://localhost:5000/'
const baseMenteeUrl = 'http://localhost:5000/'
const baseMeetingUrl = 'http://localhost:5000/'

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
        return fetch(baseAppUrl, {
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