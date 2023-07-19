// console.log(my_global)

var movie_clicked = localStorage.getItem("movie_name");

var url = "https://www.omdbapi.com/?t="+ movie_clicked +"&apikey=2761aa58";

var p = fetch(url)

// var movie_data; // declaring variable here

p.then((data)=>{
    return (data.json());
}).then((value2)=>{
    // console.log(value2)
    // movie_data = value2;// assigning values here

    // console.log(movie_data.Genre,
    //     movie_data.Language,
    //     movie_data.Released,
    //     movie_data.Runtime)
        var text_data = 
    `<ul>
        <li>${value2.Genre}</li>
        <li>${value2.Language}</li>
        <li>${value2.Released}</li>
        <li>${value2.Runtime}</li>
    </ul>`

    document.querySelector(".text-details").insertAdjacentHTML("beforeend",text_data);
})
// console.log(movie_data) // using it here, it does not work, why????

// var text_details = document.querySelector(".text-details");
// var text_data = 
// `<ul>
//     <li>${movie_data.Genre}</li>
//     <li>${movie_data.Language}</li>
//     <li>${movie_data.Released}</li>
//     <li>${movie_data.Runtime}</li>
// </ul>`

// text_details.insertAdjacentHTML("beforeend",text_data);
