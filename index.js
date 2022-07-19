const inputContainers = document.getElementsByClassName("input-container"),
    submitBtn = document.querySelector("#submit-btn"); 

let validate = (containersList) => {
    [...containersList].forEach(container => {
        const input = container.children[0],
            errorIcon = container.children[1],
            errorMsg = container.children[2];

        if (input.value === "") {
            input.style.cssText = "color: red; border: solid 2px red";
            errorIcon.style.opacity = "1";
            errorMsg.style.display = "block";
        }
        
        else {
            input.style.cssText = "";
            errorIcon.style.opacity = "";
            errorMsg.style.display = "";
        };
    });
};

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    validate(inputContainers);
});

[...inputContainers].forEach(i => {
    console.log(i.children[0].type)
})