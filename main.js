const deg = 6
hours = document.querySelector('.hours')
minuts = document.querySelector('.minuts')
seconds = document.querySelector('.seconds')

setInterval(() => {
  let date = new Date(),
    h = date.getHours() * 30,
    m = date.getMinutes() * deg,
    s = date.getSeconds() * deg

  hours.style.transform = `rotate(${h + m / 12}deg)`
  minuts.style.transform = `rotate(${m}deg)`
  seconds.style.transform = `rotate(${s}deg)`
})
