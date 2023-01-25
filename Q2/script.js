"use strict";

let ladder = {
  step: 0,
  arrowUp: "🔼",
  arrowDown: "🔽",
  resultShow: "✅",
  resetShow: "❎",
  increase() {
    console.log(`Increase To ${++this.step} ${this.arrowUp}`);
    return this;
  },
  decrease() {
    console.log(`Decrease To ${--this.step} ${this.arrowDown}`);
    return this;
  },
  reset() {
    console.log(`Reset ==> ${(this.step = 0)} ${this.resetShow}`);
    return this;
  },
  read() {
    console.log(`Result ==> ${this.step} ${this.resultShow}`);
    return this;
  },
};
ladder.increase().increase().increase().decrease().read().reset().read();
