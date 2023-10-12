const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsContainer = document.getElementById('results-container');
const toggleSearchButton = document.getElementById('toggle-search');

let searchType = 'user'; // Default search type is 'user'

searchForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchTerm = searchInput.value.trim();

    if (searchType === 'user') {
        // Make a request to the User Search Endpoint
        const userSearchUrl = `https://api.github.com/search/users?q=${searchTerm}`;
        try {
            const response = await fetch(userSearchUrl);
            const data = await response.json();
            // Process and display user search results
        } catch (error) {
            console.error('Error fetching user data', error);
        }
    } else {
        // Handle repo search logic here
    }
});

// Add event listener for toggling search type (user or repo)
toggleSearchButton.addEventListener('click', () => {
    // Toggle between 'user' and 'repo'
    searchType = searchType === 'user' ? 'repo' : 'user';
    searchInput.placeholder = `Search for a ${searchType}`;
});
