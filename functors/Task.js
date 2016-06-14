/**
 * Task Functor
 **/
const Task = value => ({
    map: f => {
        if (typeof value === "function") {
            return value(error => error, value => f(Task.of(value)));
        }

        return Task.of(f(value));
    },

    fork: (reject, result) => value(reject, result),

    toString: () => `Task(${value})`,
});

Task.of = value => Task(value);

export default Task;
