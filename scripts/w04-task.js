/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Valery Statov',
    photo: 'images/photo.jpg',
    favoriteFoods: ['Pasta', 'Pizza', 'Rice'],
    hobbies: ['Video gaming', 'Memorizing poetry', 'Skiing'],
    placesLived: [],

}



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push({
    place: 'Russia, Moscow',
    length: '16 years'
})

myProfile.placesLived.push({
    place: 'Moldova, Komrat',
    length: '6 years'
})

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(item => {
    let li = document.createElement('li');
    li.textContent = item;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(item => {
    let dt = document.createElement('dt');
    dt.textContent = item.place;

    let dd = document.createElement('dd');
    dd.textContent = item.length;
    
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})
