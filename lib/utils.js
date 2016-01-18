const hasOwn = {}.hasOwnProperty;

export function classNames (...args) {
    let classes = [],
        argsLen = args.length;

    for (let i = 0; i < argsLen; i++) {
        var arg = args[i];
        if (!arg) {
            continue;
        }

        var argType = typeof arg;

        if (argType === 'string' || argType === 'number') {
            classes.push(arg);
        } else if (Array.isArray(arg)) {
            classes.push(classNames.apply(null, arg));
        } else if (argType === 'object') {
            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }

    return classes.join(' ');
}
