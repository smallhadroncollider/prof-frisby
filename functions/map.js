import { curry } from "ramda";

// map :: Functor f => (a -> b) -> f a -> f b
export default curry((f, functor) => functor.map(f));
