class eventsObj {
    constructor() {
        this.events = {};
    }
    on(eventName, callback) {
        this.events[eventName] = this.events[eventName] || [];
        this.events[eventName].push(callback);
    }
    emit(eventName, ...args) {
        this.events[eventName].forEach(fn => fn(...args));
    }
}


let ev = new eventsObj();

ev.on('math', (t1, t2) => { console.log(`(+) ${t1 + t2}`) });
ev.on('math', (t1, t2) => { console.log(`(-) ${t1 - t2}`) });
ev.on('math', (t1, t2) => { console.log(`(*) ${t1 * t2}`) });
ev.on('math', (t1, t2) => { console.log(`(/) ${t1 / t2}`) });


ev.on('test2', (t) => { console.log(`test2 1 ${t}`) });
ev.on('test2', (t) => { console.log(`test2 2 ${t}`) });
ev.on('test2', (t) => { console.log(`test2 3 ${t}`) });
ev.on('test2', (t) => { console.log(`test2 4 ${t}`) });

ev.on('pow', (x, y) => { console.log(Math.pow(x, y)) });


ev.emit('math', 25, 34);
ev.emit('test2', 'ITMO!');
ev.emit('pow', 2, 3);