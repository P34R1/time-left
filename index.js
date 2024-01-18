const time = (hour, minute, now) =>
  new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute)

const elementToChange = document.querySelector("div#timeLeft")
setInterval(updateTimeLeft, 100, elementToChange)

function updateTimeLeft(elementToChange) {
  const now = new Date()
  const periods = [time(9, 30, now), time(10, 50, now), time(13, 5, now), time(14, 25, now)]

  for (let period of periods) {
    if (now > period) continue
    elementToChange.innerText = timeUntil(period, now)
    break
  }
}

function timeUntil(periodEnd, now) {
  const totalCurrentMinutes = now.getHours() * 60 + now.getMinutes()
  const totalCurrentSeconds = totalCurrentMinutes * 60 + now.getSeconds()
  const totalPeriodEndMinutes =
    periodEnd.getHours() * 60 + periodEnd.getMinutes()
  const totalPeriodEndSeconds = totalPeriodEndMinutes * 60

  const totalSecondsLeft = totalPeriodEndSeconds - totalCurrentSeconds
  const minutes = Math.floor(totalSecondsLeft / 60)
    .toString()
    .padStart(2, "0")
  const seconds = (totalSecondsLeft % 60).toString().padStart(2, "0")

  return `${minutes}m ${seconds}s`
}
