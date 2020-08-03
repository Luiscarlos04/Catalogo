let link = document.queryselectorAll(".close");

links.forEach(function(link){
  link.addEvenListener("click",function(ev){
    ev.preventDefault();
    location.href = "/boletines";

    return false;
  });
});
