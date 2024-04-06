// Sample data for trending movies and recommended content
const trendingMovies = [
  { title: "Chennai Express", image: "movie1.jpg" },
  { title: "Bramhastra", image: "movie2.jpg" },
 { title: "Dhadak", image: "movie3.jpg" },
  // Add more movies...
];

const recommendedContent = [
  { title: "Wednesday", image: "series1.jpg" },
  { title: "Friends", image: "series2.jpg" },
 { title: "Harrypotter", image: "series3.jpg" },
  // Add more series...
];

// Function to display content on the homepage
function displayContent(content, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  
  content.forEach(item => {
    const contentItem = document.createElement('div');
    contentItem.classList.add('content-item');
    
    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    
    const title = document.createElement('h3');
    title.textContent = item.title;
    
    contentItem.appendChild(image);
    contentItem.appendChild(title);
    container.appendChild(contentItem);
  });
}

// Display trending movies and recommended content on page load
window.onload = function() {
  displayContent(trendingMovies, 'trendingMovies');
  displayContent(recommendedContent, 'recommendedContent');
};

// Search functionality
const searchInput = document.getElementById('searchInput');
searchInput.addEventListener('input', function() {
  const searchTerm = searchInput.value.toLowerCase();
  
  const filteredTrendingMovies = trendingMovies.filter(movie => 
    movie.title.toLowerCase().includes(searchTerm)
  );
  displayContent(filteredTrendingMovies, 'trendingMovies');
  
  const filteredRecommendedContent = recommendedContent.filter(item => 
    item.title.toLowerCase().includes(searchTerm)
  );
  displayContent(filteredRecommendedContent, 'recommendedContent');
});
