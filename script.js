let images = [];

fetch('images.json')
  .then(response => response.json())
  .then(data => {
    images = data.images;
    updateImage();
  })
  .catch(error => console.error('Error fetching images:', error));
