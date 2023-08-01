// console.log(my_global)

var movie_clicked = localStorage.getItem("movie_name");

var url = "https://www.omdbapi.com/?t="+ movie_clicked +"&apikey=2761aa58";

var p = fetch(url)

p.then((data)=>{
    return (data.json());
}).then((value2)=>{

    console.log(value2)
        var text_data = 
    `<ul>
        <li>${value2.Genre}</li>
        <li>${value2.Language}</li>
        <li>${value2.Released}</li>
        <li>${value2.Runtime}</li>
        <li>${value2.Writer}</li>
        <li>${value2.imdbRating}</li>
        <li>${value2.Genre}</li>
        <li>${value2.Language}</li>
        <li>${value2.Released}</li>
        <li>${value2.Runtime}</li>
        <li>${value2.Writer}</li>
        <li>${value2.imdbRating}</li>
        <li>${value2.Genre}</li>
        <li>${value2.Language}</li>
        <li>${value2.Released}</li>
        <li>${value2.Runtime}</li>
        <li>${value2.Writer}</li>
        <li>${value2.imdbRating}</li>
        <li>${value2.Genre}</li>
        <li>${value2.Language}</li>
        <li>${value2.Released}</li>
        <li>${value2.Runtime}</li>
        <li>${value2.Writer}</li>
        <li>${value2.imdbRating}</li>
    </ul>`
    
    var image_data = `<img src=${value2.Poster} height="500" width="300"></img>`
        
    var movie_title = `<h1>${value2.Title}</h1>` 
    var bg_img = `linear-gradient(90deg, rgba(255, 255, 255), rgb(0,0,0,0), rgba(255, 255, 255)),url('${value2.Poster}')`

    document.querySelector(".text-details").innerHTML = text_data;
    document.querySelector(".visual-details").innerHTML = image_data;
    document.querySelector(".movie-title").innerHTML = movie_title;
    document.querySelector(".outer-container").style.backgroundImage = bg_img;
    

})
