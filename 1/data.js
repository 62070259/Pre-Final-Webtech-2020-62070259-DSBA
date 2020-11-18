let requestURL = 'ezquiz.json';
let request = new XMLHttpRequest();
request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
        dataReportStatus(JSON.parse(request.responseText));
    }
};

request.open("GET", requestURL, true);
request.send();

function dataReportStatus(data) {
    console.log(data.tracks.items[0].album.available_markets.length);
    let rowFirst = document.createElement('div');
    rowFirst.setAttribute("class", "row mx-5 mt-5");

    let rowSec = document.createElement('div');
    rowSec.setAttribute("class", "row mx-5");


    for (let i = 0; i < data.tracks.items.length; i++) {
        let colF = document.createElement('div');
        colF.setAttribute("class", "col-md-2");

        let card = document.createElement("div");
        card.setAttribute("class", "card");

        let pic = document.createElement('IMG');
        pic.setAttribute("class", "card-img-top")
        pic.src = data.tracks.items[i].album.images[0].url;
        let nameText = document.createElement('b');
        nameText.innerHTML += data.tracks.items[i].album.name
        let nameText2 = document.createElement('p');
        nameText2.innerHTML += "Artist: " + data.tracks.items[i].album.artists[0].name + "<br>" + "Release date: " + data.tracks.items[i].album.release_date +
            "<br>" + "Available :" + data.tracks.items[0].album.available_markets.length + "countries";
        colF.append(card);
        colF.append(pic);
        colF.append(nameText);
        colF.append(nameText2);
        document.body.appendChild(colF);

        if (i < 6) {
            rowFirst.append(colF);
        } else {
            rowSec.append(colF);
        }

    }
    document.body.appendChild(rowFirst);
    document.body.appendChild(rowSec);


}