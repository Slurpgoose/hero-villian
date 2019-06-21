// - A Villain should be a subclass of Person (hint: use "extend", and don't forget to use super() in the constructor)
// - A method render() which will output HTML that represents the Villain
//    - You can render a simple <img> tag if you'd like! Find any old "villain" image on google
//    - Make sure to show the "health" of the villain too


class Villain extends Person{

    constructor (name){
        super(name)
    }

    render() {
        let img_url = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0cca024b-a1f2-4f7e-a8c3-b41e784c374d/dbfby1p-61264e39-11ad-4326-9ea7-a6f1a8fffd4c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzBjY2EwMjRiLWExZjItNGY3ZS1hOGMzLWI0MWU3ODRjMzc0ZFwvZGJmYnkxcC02MTI2NGUzOS0xMWFkLTQzMjYtOWVhNy1hNmYxYThmZmZkNGMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XxExs-KepUZEBN9oRfegIFq1v4VV45sxyiJhWHIJj3o";
        return `<div><h1>${this.name}<h1></div>
                <div><img src="${img_url}"></img></div>
                <div><h3 id="vil-health">${this.health}<h3></div>`
                
    }
}