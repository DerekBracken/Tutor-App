
const dict = {};
let arr = [];
let sortedArr = [];

function dictionarySetup(mentorArray){
    for (let i=0; i<mentorArray.length; i++){
        dict[mentorArray[i].id] = 0
        }
    }

function locationScore(mentee, mentorArray, locationWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        if (mentorArray[i].location == mentee.location){
            dict[mentorArray[i].id] += locationWeighting
        }
    }
}

function teachingScore(mentee, mentorArray, teachingWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        if (mentorArray[i].teachingLevel.includes(mentee.englishLevel)){
            dict[mentorArray[i].id] += teachingWeighting
        }
    }
}

function languagesScore(mentee, mentorArray, languagesWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        for (let j=0; j<mentee.languagesSpoken.length; j++ ){
            if (mentorArray[i].languagesSpoken.includes(mentee.languagesSpoken[j])){
                dict[mentorArray[i].id] += languagesWeighting
            }
        }
    }
}
// gender pref will not work yet as we don't have the form working yet...
function genderScore(mentee, mentorArray, genderWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        if (mentorArray[i].gender === mentee.genderPref || mentee.genderPref === "No preference"){
            dict[mentorArray[i].id] += genderWeighting
        }
    }
}

function availabilityScore(mentee, mentorArray, availabilityWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        for (let j=0; j<mentee.availability.length; j++ ){
            if (mentorArray[i].availability.includes(mentee.availability[j])){
                dict[mentorArray[i].id] += availabilityWeighting
            }
        }
    }
}

function convertToArray(dict){
    arr = Object.entries(dict)
}

function sortArray(arr){
    sortedArr = arr.sort((a,b)=>b[1]-a[1])
}

function obtainObjectsFromSortedArray(sortedArr){
    return sortedArr.map(element=>element[0])
}

// let map1 = []
// for (let i=0; i<array1.length; i++){
//            map1.push(array1[i][1])
//                   }

export function getTotalScores(mentee, mentorArray, locationWeighting, teachingWeighting, languagesWeighting, genderWeighting, availabilityWeighting){
dictionarySetup(mentorArray);
locationScore(mentee, mentorArray, locationWeighting);
teachingScore(mentee, mentorArray, teachingWeighting);
languagesScore(mentee, mentorArray, languagesWeighting);
genderScore(mentee, mentorArray, genderWeighting);
availabilityScore(mentee, mentorArray, availabilityWeighting);
convertToArray(dict);
sortArray(arr);
obtainObjectsFromSortedArray(sortedArr)
console.log(sortedArr)
}

export default getTotalScores;
