function main() {
    let button = document.querySelector(".tw-button--success");
    if (button && !button.hasAttribute("disabled")) {
        button.click();
    }
}

setInterval(main, 250);
