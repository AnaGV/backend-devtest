module.exports = {

	strcmpi : strcmpi
}

function strcmpi(string1, string2) {
        return (string1 + '').toLowerCase() == (string2 + '').toLowerCase() ;
}