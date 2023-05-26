/*
class StarRating{
    constructor(qs) {
        this.ratings = [
            {id: 1, name: "Terrible"},
            {id: 2, name: "Bad"},
            {id: 3, name: "OK"},
            {id: 4, name: "Good"},
            {id: 5, name: "Excellent"}
        ];
        this.rating = null;
        this.el = document.querySelector(qs);

        this.init();
    }
}
*/

let num = 1;
let notes = document.querySelector('#notes');

let p = document.createElement('p');
p.textContent = `This is paragraph ${num}`;
num++;

notes.appendChild(p);

