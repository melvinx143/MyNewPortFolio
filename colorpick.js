
    let bgcolor=document.getElementById("content_body")
    let colored=document.getElementById("coloring");
    function me()
    {
        let a=['red','green','yellow','pink','violet','indigo','green','skyblue','purple','grey','black'];
let c=Math.floor(((Math.random())*a.length));
colored.innerHTML=a[c];
bgcolor.style.backgroundColor=a[c];


    }

