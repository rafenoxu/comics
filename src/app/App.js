import Header from './components/Header.js';

class App {
    constructor() {
        this.renderComponents();
    }

    renderComponents() {
        /* Tworzenie headera */
        const header = new Header('header');
        console.log('App.js');
    }
}

export default App;