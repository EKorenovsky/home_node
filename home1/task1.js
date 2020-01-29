function pauseWrapper(f, timeout) {
    return function() {
        console.log(`Функция выполниться с задержкой в ${timeout} милисекунд!`);
        setTimeout(() => {
            f();
        }, timeout);
    }
}


function test() {
    console.log('Функция выполнена!');
}


let a = pauseWrapper(test, 2000);
a();