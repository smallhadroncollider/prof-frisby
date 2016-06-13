import { curry } from "ramda";

/**
 * Maybe functor
 * Will only call map if value is set
 **/
const guard = Symbol("maybe guard");

const Maybe = value => {
    let self = {};
    
    // isNothing :: () -> Bool
    self.isNothing = () => value === null || value === undefined;

    // map:: (a -> b) -> Maybe a -> Maybe b
    self.map = f => self.isNothing() ? Maybe.of(null) : Maybe.of(f(value));
    
    // value :: Symbol -> a
    self.value = symbol => {
        if (symbol !== guard) {
            throw new Error("Maybe.value() cannot be accessed directly. Use maybe() helper");
        }

        return value;
    }

    return self;
};

Maybe.of = value => Maybe(value);

// maybe :: b -> (a -> b) -> Maybe a -> b 
const maybe = curry((x, f, m) => m.isNothing() ? x : f(m.value(guard)));

export {
    Maybe as default,
    maybe
};
