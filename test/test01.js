function make_abs_adder(x) {
    return function(y) {
        if (x >= 0) {
            return x + y;
        } else {
            return -x + y;
        }
    };
}
