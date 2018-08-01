import { Injectable, Output, EventEmitter } from "@angular/core";
import { ObjectUnsubscribedError } from "../../../../../../node_modules/rxjs";

@Injectable({
    providedIn: 'root'
})
export class TableService{

    @Output() messageEvent = new EventEmitter<Object>();
    item: Object;

    sendEvent(item: Object){
        this.messageEvent.emit(item);
    }

}