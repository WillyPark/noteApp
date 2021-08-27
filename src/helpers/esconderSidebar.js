export const esconderSidebar = () => {
    const aside = document.querySelector("aside");

    aside.classList.remove("animate__fadeInLeft");
    aside.classList.add("animate__fadeOutLeft");

    setTimeout(() => {
        aside.classList.remove("fade");
    }, 1000);
}