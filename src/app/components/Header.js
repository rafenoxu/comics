class Header {
    constructor(id) {
        this._id = id;
        this.render();
        console.log('Header.js');
    }

    render() {
        const container = document.getElementById(this._id);
        container.innerHTML = '<p>LOL</p>';
    }
}

export default Header;
