let low = require('lowdb');
let FileSync = require("lowdb/adapters/FileSync");
let adapter = new FileSync("/PROJETCOO/src/database/database.json");
let db = low(adapter);

function pushCharacterInDb(_name : string, _idUser : number, _picture : string, _idCharacter : number){
    db.get("character").push({name : _name,idUser : _idUser, picture:_picture,idCharacter:_idCharacter}).write();
}

function getCharacterInDb(_name : string){
    db.get("character").find({name : _name}).write();
}