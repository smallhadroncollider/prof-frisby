import Maybe from "../functors/Maybe";

// head :: [a] -> Maybe a
export default xs => Maybe.of(xs[0]);
