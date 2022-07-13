class Controls{
    constructor(){
        this.forward=false;
        this.left=false;
        this.right=false;
        this.reverse=false;
    
        // Add keyboard Listeners (# -> private)
        this.#addKeyboardListeners();
    }

    #addKeyboardListeners(){
        // Pressing key (controlling car)
            // "(event)=> {" same as "function(event){..."
                // However, any this.___ will refer to function() instead of Control obj's instances
        document.onkeydown=(event) => {
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
            }
            // // Debug -- output obj in table form
            // console.table(this);
        }
        // Releasing key (controlling car)
        document.onkeyup=(event) => {
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
            }
            // // Debug -- output obj in table form
            // console.table(this);
        }
    }
}