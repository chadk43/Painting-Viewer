document.addEventListener('DOMContentLoaded', function () {
    const array = JSON.parse(content);
    const write = document.querySelector("ul");


    for (let i of array) {
        const img = document.createElement("img");
        const item = document.createElement("li");
        img.setAttribute("src", `/images/small/${i.id}.jpg`);
        img.setAttribute("data-id", i.id);//set id of img to art peice id

        img.setAttribute("data-artist", i.artist);
        img.setAttribute("data-title", i.title);
        img.setAttribute("data-description", i.description);

        write.appendChild(item);
        item.appendChild(img);
    }

    const imgclick = document.querySelector("ul");

    /*function that knows what image was clicked */
    imgclick.addEventListener("click", function (event) {
        const figure = document.querySelector("figure");
        figure.innerHTML = "";

        const largeimg = document.createElement("img");

        largeimg.setAttribute("src", `/images/large/${event.target.dataset.id}.jpg`);
        figure.appendChild(largeimg);

        var title = document.getElementById("title");
        title.innerHTML = "";
        var newtitle = document.createTextNode(event.target.dataset.title);
        title.appendChild(newtitle);

        var artist = document.getElementById("artist");
        artist.innerHTML = "";
        var by = document.createTextNode("By ")
        artist.appendChild(by);
        var newartist = document.createTextNode(event.target.dataset.artist);
        artist.appendChild(newartist);

        // var description = document.getElementById("description");
        // description.innerHTML = "";
        // var newdescription = document.createTextNode(event.target.dataset.description);
        // description.appendChild(newdescription);

        for (let i of array) {

            if (i.id == event.target.dataset.id) {
               
                for (let k of i.features) {
                    
                    const figure = document.querySelector("figure");
                    const newdiv = document.createElement("div");
                    newdiv.setAttribute("class", "box");
                    
                    const width = (k.lowerRight[0]) - (k.upperLeft[0]);
                    const height = (k.lowerRight[1]) - (k.upperLeft[1]);
                   
                    newdiv.style.position = "absolute";
                    newdiv.style.left = `${k.upperLeft[0]}px`;
                    newdiv.style.top = `${k.upperLeft[1]}px`;
                    newdiv.style.width = `${width}px`;
                    newdiv.style.height = `${height}px`;
                    
                    newdiv.addEventListener("mouseover",function(e)
                    {
                        const desc = document.querySelector("#description")
                        desc.textContent = `${k.description}`;
                    });

                    newdiv.addEventListener("mouseout",function(e)
                    {
                        const desc = document.querySelector("#description")
                        desc.textContent = "";
                    });

                    figure.appendChild(newdiv);

                }

            }
            

        }

    });


});