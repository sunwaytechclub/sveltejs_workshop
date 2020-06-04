let target = document.querySelector('.target');

// Component base class
// Create base class for all kind of components
class Component {
    constructor(tag) {
        this._component = document.createElement(tag);
        this._component.addEventListener('click', this.defaultBehavior);
    }
    get component() {
        return this._component;
    }
    defaultBehavior() {
        console.log("HIIIIII")
    }
}

// create new button class
class Button extends Component {
    constructor(name) {
        super('button');
        this._name = name

        // referring to this component
        this._component.innerText = this._name;
    }
}
// create new p class
class P extends Component {
    constructor(name) {
        super('p');
        this._name = name

        // referring to this component
        this._component.innerText = this._name;
    }
}

// to generate the class
class ComponentFactory {
    comp = {
        "button": Button,
        "p": P
    }
    constructor(type, text) {
        return new this.comp[type](text);
    }
}

// get template
fetch('/template.txt')
    .then(d => d.text())
    .then(render);

function render(template) {
    template = template.split('\n');
    template.forEach(d => {
        // e.g. button - i am button 1
        ctx = d.split(' - ');

        let type = ctx[0];
        let text = ctx[1];

        // generate components
        let component = new ComponentFactory(type, text);
        target.appendChild(component._component)
    })

}
