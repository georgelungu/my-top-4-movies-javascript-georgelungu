let favMovies = [
    {
        title: "The Wolf of Wall Street",
        director: "Martin Scorsese",
        yearOfRelease: 2013,
        imdbRating: 8.2,
        shortDescription: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
        writers: "Terence Winter and Jordan Belfort",
        stars: "Leonardo DiCaprio, Jonah Hill and Margot Robbie",
        genres: "Biography, Comedy, Crime"

    },
    {
        title: "2001: A Space Odyssey",
        director: "Stanley Kubrick",
        yearOfRelease: 1968,
        imdbRating: 8.3,
        shortDescription: "After uncovering a mysterious artifact buried beneath the Lunar surface, a spacecraft is sent to Jupiter to find its origins - a spacecraft manned by two men and the supercomputer H.A.L. 9000.",
        writers: "Stanley Kubrick and Arthur C. Clarke",
        stars: "Keir Dullea, Gary Lockwood, William Sylvester",
        genres: "Adventure, Sci-Fi"
    },
    {
        title: "Pulp Fiction",
        director: "Quentin Tarantino",
        yearOfRelease: 1994,
        imdbRating: 8.9,
        shortDescription: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        writers: "Quentin Tarantino and Roger Avary",
        stars: "John Travolta, Uma Thurman, Samuel L. Jackson",
        genres: "Crime, Drama"
        
    },
    {
        title: "Black Cat, White Cat",
        director: "Emir Kusturica",
        yearOfRelease: 1998,
        imdbRating: 8.0,
        shortDescription: "Matko and his son Zare live on the banks of the Danube river and get by through hustling and basically doing anything to make a living. In order to pay off a business debt Matko agrees to marry off Zare to the sister of a local gangster.",
        writers: "Gordan Mihic",
        stars: "Bajram Severdzan, Srdjan 'Zika' Todorovic, Braca Katic",
        genres: "Comedy, Crime, Romance"
    }
];

console.log("The title of the first movie is " + favMovies[0].title + "." + "\nThe director that made the movie is named " + favMovies[0].director + "." + "\nThe year of realease of the second movie is " + favMovies[1].yearOfRelease + "." + "\nThe IMDB rating of the third movie is " + favMovies[2].imdbRating + "." + "\nThe short description of the fourth movie is: " + favMovies[3].shortDescription + "\nThe lead writer of the second movie is: " + favMovies[1].writers + "." + "\nThe lead star of the third movie is: " + favMovies[2].stars + "." + "\nThe main genre of the fourth movie is: " + favMovies[3].genres + ".");