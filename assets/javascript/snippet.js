//The goal of this javascript file was to pull useful news snippets from the Marketaux API and display them in a useful manner
//for the end user. Snippets were chosen to be displayed with an active-linked "read more" button below so that users have
//the option of going to the full article if the snippet piques their interest. The data was reduced by specifying clear endpoints
//followed by converting the data to a JSON object. The object is then reduced and manipulated into the information seen in the
//news portion of the application. Another goal of this js file was to have the ability to "favorite" an article so that it could
//be saved in a list via local storage for enjoyment at a later point in time. A favorite button was created, a modal was developed
//notifying the user that an article has been added to the favorite news list, and a clear favorites button was created in order
//to reset the list should the end user want to start over.

var getNewsSnippets = async () => {
            // API URL is set with correct endpoints
            var apiUrl = `https://api.marketaux.com/v1/news/all?published_after=2024-01&limit=3&sentiment_gte=0&language=en&api_token=bNXai2UqVdw7PkInBynoRWMSRiJhtz17KmkjxKuj`;

            try {
                // Used to call the Marketaux API URL
                var answer = await fetch(apiUrl);
                // Used to troubleshoot errors fetching the URL in the console
                if (!answer.ok) {
                    throw new Error(`Error: ${answer.status} - ${answer.statusText}`);
                }
                // Used to obtain data from the Marketaux API as a json object 
                var info = await answer.json();
                showMeNewsSnippets(info.data);
                // Used to alert the user of errors fetching data
            } catch (error) {
                console.error('No news for you!:', error.message);
            }
        }

// This function displays news snippets on the webpage in the snippet container
function showMeNewsSnippets(newsData) {
    let newsSnippetTestBox = document.getElementById("story-import");

    newsData.forEach((item, index) => {
        // Creates a div to contain each of the snippets and the corresponding read more link
        let snippetContainer = document.createElement("div");
        snippetContainer.classList.add("snippet-container");

        // Creates a span to display the snippet text
        let snippetElement = document.createElement("span");
        snippetElement.textContent = item.snippet;

        // Creates a "Read More" link for each snippet
        let readMoreLink = document.createElement("a");
        readMoreLink.href = item.url;
        readMoreLink.target = "_blank"; // Opens full article in a new tab
        readMoreLink.textContent = "Read More";
        readMoreLink.classList.add("read-more"); // Adds the class for styling

        // Creates the favorite button dynamically
        let favoriteButton = document.createElement("button");
        favoriteButton.innerHTML = '<i class="fas fa-heart favorite-btn"></i>';
        favoriteButton.classList.add("favorite-btn");
        favoriteButton.onclick = () => {
            addToFavorites(item);
            showModal();
        };

        // Appends elements to the snippet container in order to dynamically expand the list of snippets
        snippetContainer.appendChild(snippetElement);
        snippetContainer.appendChild(document.createElement("br"));
        snippetContainer.appendChild(readMoreLink);
        snippetContainer.appendChild(document.createElement("br"));
        snippetContainer.appendChild(favoriteButton);

        // Appends the snippet container to the newsSnippets div
        newsSnippetTestBox.appendChild(snippetContainer);
        newsSnippetTestBox.appendChild(document.createElement("hr")); // Adds a horizontal line between snippets
    });
}

        // Function to show modal when favorite button is clicked
        function showModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
            setTimeout(() => {
                modal.style.display = "none";
            }, 2000); // Hide modal after 2 seconds
        }

        // Function to add snippet to favorites section on HTML page using local storage
        function addToFavorites(item) {
            // Retrieves existing favorites from the local storage
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            // Checks if the item is already in favorites and prevents duplicate from being added
            if (!favorites.some(fav => fav.url === item.url)) {
                // Adds the article to the favorites section using article description and url data taken from the JSON object
                favorites.push({ description: item.description, url: item.url });
                // Update local storage with the newest favorites 
                localStorage.setItem('favorites', JSON.stringify(favorites));
                // Refreshes the favorites container with updated favorites
                showFavoritesContainer();
            }
        }

        // Function to display favorites in the "favorite news" section of the application
        function showFavoritesContainer() {
            let favoritesData = JSON.parse(localStorage.getItem('favorites')) || [];
            let favoritesContainer = document.getElementById("favorite");
            favoritesContainer.innerHTML = ""; // Clears out the previous content of the favorites section

            favoritesData.forEach((fav, index) => {
                // Creates a div dynamically to contain each favorite article
                let favoriteContainer = document.createElement("div");
                favoriteContainer.id = `favorite-${index + 1}`;

                // Creates a span to display the favorite article's description
                let favoriteElement = document.createElement("span");
                favoriteElement.innerHTML = fav.description;

                // Creates a "Read More" link to allow the user to read the full article
                let readMoreLink = document.createElement("a");
                readMoreLink.href = fav.url;
                readMoreLink.target = "_blank"; // Opens the full article in a new tab
                readMoreLink.textContent = "Read More";
                
                // Appends elements to the favorite container to allow the list to expand
                favoriteContainer.appendChild(favoriteElement);
                favoriteContainer.appendChild(document.createElement("br"));
                favoriteContainer.appendChild(readMoreLink);

                // Appends the favorites container to the favoritesContainer div
                favoritesContainer.appendChild(favoriteContainer);
                favoritesContainer.appendChild(document.createElement("hr")); // Adds a horizontal line between favorites
            });
        }

        // Function to clear the favorites in local storage
        function clearFavorites() {
            localStorage.removeItem('favorites');
            // Refreshes the favorites container
            showFavoritesContainer();
        }

        // Function to navigate to the Favorites page
        function showFavorites() {
            showFavoritesContainer();
        }

        // Calls the function to fetch the data
        getNewsSnippets();