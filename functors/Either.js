/**
 * Left functor
 **/
const left = Symbol("left");
const right = Symbol("right");
const guard = Symbol("guard");

const Left = value => {
    let self = {};
    
    // map :: (a -> b) -> Left
    self.map = f => self;

    self.toString = () => `Left(${value})`;
    self.type = () => left;

    self.value = symbol => {
        if (symbol !== guard) {
            throw new Error("Left.value() cannot be accessed directly. Use either() helper");
        }

        return value;
    };

    return self;
};

Left.of = value => Left(value);

/**
 * Right functor
 **/
const Right = value => ({
    // map :: (a -> b) -> Right b
    map: f => Right.of(f(value)),
    toString: () => `Right(${value})`,
    type: () => right,
    value: symbol => {
        if (symbol !== guard) {
            throw new Error("Right.value() cannot be accessed directly. Use either() helper");
        }

        return value;
    },
});

Right.of = value => Right(value);

/**
 * either helper function
 **/
import { curry } from "ramda";

// either :: (a -> c) -> (b -> c) -> Either a b -> c
const either = curry((f, g, e) => {
    switch (e.type()) {
        case left: return f(e.value(guard));
        case right: return g(e.value(guard));
    };
});

export {
    Left, 
    Right,
    either,
};
