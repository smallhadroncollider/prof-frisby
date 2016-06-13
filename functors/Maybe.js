/**
 * Maybe functor
 * Will only call map if value is set
 **/
const Maybe = value => {
    let self = {};
    
    // isNothing :: () -> Bool
    self.isNothing = () => value === null || value === undefined;

    // map:: (a -> b) -> Maybe a -> Maybe b
    self.map = f => self.isNothing() ? Maybe.of(null) : Maybe.of(f(value));

    return self;
};

Maybe.of = value => Maybe(value);

export default Maybe;
