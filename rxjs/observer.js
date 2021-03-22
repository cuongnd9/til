const { Observable } = require('rxjs');

const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 100);
});

// INFO: observer syntax.

observable.subscribe({
    next(x) { console.log(`next value is ${x}`) },
    error(err) { console.log(`something went wrong: ${err}`) },
    complete() { console.log('done') },
});

observable.subscribe(x => console.log('Observer got a next value: ' + x));

observable.subscribe(
    x => console.log('Observer got a next value: ' + x),
    err => console.error('Observer got an error: ' + err),
    () => console.log('Observer got a complete notification')
);
