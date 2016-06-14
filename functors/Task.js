import isFunc from "../functions/isFunc";

/**
 * Task Functor
 **/
const Task = value => ({
    map: f => isFunc(value) ? value(error => error, value => f(Task.of(value))) : Task.of(f(value)),

    fork: (reject, result) => value(reject, result),

    toString: () => `Task(${value})`,
});

Task.of = value => Task(value);

export default Task;
