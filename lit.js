import {
    html,
    LitElement,
    css,
  } from "https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js"

export class TimeLeft extends LitElement {
  static styles = css`
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background: #AFBBF2;
      color: #000;
    }
      
    time-left {
      background: #D3FFF3;
      padding: 100px;
      font-size: 90px;
      border-radius: 25px;
      border: 2px solid;
      box-shadow: 5px 10px 8px #000;
      display: flex;
      justify-content: center;
      align-items: center;
    }`

    time(hour, minute) {
      return new Date(
        this.now.getFullYear(),
        this.now.getMonth(),
        this.now.getDate(),
        hour,
        minute,
      )
    }

    _construct() {
      this.now = new Date()
      this.times = [
        this.time(9, 30),
        this.time(10, 50),
        this.time(13, 5),
        this.time(14, 25),
      ]
    }
  
    constructor() {
      super()
      this._construct()
      setInterval(this._construct, 100)
    }
  
    timeUntil(time) {
      const totalCurrentMinutes = this.now.getHours() * 60 + this.now.getMinutes()
      const totalCurrentSeconds = totalCurrentMinutes * 60 + this.now.getSeconds()
      const totalTimeMinutes = time.getHours() * 60 + time.getMinutes()
      const totalTimeSeconds = totalTimeMinutes * 60
  
      const totalSecondsLeft = totalTimeSeconds - totalCurrentSeconds
      const minutes = Math.floor(totalSecondsLeft / 60)
        .toString()
        .padStart(2, "0")
      const seconds = (totalSecondsLeft % 60).toString().padStart(2, "0")
  
      return `${minutes}m ${seconds}s`
    }
  
    render() {
      if (this.times == undefined || this.times == []) html``
      for (let time of this.times) {
        if (this.now > time) continue
        return html`${this.timeUntil(time)}`
      }
    }
  }
  
  customElements.define("time-left", TimeLeft)
  