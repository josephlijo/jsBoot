import "babel-polyfill";
import './app.css';

export class AppComponent {
    get mainContent() {
        return "Welcome! This is a Webpack4 starter kit";
    }
    
    render() {
        document.querySelector('main').innerHTML = this.mainContent;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    var app = new AppComponent();
    app.render();
});
