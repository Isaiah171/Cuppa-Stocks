var getNewsSnippets = async () => {
            // API URL is set with correct endpoints
            var apiUrl = `https://api.marketaux.com/v1/news/all?published_after=2024-01&limit=3&sentiment_gte=0&language=en&api_token=wiLLDG8j7DrJAFvQaBjPpLWEmV9zGJafetIIMuCM`;

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
        // Creates a div to contain each of the snippets and read more link
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

        // Appends elements to the snippet container
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

        // Function to show modal
        function showModal() {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
            setTimeout(() => {
                modal.style.display = "none";
            }, 2000); // Hide modal after 2 seconds
        }

        // Function to add snippet to favorites section on HTML page using local storage
        function addToFavorites(item) {
            // Retrieve existing favorites from the local storage
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

            // Checks if the item is already in favorites and prevents duplicate from being added
            if (!favorites.some(fav => fav.url === item.url)) {
                // Add the item to the favorites section
                favorites.push({ description: item.description, url: item.url });
                // Update local storage with the new favorites list
                localStorage.setItem('favorites', JSON.stringify(favorites));
                // Refresh the favorites container
                showFavoritesContainer();
            }
        }

        // Function to display favorites in the specified section of the HTML page
        function showFavoritesContainer() {
            let favoritesData = JSON.parse(localStorage.getItem('favorites')) || [];
            let favoritesContainer = document.getElementById("favorites");
            favoritesContainer.innerHTML = ""; // Clears the previous content of the favorites section

            favoritesData.forEach((fav, index) => {
                // Creates a div to contain each favorite article
                let favoriteContainer = document.createElement("div");
                favoriteContainer.id = `favorite-${index + 1}`;

                // Creates a span to display the favorite's description
                let favoriteElement = document.createElement("span");
                favoriteElement.innerHTML = fav.description;

                // Creates a "Read More" link for allowing the user to read the full article
                let readMoreLink = document.createElement("a");
                readMoreLink.href = fav.url;
                readMoreLink.target = "_blank"; // Opens full article in a new tab
                readMoreLink.textContent = "Read More";
                readMoreLink.classList.add("read-more"); // Adds the class for styling

                // Appends elements to the favorite container to allow the list to expand
                favoriteContainer.appendChild(favoriteElement);
                favoriteContainer.appendChild(document.createElement("br"));
                favoriteContainer.appendChild(readMoreLink);

                // Appends the favorites container to the favoritesContainer div
                favoritesContainer.appendChild(favoriteContainer);
                favoritesContainer.appendChild(document.createElement("hr")); // Adds a horizontal line between favorites
            });
        }

        // Function to clear favorites in local storage
        function clearFavorites() {
            localStorage.removeItem('favorites');
            // Refresh the favorites container
            showFavoritesContainer();
        }

        // Function to navigate to the Favorites page
        function showFavorites() {
            showFavoritesContainer();
        }

        // Calls the function to fetch the data
        getNewsSnippets();