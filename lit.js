import {html, LitElement, render} from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js";

export class TimeLeft extends LitElement {
  time(hour, minute) {
    return new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate(), hour, minute)
  }
  
  constructor() {
    super();
    
    setInterval(() => {
      this.now = new Date();
      this.times = [this.time(9, 30), this.time(10, 50), this.time(13, 5), this.time(14, 25)]
    }, 100);
  }

  timeUntil(time) {
    const totalCurrentMinutes = this.now.getHours() * 60 + this.now.getMinutes()
    const totalCurrentSeconds = totalCurrentMinutes * 60 + this.now.getSeconds()
    const totalTimeMinutes =
      time.getHours() * 60 + time.getMinutes()
    const totalTimeSeconds = totalTimeMinutes * 60

    const totalSecondsLeft = totalTimeSeconds - totalCurrentSeconds
    const minutes = Math.floor(totalSecondsLeft / 60)
      .toString()
      .padStart(2, "0")
    const seconds = (totalSecondsLeft % 60).toString().padStart(2, "0")

    return `${minutes}m ${seconds}s`
  }

  render() {
    for (let time of this.times) {
      if (this.now > time) continue
      return html`${this.timeUntil(time)}`
    }
  }
}

customElements.define('time-left', TimeLeft);
