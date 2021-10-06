exports.default = {
    inputs: [{
        key: 'a',
        type: 'Int',
        // multi: true,
    }, {
        key: 'b',
        type: 'Int',
    }],
    outputs: [{
        key: 'result',
        type: 'Int',
        compile(node, compiler) {
            return compiler.getInput(node, 'numbers');
        },
    }],
};
