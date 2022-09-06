//fetch() method:It is define on the window object,which we can use to perform requst.

//This method will return promise..

//Promise will either be fulfilled or rejected

fetch('https://fakestoreapi.com/products').then((data)=>{

// console.log(data);
return data.json();
}).then((completedata)=>{
    // console.log(completedata[2].title);
    // document.getElementById('root').innerHTML=completedata[2].title;
  let data1="";
  completedata.map((value)=>{

    data1+=` <div id="card">
    <h1 class="title">${value.title}</h1>
    <img src=${value.image} alt="img"class="imges">
    <p>${value.description}</p>
    <p class="categoury">${value.category}</p>
    <p class="price">${value.price}</p>

</div>`;

  });
  document.getElementById("cards").innerHTML=data1;

  }).catch((err)=>{
        alert(err);
    });