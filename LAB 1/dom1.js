import { EventEmitter } from "events";

 class DomClass extends EventEmitter {
    addEventListener (eventName , callback){
        this.on(eventName, callback);

    }
    removeEventListener( eventName, callback){
        this.off( eventName, callback);
    }

 }