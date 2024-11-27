function add(x, y) {
    console.log(arguments);
    return x + y;
}

// @ts-ignore
add(2, 5, 1);