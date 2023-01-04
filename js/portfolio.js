(function () { // wrap code in IIFE to keep it from global scope
    let links = document.querySelectorAll('a'); // grab all <a> tags that trigger the image gallery
    let imageContainer = document.querySelector('.image-container'); // grab the div that will contain the images
    let imagesCollection = document.querySelectorAll('.image-container img');

    function displayImage(imgs, album) { // function to check the data-album attr and check against the button that was clicked
        imgs.forEach((image) => {
            if (image.dataset.album == album) {
                image.classList.remove('hide');
            } else {
                image.classList.add('hide');
            }
        });
    }


    links.forEach((link) => { // loop through <a> tags and create click event on each 
        link.addEventListener('click', (e) => {
            e.preventDefault();

            switch (link.textContent) { // check name of link clicked 
                case "website": // link 1 text

                    displayImage(imagesCollection, 'website'); //display images from album 1

                    break;
                case "desighning": // link 2 text

                    displayImage(imagesCollection, 'desighning'); //display images from album 2

                    break;
                case "Development": // link 3 text

                    displayImage(imagesCollection, 'Development'); //display images from album 3

                    break;

                case "all projects": // // link 4 text - display all images at once

                    imagesCollection.forEach((image) => {
                        image.classList.remove('hide');
                    });

                    break;
            }

        });
    });

})();