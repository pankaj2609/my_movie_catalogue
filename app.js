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
        
        var movie_name = document.querySelector(xyz).innerHTML;
        console.log(movie_name)
        // my_global=movie_name
        // console.log(my_global)
        pass_info(movie_name)
    })
}


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