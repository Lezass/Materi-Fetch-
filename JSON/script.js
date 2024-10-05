fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((json) => showlist(json));

function showlist(json){
    let content ="";
    console.log(json);
    json.forEach((json) => {
    content +=`
    <div class="data">
    
    
    <h2>UserID-${json.id}:${json.title}</h2>
    <h2>Comment :${json.body}</h2>
    

    </div>`;
    });
document.getElementById("id-user").innerHTML = content;
}