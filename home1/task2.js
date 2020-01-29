function return_object() {
    let args = [...arguments];
    return function() {
        let arr = args[0]();
        let names = args.slice(1);
        if (Array.isArray(arr)) {
            let result = {};
            arr.forEach((elem, index) => {
                if (index < names.length)
                    result[names[index]] = elem;
            });
            result['$data'] = arr.slice(0);
            return result;
        } else
            return arr;
    };

}


function test() {
    return [1, 2, 3, 4, 5, 6];
}

let res = return_object(test, 'a', 'b', 60001)();
console.log(res);