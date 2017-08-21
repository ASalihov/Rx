import { Observable, Observer } from "rxjs";

let circle = document.getElementById("circle");
let source = Observable.fromEvent(document, "mousemove")
    .map((e: MouseEvent) => {
        return {
            x: e.clientX,
            y: e.clientY
        }
    })
    .filter(value => value.x < 500);

source.subscribe(
    (value) => {
        document.getElementById("circle").style.left = value.x.toString();
        document.getElementById("circle").style.top = value.y.toString();
    },
    error => console.log(`error: ${error}`),
    () => console.log(`complete`)
);

