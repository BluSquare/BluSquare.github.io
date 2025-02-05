const lerp = (x, y, a) => x * (1 - a) + y * a;
const clamp = (a, min = 0, max = 1) => Math.min(max, Math.max(min, a));
const invlerp = (x, y, a) => clamp((a - x) / (y - x));

function menuResize() {
    const menu_buttons_container = document.getElementById("header-flex-container");
    var window_width = window.innerWidth;

    var ratio = (window_width/1280)

    menu_buttons_container.style.gap = lerp(0, 260, ratio * ratio * ratio * ratio) + "px";
}
menuResize();

window.addEventListener('resize', () => {
    menuResize();
});