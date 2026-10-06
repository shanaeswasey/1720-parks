// Imports the park information from the data file
import { parks } from "../data/parks.mjs";

// Finds the spot in the HTML where all park cards will be added
const destination = document.querySelector("#allparks");

// Goes through each park in the data file one at a time
parks.forEach((park) => {

    // Creates one card for the current park
    const parkcard = document.createElement("div");

    // Creates a section to hold the park image and park name
    const parksection = document.createElement("section");

    // Creates the park name heading
    const parkname = document.createElement("h2");

    // Creates the park image
    const parkphoto = document.createElement("img");

    // Adds the current park's name to the heading
    parkname.innerText = park.name;

    // Adds the current park's image
    parkphoto.src = `images/${park.photo}`;

    // Sets the image size
    parkphoto.width = "600";
    parkphoto.height = "200";

    // Uses the park name as the image description
    parkphoto.alt = park.name;

    // Loads the image only when it is needed
    parkphoto.loading = "lazy";

    // Adds the park image to the image section
    parksection.appendChild(parkphoto);

    // Adds the park name to the image section
    parksection.appendChild(parkname);

    // Creates a paragraph for the park description
    const parkdesc = document.createElement("p");

    // Adds the current park's description
    parkdesc.innerText = park.description;

    // Creates a paragraph for the park address
    const parkaddress = document.createElement("p");

    // Adds the current park's address from the data file
    parkaddress.innerHTML = `<span>ADDRESS:</span> ${park.address}`;

    // Creates a paragraph for the date the park was established
    const parkest = document.createElement("p");

    // Adds the established label and date from the park data
    parkest.innerHTML = `<span>ESTABLISHED:</span> ${park.established}`;

    // Creates a paragraph for the size of the park
    const parksize = document.createElement("p");

    // Adds the park size from the data file
    parksize.innerHTML = `<span>PARK SIZE:</span> ${park.size_sq_mi} sq miles`;

    // Creates a paragraph for the park star rating
    const parkrating = document.createElement("p");

    // Checks the park rating and shows the correct number of black and white stars
    switch (park.rating) {

        // Shows 1 black star and 4 white stars
        case 1:
            parkrating.innerHTML = "&#9733; &#9734; &#9734; &#9734; &#9734;";
            break;

        // Shows 2 black stars and 3 white stars
        case 2:
            parkrating.innerHTML = "&#9733; &#9733; &#9734; &#9734; &#9734;";
            break;

        // Shows 3 black stars and 2 white stars
        case 3:
            parkrating.innerHTML = "&#9733; &#9733; &#9733; &#9734; &#9734;";
            break;

        // Shows 4 black stars and 1 white star
        case 4:
            parkrating.innerHTML = "&#9733; &#9733; &#9733; &#9733; &#9734;";
            break;

        // Shows 5 black stars
        case 5:
            parkrating.innerHTML = "&#9733; &#9733; &#9733; &#9733; &#9733;";
            break;
    }

    // Creates a link to the park's official website
    const parkurl = document.createElement("a");

    // Adds the text users will click
    parkurl.innerText = "Learn More";

    // Uses the park website from the data file
    parkurl.href = park.url;

    // Opens the park website in a new tab
    parkurl.target = "_blank";


    // Adds the image and park name section to the card
    parkcard.appendChild(parksection);

    // Adds the park description to the card
    parkcard.appendChild(parkdesc);

    // Adds the park address to the card
    parkcard.appendChild(parkaddress);

    // Adds the established date to the card
    parkcard.appendChild(parkest);

    // Adds the park size to the card
    parkcard.appendChild(parksize);

    // Adds the star rating to the card
    parkcard.appendChild(parkrating);

    // Adds the Learn More link to the card
    parkcard.appendChild(parkurl);

    // Adds the finished park card to the page
    destination.appendChild(parkcard);


});