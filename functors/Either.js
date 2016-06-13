/**
 * Left functor
 **/
const Left = value => {
    let self = {};
    
    // map :: (a -> b) -> Left
    self.map = f => self;

    self.toString = () => `Left(${value})`;

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
});

Right.of = value => Right(value);

export {
    Left, 
    Right,
};
