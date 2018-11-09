const mongoose = require('mongoose');
const Post = require('../models/post');
const dbConnect = require('./database');

dbConnect();

var posts = [
    new Post({
        title: "My First Blog Post",
        tags: ["blockchain", "web development"],
        created_at: "2018-10-16T23:45:24.565Z",
        slug: "my-first-blog-post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
               tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc \
               non blandit. Diam in arcu cursus euismod. Imperdiet nulla malesuada pellentesque \
               elit eget gravida. Sollicitudin tempor id eu nisl nunc mi ipsum. Tincidunt eget nullam \
               non nisi est sit amet facilisis. Volutpat est velit egestas dui id ornare arcu odio. \
               Nulla at volutpat diam ut venenatis tellus in metus. Commodo odio aenean sed adipiscing diam. \
               Tellus mauris a diam maecenas sed. Nisl rhoncus mattis rhoncus urna neque viverra justo. \
               Tempor orci dapibus ultrices in iaculis nunc. Sit amet nisl suscipit adipiscing.",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
    	        tempor incididunt ut labore et dolore magna aliqua.Nibh tellus molestie nunc\
              non blandit.",
        image_url: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/01/Blockchain-Funds.png"
    }),

    new Post ({
        title: "My Second Blog Post",
        tags: ["smart contracts"],
        created_at: "2018-10-16T23:45:24.565Z",
        slug: "my-second-blog-post",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
               tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc \
               non blandit. Diam in arcu cursus euismod. Imperdiet nulla malesuada pellentesque \
               elit eget gravida. Sollicitudin tempor id eu nisl nunc mi ipsum. Tincidunt eget nullam \
               non nisi est sit amet facilisis. Volutpat est velit egestas dui id ornare arcu odio. \
               Nulla at volutpat diam ut venenatis tellus in metus. Commodo odio aenean sed adipiscing diam. \
               Tellus mauris a diam maecenas sed. Nisl rhoncus mattis rhoncus urna neque viverra justo. \
               Tempor orci dapibus ultrices in iaculis nunc. Sit amet nisl suscipit adipiscing.",
        summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
    	        tempor incididunt ut labore et dolore magna aliqua.Nibh tellus molestie nunc\
              non blandit.",
        image_url: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/01/Blockchain-Funds.png"
    }),

    new Post ({
        title: "My Third Blog Post",
        tags: ["dapps"],
        created_at: "2018-09-16T23:45:24.565Z",
        slug: "my-third-blog-post",
        content: "Asdf ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
               tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc \
               non blandit. Diam in arcu cursus euismod. Imperdiet nulla malesuada pellentesque \
               elit eget gravida. Sollicitudin tempor id eu nisl nunc mi ipsum. Tincidunt eget nullam \
               non nisi est sit amet facilisis. Volutpat est velit egestas dui id ornare arcu odio. \
               Nulla at volutpat diam ut venenatis tellus in metus. Commodo odio aenean sed adipiscing diam. \
               Tellus mauris a diam maecenas sed. Nisl rhoncus mattis rhoncus urna neque viverra justo. \
               Tempor orci dapibus ultrices in iaculis nunc. Sit amet nisl suscipit adipiscing.",
        summary: "Asdf ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
    	        tempor incididunt ut labore et dolore magna aliqua.Nibh tellus molestie nunc\
              non blandit.",
        image_url: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/01/Blockchain-Funds.png"
    }),

    new Post({
        title: "My Fourth Blog Post",
        tags: ["javascript"],
        created_at: Date.now(),
        slug: "my-fourth-blog-post",
        content: "Asdfsdfdsfdf ipsdfdssdfum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
               tempor incididunt ut labore et dolore magna aliqua. Nibh tellus molestie nunc \
               non blandit. Diam in arcu cursus euismod. Imperdiet nulla malesuada pellentesque \
               elit eget gravida. Sollicitudin tempor id eu nisl nunc mi ipsum. Tincidunt eget nullam \
               non nisi est sit amet facilisis. Volutpat est velit egestas dui id ornare arcu odio. \
               Nulla at volutpat diam ut venenatis tellus in metus. Commodo odio aenean sed adipiscing diam. \
               Tellus mauris a diam maecenas sed. Nisl rhoncus mattis rhoncus urna neque viverra justo. \
               Tempor orci dapibus ultrices in iaculis nunc. Sit amet nisl suscipit adipiscing.",
        summary: "Asfsdfdsfsddf isdfsdfsdfsdpsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\
    	        tempor incididunt ut labore et dolore magna aliqua.Nibh tellus molestie nunc\
              non blandit.",
        image_url: "https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2018/01/Blockchain-Funds.png"
    })
]

// seeding to mongodb
var done = 0;

for (var i = 0; i < posts.length; ++i) {
    posts[i].save((err, result) => {
        done++;
        if (done === posts.length) {
            mongoose.disconnect();
        }
    });
}

