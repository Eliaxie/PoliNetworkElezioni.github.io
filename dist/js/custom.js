document.addEventListener("DOMContentLoaded", function(){
    for (var j=0; j < 5; j++)
    {
        var ul =  document.getElementById("listeContainer");
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
    }
});

