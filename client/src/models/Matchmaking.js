const dict = {};
let nestedArray = [];
let sortedNestedArr = [];
let finalArr = [];

function dictionarySetup(mentorArray){
    for (let i=0; i<mentorArray.length; i++){
        dict[mentorArray[i].id] = 0
        }
    }

    // start of the matching logic
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

function availabilityScore(mentee, mentorArray, availabilityWeighting){
    for (let i=0; i<mentorArray.length; i++ ){
        for (let j=0; j<mentee.availability.length; j++ ){
            if (mentorArray[i].availability.includes(mentee.availability[j])){
                dict[mentorArray[i].id] += availabilityWeighting
            }
        }
    }
}
// end of logic
// converts the dictionary to an array of arrays, index 0 is id, index 1 is the compatibility score.
function convertToArray(dict){
    nestedArray = Object.entries(dict)
}

// sorts the array by the first index
function sortArray(unsortedArray){
    sortedNestedArr = unsortedArray.sort((a,b)=>b[1]-a[1])
}

function obtainObjectsFromSortedArray(sortedNestedArr){
    finalArr = sortedNestedArr.map(element=>element[0])
}

function sortedAllMentors(array){
    let final = [];
    for (let i=0; i<array.length; i++){
        final.push(array[i]);
    }
    return final;
}
function newSortedMentorsArray(mentorArray, sortedArrayId){
    let sortedMentors = [];
    for (let i = 0; i < mentorArray.length; i++){
        for (let j = 0; j < mentorArray.length; j++){
            if (mentorArray[j].id == sortedArrayId[i]){
                sortedMentors.push(mentorArray[j])
            }
        }
    }
    return sortedMentors
}

// Below function takes all the parameters above plus the users weighting from the signup form and returns a sorted array of mentor objects from most preferred to least preferred.
export function getTotalScores(mentee, mentorArray, locationWeighting, teachingWeighting, languagesWeighting, genderWeighting, availabilityWeighting){
    dictionarySetup(mentorArray);
    locationScore(mentee, mentorArray, locationWeighting);
    teachingScore(mentee, mentorArray, teachingWeighting);
    languagesScore(mentee, mentorArray, languagesWeighting);
    availabilityScore(mentee, mentorArray, availabilityWeighting);
    convertToArray(dict);
    sortArray(nestedArray);
    obtainObjectsFromSortedArray(sortedNestedArr);
    return newSortedMentorsArray(mentorArray, sortedAllMentors(finalArr));
}

export default getTotalScores;
