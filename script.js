function clickPrompt(){
    const t1 = document.getElementById(t1);
    document.getElementById(t1).onclick = function () {
        prompt("Tested.");
    };
}