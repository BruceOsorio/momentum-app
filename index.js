var line = document.createElement("line") // gonna use this
line.textContent = "This is a line that will change color when hovered over."

line.addEventListener("mouseenter", (event) => {
    event.target.style.color = "red";
    setTimeout(() => {
        event.target.style.color = "";
    }, 500);
}, false);

document.body.append(line)