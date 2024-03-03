var tablinks =document.getElementsByClassName("tab-links");
var tabcontents =document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
function openmenu() {
    document.getElementById("sidemenu").style.width = "200px";
  }
  /* Set the width of the side navigation to 0 */
  function closemenu() {
    document.getElementById("sidemenu").style.width = "0";
  }
