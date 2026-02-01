This application is a website that generates a shape (Triangle, Rectangle, Circle) with size control based off of the 
users input.

Data is passed to result.html through a URL query string using the HTTP get method. Pretty much the data is passed 
through the end of the URL string in variables that can be deconstructed in the site.js logic

The formulas used to calculate each shape is:

    Rectangle: Width * Height

    Triangle: Width * Height * 0.5

    Circle: PI * (Radius^2)

Challenges that were encountered were figuring out how to do URL query string and then deconstructing it in the site.js,
integrating the logic so the site.js logic worked when intended.

AI use: AI was used in this project to summarize the specifications and to explain how certain logic worked (ex. how URL
Query String worked)