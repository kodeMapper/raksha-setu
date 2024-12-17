function startFakeCall() {
    const callScreen = document.getElementById("fake-call-screen");
    callScreen.style.display = "block";
    document.getElementById("fake-call-btn").style.display = "none";

    let callText = document.getElementById("fake-call-text");
    let callSteps = ["Dialing...", "Ringing...", "Connected"];
    let i = 0;

    let callInterval = setInterval(() => {
        if (i < callSteps.length) {
            callText.textContent = callSteps[i];
            i++;
        } else {
            clearInterval(callInterval);
        }
    }, 1000);
}

function endFakeCall() {
    const callScreen = document.getElementById("fake-call-screen");
    callScreen.style.display = "none";
    document.getElementById("fake-call-btn").style.display = "block";
    document.getElementById("fake-call-text").textContent = "Dialing...";
}
