function firstToUpper(string) {
    if(typeof string == "string") {
        return string.replace(string.charAt(0), string.charAt(0).toUpperCase())
    }
}

function lastLetter(string) {
    if(typeof string == "string") {
        return string.slice(-1);
    }
}


lastLetter("asdddds")