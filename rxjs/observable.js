const { Observable } = require('rxjs');

// This is an Observable that pushes the values 1, 2, 3 immediately (synchronously)
// when subscribed, and the value 4 after one second has passed since the subscribe call,
// then completes.
const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
        subscriber.next(4);
        subscriber.complete();
    }, 100);
});

observable.subscribe({
    next(x) { console.log(`next value is ${x}`) },
    error(err) { console.log(`something went wrong: ${err}`) },
    complete() { console.log('done') },
});

