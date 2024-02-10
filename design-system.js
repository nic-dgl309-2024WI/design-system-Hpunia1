function toggleMenuClick() {
    let hamIcon = document.getElementById('hamburger');
    let closeIcon = document.getElementById('close');
    let sideNav = document.getElementById('sidebar');
    let topNav = document.getElementById('topbar');
    hamIcon.classList.toggle("is-show");
    closeIcon.classList.toggle("is-show");
    sideNav.classList.toggle("is-show");
    topNav.classList.toggle("is-show");
}