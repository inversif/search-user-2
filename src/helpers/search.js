function searchKeyword(object, query) {
    console.log(object, query);
    var res = object.filter((obj) => {
        var fullname = obj.name.first + " " + obj.name.last;
        if(obj.login.username.includes(query)
            || fullname.includes(query)
            || obj.email.includes(query)
            || obj.registered.date.includes(query)) {
            return obj;
        }
        return null;
    });

    return res;
}

function searchGender(object, g) {
    console.log(object, g);
    return object.filter((obj) => {
        if(obj.gender === "male") return obj;
        else return null;
    });
}

// var f = [searchKeyword, searchGender];

export {searchKeyword, searchGender};