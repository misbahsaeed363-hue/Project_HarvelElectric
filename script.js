function goBack() {
    window.history.back();
}
function showSidebar() {
    let $sideBar = $(".sidebar");
    $sideBar.show('slow');


}
function closeSidebar() {
   let $sideBar = $(".sidebar");
    $sideBar.hide('slow');
}