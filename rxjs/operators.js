const { of } = require('rxjs');
const { map, first, last } = require('rxjs/operators');

// map, of
map(x => x * x)(of(1, 2, 3)).subscribe((v) => console.log(`value is ${v}`));
// value is 1
// value is 4
// value is 9

// last, of
last()(of(1, 2, 3)).subscribe(v => console.log(`value is ${v}`));
// value is 3

// first, map, of
first()(map(x => x * x)(of(1, 2, 3))).subscribe(v => console.log(`value is ${v}`));
// value is 1

// pipe
of(5, 6, 7).pipe(
    first(),
    map(x => x * 2)
).subscribe(v => console.log(`value is ${v}`));
// value is 10
