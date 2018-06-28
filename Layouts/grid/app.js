import "babel-polyfill";
import './app.css';

export class AppComponent {
    
    render() {
        
    }
}

document.addEventListener("DOMContentLoaded", () => {
    var app = new AppComponent();
    app.render();
});
