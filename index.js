const wakeUpHoursDiv = document.getElementById("wakeup-hours-div")
const calcBtn = document.getElementById(calcBtn);
calcBtn.onclick = calcWakeUpTimes;

function calcWakeUpTimes() {
    const fallAsleepTime = new Date();
    fallAsleepTime.setMinutes(fallAsleepTime.getMinutes() + 14);

    calcBtn.addEventListener("click, calcWakeupTimes")
    //Function without a name
    returnbtn.addEventListener(click,() => {
        promptSection.classList.remove("hidden");
    });

    const wakeUpTime = new Date(fallAsleepTime);
    wakeUpHoursDiv.innerHTML = ""

    for(let i = 1; i <= 6; i++){
        wakeUpTime.setMinutes(wakeUpTime.getMinutes() + 90);
        const wakeUpTimeString = (wakeUpTime.toLocaleTimeString("en-US", {timeStyle: "short"}));
        //console.log(`The first sleep cycle #${i} ends at ${wakeUpTimeString}`);
        wakeUpTimes.push(wakeUpTimeString);
    }
    const cycleDiv = document.createElement("div");
    cycleDiv.classList.add("cycle")
    cycleDiv.setAttribute("id", `cycle-${i}`)
    cycleDiv.innerText = wakeUpTimeString
    wakeUpHoursDiv.appendChild(cycleDiv)
}

console.log("Wake-up times:", wakeUpTimes.join(", "));