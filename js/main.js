

window.addEventListener('load', windowLoad);

function windowLoad() {
    document.documentElement.classList.add('loaded');


    // Mouse parallax
    const page = document.querySelector('.page');
    const parallaxItems = document.querySelectorAll('[class*="__inset"]');
    const speed = 0.05;

    let posX = 0;
    let cXprocent = 0;


    page.addEventListener('mousemove', parallaxAnimation);
    function parallaxAnimation(e) {
        const parallaxWidth = window.innerWidth;
        const cX = e.pageX - parallaxWidth / 2;
        cXprocent = cX / parallaxWidth * 100;
    }
    function setParallaxAnimationStyle(e) {
        const distX = cXprocent - posX;
        posX = posX + (distX * speed);

        parallaxItems.forEach(parallaxItem => {
            const value = parallaxItem.dataset.prxValue ?
                +parallaxItem.dataset.prxValue : 1;

            parallaxItem.style.cssText = `
                transform: translateX(${posX / value}%)
            `;
        })
        requestAnimationFrame(setParallaxAnimationStyle);
    }
    setParallaxAnimationStyle();


    //scroll parallax
    const moon = document.querySelector('.moon');
    const buildings = document.querySelectorAll('.building');
    const tree = document.querySelector('.tree');
    const stairs = document.querySelector('stairs');
    const train = document.querySelector('.train');
    const santaItems = document.querySelectorAll('.santa>*');

    window.addEventListener('scroll', criatePosition);
    criatePosition();

    function criatePosition() {
        const contentElemnt = document.querySelector('.content__container')
        const windowHeight = window.innerHeight;
        const finalPost = scrollY / (contentElemnt.offsetTop - windowHeight) * 100;
        finalPost < 100 ? christmasAnimation(finalPost) : christmasAnimation(100);
    }
    function christmasAnimation(finalPost) {
        const moonAnim = {
            translate: 50 / 100 * finalPost,
            scale: 1 + 2 / 100 * finalPost
        }
            moon.style.cssTexx = `
                transform:
                    translate (0,${moonAnim.translate}%)
                    scale(${moonAnim.scale})
            `;

        const stairsAnim = {
            translate: 70 / 100 * finalPost,
            scale: 1 + 2 / 100 * finalPost
        }
            stairs.style.cssTexx = `
                transform:
                    translate (0,${stairsAnim.translate}%)
                    scale(${stairsAnim.scale})
            `;
        const treeAnim = {
            translate: 70 / 100 * finalPost,
            scale: 1 + 2 / 100 * finalPost
        }
            tree.style.cssTexx = `
                transform:
                    translate (0,${treeAnim.translate}%)
                    scale(${treeAnim.scale})
            `;
            buildings.forEach((building, index) =>{
                const buildingAnim = {
                    translate: 30 * (buildings.length - index) / 100 * finalPost,
                    scale: 1 + 2 / 100 * finalPost
                }
                building.style.cssTexx = `
                transform:
                    translate (0,${buildingAnim.translate}%)
                    scale(${buildingAnim.scale})
            `;
            })
    }
}

