
const dict = {};

function dictionarySetup(mentorArray){
    for (let i=0; i<mentorArray.length; i++){
        dict[mentorArray[i]] = 0
        }
    }

function locationScore(mentee, mentorArray, locationWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        if (mentorArray[i].location == mentee.location){
            dict[mentorArray[i]] += locationWeighting
        }
    }
}

function teachingScore(mentee, mentorArray, teachingWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        if (mentorArray[i].teachingLevel.includes(mentee.englishLevel)){
            dict[mentorArray[i]] += teachingWeighting
        }
    }
}

function languagesScore(mentee, mentorArray, languagesWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        for (let j=0; j<mentee.languagesSpoken.length; j++ ){
            if (mentorArray[i].languagesSpoken.includes(mentee.languagesSpoken[j])){
                dict[mentorArray[i]] += languagesWeighting
            }
        }
    }
}

function genderScore(mentee, mentorArray, genderWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        if (mentorArray[i].gender === mentee.genderPref || mentee.genderPref === "No preference"){
            dict[mentorArray[i]] += genderWeighting
        }
    }
}

function availabilityScore(mentee, mentorArray, availabilityWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        for (let j=0; j<mentee.availability.length; j++ ){
            if (mentorArray[i].availability.includes(mentee.availability[j])){
                dict[mentorArray[i]] += availabilityWeighting
            }
        }
    }
}

export function getTotalScores(mentee, mentorArray, locationWeighting, teachingWeighting, languagesWeighting, genderWeighting, availabilityWeighting){

dictionarySetup(mentorArray);
locationScore(mentee, mentorArray, locationWeighting);
teachingScore(mentee, mentorArray, teachingWeighting);
languagesScore(mentee, mentorArray, languagesWeighting);
genderScore(mentee, mentorArray, genderWeighting);
availabilityScore(mentee, mentorArray, availabilityWeighting);
}

export default getTotalScores;
