(() => {


    const $doc = document;
    const $tab = $doc.getElementById("js-tab");
    const $nav = $tab.querySelectorAll("[data-nav]");
    const $content = $tab.querySelectorAll("[data-content]");
    const navLength = $nav.length
    const ACTIVE_CLASS ="is-active";

    const init = () => {
        $content[0].style.display = "block";
    }
    init();

    const clickHandler = (e) => {
        e.preventDefault();

        const $this = e.target;
        const targetVal = $this.dataset.nav;

        for(let navIndex= 0; navIndex < navLength; navIndex++) {
            $content[navIndex].style.display = "none";
            $nav[navIndex].classList.remove(ACTIVE_CLASS);
        }

        $tab.querySelectorAll("[data-content= '" + targetVal + "']")[0].style.display = "block";
        $nav[targetVal].classList.add(ACTIVE_CLASS);

        console.log("click!!!");
    } 

    

    for(let navIndex = 0; navIndex < navLength; navIndex++) {
        $nav[navIndex].addEventListener("click",(e) => {
            clickHandler(e);
        })
    }

    




})();