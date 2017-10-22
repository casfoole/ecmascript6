(function voer() {

    window.addEventListener("load",init);
    function init()
    {

        let go = document.getElementsByClassName("test");
        for (let i = 0; i < go.length; i++) {

            go[i].innerHTML += "(" + go[i].tagName + ")"
        }
    }
})();