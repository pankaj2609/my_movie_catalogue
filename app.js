// slider
var arrows = $(".arrow");
var movie_lists = $(".movie-list")

for(let i=0; i<arrows.length; i++){
    // var ratio = Math.floor(window.innerWidth / 270); // no. of movies visible on screen at once
    var r;
    if(window.innerWidth>980){r = 4;}
    else{r = 2;}
    console.log(r)

    var max_clicks = movie_lists[i].querySelectorAll("img").length - r;
    var click_count = 0;
    arrows[i].addEventListener("click",function(){
        click_count++;
        if(click_count <= max_clicks){
            var each_move_length = movie_lists[i].computedStyleMap().get("transform")[0].x.value - 300;
            movie_lists[i].style.transform = `translateX(${each_move_length}px)`
        }
        else{
            movie_lists[i].style.transform = "translateX(0px)"
            click_count = 0;
        }
        
    })
}

//watch button
var watch_button_list =$(".featured-button,.movie-list-item-button");

function pass_info(val){
    localStorage.setItem("movie_name",val);
    window.location.href = "info.html";
}

// var my_global = "this is a string";

for(let i=0; i<watch_button_list.length; i++){
    watch_button_list[i].addEventListener("click",function(){
        var movie_tag = $(this).attr("class").split(' ')[1];
        console.log(movie_tag);

        var xyz = "span."+movie_tag;
        
        var obtained_name = document.querySelector(xyz).innerHTML;
        obtained_name_arr = obtained_name.split(" ");
        var movie_name = obtained_name_arr.join("_");
        console.log(movie_name)
        // my_global=movie_name
        // console.log(my_global)
        pass_info(movie_name)
    })
}

//------------------------------------------------------------------------------------//

// for(let i=0; i<watch_button_list.length; i++){
//     watch_button_list[i].addEventListener("click",function(){
//         // var all_classes = document.querySelector(this).attr("class");
//         // alert(all_classes)
//         // my_func();
//         // pass_info();
//     });
// }

// const heading = document.createElement("h1")
// const inner_data = document.createTextNode(localStorage.getItem("movie_name"))
// heading.appendChild(inner_data);

// const body_tag = document.getElementsByTagName("body")
// body_tag.appendChild(heading);

// console.log("You are watching ==>  " + localStorage.getItem("movie_name"))
//------------------------------------------------------------------------------------//

// light-dark theme
var items = document.querySelectorAll(".navbar-container,.sidebar,.sidebar-icons,.container,.featured-content1,.featured-content2,.movie-list-container,.movie-list-title,.toggle,.sun,.moon");
var sun = document.querySelector(".sun");

sun.addEventListener("click",function(){
    for(let i=0; i<items.length; i++){
        items[i].classList.toggle("day");
    }

})

