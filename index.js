const elementToChange = document.querySelector("main#timeLeft")
let now

const time = (hour, minute) =>
  new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute)

setInterval(updateTimeLeft, 100, elementToChange)

function updateTimeLeft(elementToChange) {
  now = new Date()
  const times = [time(9, 30), time(10, 50), time(13, 5), time(14, 25)]

  for (let time of times) {
    if (now > time) continue
    elementToChange.innerText = timeUntil(time)
    break
  }
}

function timeUntil(time) {
  const totalCurrentMinutes = now.getHours() * 60 + now.getMinutes()
  const totalCurrentSeconds = totalCurrentMinutes * 60 + now.getSeconds()
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
