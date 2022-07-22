// let month=document.getElementById("month")
// let week=document.getElementById("week")
// let days=document.getElementById("days")
// let hours=document.getElementById("hours")
// let mintues=document.getElementById("mintues")
// let seconds=document.getElementById("seconds")

// let d = new Date('Jan 1,2023 23:59:59').getTime();

// console.log(d)
// d.getMonth();


// month.innerHTML=d.getMonth();


// hours.innerHTML=d.getHours()

// mintues.innerHTML=d.getMinutes()

// seconds.innerHTML=d.getSeconds()

// days.innerHTML=d.getDay()



let countToDate = new Date('Jan 1,2023 23:59:59').getTime();
console.log(countToDate)
function countdown() {
    let todayDate = new Date().getTime();

    let deffrence = countToDate - todayDate;

    let months = Math.floor(deffrence / (1000 * 60 * 60 * 24 * 7 * 4))
    
    console.log('months', months)
    // month.innerHTML=months
    changetextcontent('month', months)

    let weeks = Math.floor(deffrence % (1000 * 60 * 60 * 24 * 7 * 4) / (1000 * 60 * 60 * 24 * 7))
  
    console.log('weeks', weeks)
    // weeks.innerHTML=weeks
    changetextcontent('week', weeks)

    let days = Math.floor(deffrence %(1000 * 60 * 60 * 24*7*4)/(1000 * 60 * 60 * 24 * 7))
    console.log('days', days)
    // days.innerHTML=days
    changetextcontent('days', days)

    let hours = Math.floor(deffrence % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    console.log('hours', hours)
    // hours.innerHTML=hours
    changetextcontent('hours', hours)

    let mintues = Math.floor(deffrence % (1000 * 60 * 60) / (1000 * 60))
    console.log('mintues', mintues)
    // mintues.innerHTML=mintues
    changetextcontent('mintues', mintues)

    let second = Math.floor(deffrence % (1000 * 60) / (1000))
    console.log('seconds', second)
    // seconds.textContent=second
    changetextcontent('seconds', second)





    if (deffrence <= 0) {
        clearInterval(counter)

        let message = document.createElement('h1')
        message.textContent = 'Happy New Year <3'
        message.classList.add('message')
        document.querySelector('.content').appendChild(message)
    }



}


function changetextcontent(name, number) {
    // document.getElementById(name).textContent=number
    document.getElementById(name).textContent = number < 10 ? '0' + number : number
}
let counter = setInterval(countdown, 1000)



