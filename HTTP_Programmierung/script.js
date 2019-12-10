function createCard() {
	var col = document.createElement("div");
	var card = document.createElement("div");
	var body = document.createElement("div");

	col.className = "col-auto";
	card.classList.add("card");
	body.className = "card-body";

	var cardTitle = document.createElement("h4");
	var title = document.createTextNode("Luke Skywalker");
	var cardSubtitle = document.createElement("h4");
	var subTitle = document.createTextNode("19BBY");

	cardTitle.className = "card-title";
	cardTitle.appendChild(title);
	cardSubtitle.className = "card-subtitle mb-2 text-muted";
	cardSubtitle.appendChild(subTitle);

	var button = document.createElement("button");
	var buttonText = document.createTextNode("Heimat Anzeigen");

	button.className = "btn btn-dark";
	button.appendChild(buttonText);

	col.appendChild(card);
	card.appendChild(body);
	body.appendChild(cardTitle);
	body.appendChild(cardSubtitle);
	body.appendChild(button);

	document.getElementById('people').appendChild(col);
}