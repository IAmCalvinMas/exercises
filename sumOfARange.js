/*
 * author: https://github.com/IAmCalvinMas
 */

let toDo = {
  value: "wake up",
  rest: {
    value: "eat breakfast",
    rest: {
      value: "watch tv",
      rest: {
        value: "hallucinate",
        rest: {
          value: "bath",
          rest: {
            value: "go to phase 2",
            rest: {
              value: "eat supper",
              rest: {
                value: "sleep",
                rest: null,
              },
            },
          },
        },
      },
    },
  },
};

console.log(toDo.rest.rest.rest.value);
