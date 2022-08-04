function shout(string) {
    return string.toUpperCase();
}
shout('Hello');
// First
function whisper(string) {
    return string.toLowerCase();
}
whisper("HELLO");

function logShout(string) {
    console.log(string.toUpperCase());
}
logShout("hello");

function logWhisper(string) {
    console.log(string.toLowerCase());
}
logWhisper("HELLO");

function sayHiToHeadphonedRoommate(string) {
    let isLowerCase = 'hello';
    isLowerCase.toLowerCase();
    let isUpperCase = 'HELLO';
    isUpperCase.toUpperCase();
    if (string === isLowerCase) {

        return "I can't hear you!";
    } else if (string === isUpperCase) {
        return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
        return "I would love to!";
    }
    // else {
    //     return 0;
    // }
}
// console.log(sayHiToHeadphonedRoommate("hello"));
// console.log(sayHiToHeadphonedRoommate("HELLO"));
// console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
sayHiToHeadPhonedRoommate('hello');
sayHiToHeadPhonedRoommate("HELLO");
sayHiToHeadPhonedRoommate("Let's have dinner together!");
