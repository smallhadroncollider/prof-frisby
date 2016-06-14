import { compose } from "ramda";

/**
 * IO Functor
 * value should always be a function
 **/

// IO :: (a -> b) -> IO
const IO = value => ({
    // map :: (a -> b) -> IO
    map: f => IO(compose(f, value)),
    unsafePerformIO: () => value(),
    toString: () => `IO(${value})`,
});

IO.of = value => IO(() => value);

export default IO;
