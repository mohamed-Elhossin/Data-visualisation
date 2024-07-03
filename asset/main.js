let nextChartsLinks = document.querySelectorAll(".nextChartsLinks");
let charts = document.querySelectorAll(".charts");
let menu_item = document.querySelectorAll("#visuals-menu .menu-item");

function updateChartsVisibility() {

    let allNoSelected = Array.from(nextChartsLinks).every(link => {
        return !link.classList.contains('selected');
    });
    console.log(allNoSelected);

    if (allNoSelected) {
        charts.forEach(chart => {
            chart.classList.add('none');
        });
    }
}
for (let index = 0; index < nextChartsLinks.length; index++) {
    nextChartsLinks[index].addEventListener("click", function (e) {

        
        charts[index].classList.remove("none");

      
        document.querySelectorAll('.menu-item.selected').forEach(item => {
            item.classList.remove('selected');
        });
        document.querySelector('#defaultCanvas0').classList.add('none'); 

 
        for (let i = 0; i < nextChartsLinks.length; i++) {
            nextChartsLinks[i].classList.remove("selected");
        }

 
        for (let i = 0; i < charts.length; i++) {
            if (i !== index) {
                charts[i].classList.add("none");
            }
        }
    

        
        nextChartsLinks[index].classList.add("selected");

         updateChartsVisibility();
    });
}
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("menu-item") && e.target.parentElement.id == 'visuals-menu') {
        updateChartsVisibility();
        document.querySelector('#defaultCanvas0').classList.remove('none'); 

    }
})

updateChartsVisibility();


 