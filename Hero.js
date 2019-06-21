// - A Hero should be a subclass of Person (hint: use "extends", and don't forget to use super() in the constructor)
// - A method render() which will output HTML that represents the Hero
//    - You can render a simple <img> tag if you'd like! Find any old "hero" image on google
//    - Make sure to show the "health" of the hero too

class Hero extends Person {

    constructor(name) {
        super(name)

    }

    render() {
        let img_url = "https://66.media.tumblr.com/2ce445117926ed3e2815e282a9e6e81f/tumblr_opw2ksxngT1v916xuo8_250.jpg";
        return `<div><h1>${this.name}<h1></div>
                <div><img src="${img_url}"></img></div>
                <div><h3 id="her-health">${this.health}<h3></div>`
                
    }
    
}