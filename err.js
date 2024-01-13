class Err {
    constructor(message, name, component, action, context={}) {
        this.message = message;
        this.name = name;
        this.component = component;
        this.action = action;
        this.context = context;
    }
}

module.exports = {
    Err
}
