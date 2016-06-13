/**
 * Container functor
 * A functor is a type that implements `map` and obeys some laws
 **/
const Container = value => ({
    // map :: (a -> b) -> Container a -> Container b
    map: f => Container.of(f(value)),
});

Container.of = value => Container(value);

export default Container;
