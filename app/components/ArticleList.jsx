var React = require('react');
var Article = require('Article');

var articleList = [
    { avatar: "/assets/Gianna_image.jpg", title: "WAHS Introduction Sequence", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/Z53t4xdtbtE",
        author: "Gianna Sanchez" },
    { avatar: "/assets/SofiaO_image.jpg", title: "WAHS News -The Office- Introduction Sequence", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/isoB6RAuqsM",
        author: "Sofia Osio and Bailey Braeseke" },
    { avatar: "/assets/Ava_image.jpg", title: "Back to School (Man on the Street)", subtitle: "",
        text: "Even though the school year started, we went around campus and asked students what song best described their summer.",
        video: "https://www.youtube.com/embed/jNTLt-r32e4",
        author: "Bailey Braeseke and Ava Courtney" },
    { avatar: "/assets/Emily_image.jpg", title: "How to make: Rainbow Cake Cooking", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/q0SXoV0zPmU",
        author: "Emily Myers" },
    { avatar: "/assets/WAHS_logo2.0.png", title: "How to make: Mini Pizzas", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/hMWNY7ha3hQ",
        author: "Matthew Bermudez" },
    { avatar: "/assets/Gianna_image.jpg", title: "Music Adventures Band Camp (Feature)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/qFUjnJQHaqE",
        author: "Gianna Sanchez" },
    { avatar: "/assets/Adrianne_image.jpg", title: "Wood Mill Lab (Feature)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/X7SqjKJrT9w",
        author: "Adrianne Morales and Sofia Osio" },
    { avatar: "/assets/Gianna_image.jpg", title: "Hitting All the Right Notes (Profile)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/aIZ2F3zz7fE",
        author: "Sofia Barreto and Gianna Sanchez" },
    { avatar: "/assets/donskoi_image.jpg", title: "Bar B Ranch (Feature)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/6_ECz4u13MQ",
        author: "Sophia Donskoi and Gianna Sanchez" },
    { avatar: "/assets/barreto_image.jpg", title: "Teacher Talks (Short Film)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/U2PqmtJsOu4",
        author: "Sofia Barreto and Gianna Sanchez" },
    { avatar: "/assets/barreto_image.jpg", title: "Fall (Man on the Street)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/1wbeCvSimyE",
        author: "Sofia Barreto and Gianna Sanchez" },
    { avatar: "/assets/WAHS_logo2.0.png", title: "Golfing for Autism (Feature)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/FgxdcDRtg3M",
        author: "Bailey Braeseke" },
    { avatar: "/assets/donskoi_image.jpg", title: "Moto Max (Profile)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/AT2w_FOYSDM",
        author: "Sophia Donskoi" },
    { avatar: "/assets/Ruhi_image.jpg", title: "Serving Her Way to Success (Profile)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/Y9JXIBt-o44",
        author: "Ruhi Mansey" },
    { avatar: "/assets/maggie_image.jpg", title: "Alexander Baikovitz (Profile)", subtitle: "",
        text: "",
        video: "https://www.youtube.com/embed/SRo5UU_WPek",
        author: "Maggie Oriol" },
    /*
    { avatar: "/assets/wahs_logo.png", title: "Nullam accumsan lorem in dui", subtitle: "Tempus non, auctor et, hendrerit quis, nisi. ",
        text: "Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
        video: "https://www.youtube.com/embed/R4UvORkbQ0o",
        author: "WAHS News" }*/
];

var ArticleList = React.createClass({
    render: function() {
        var articles = articleList.map(function(article, i) {
            return (
                    <div>
                        <Article avatar={ article.avatar } title={ article.title }
                            subtitle={ article.subtitle } text={ article.text }
                            video={article.video}
                            author={ article.author }
                            id={ 'id_' + i } />
                        <hr></hr>
                    </div>
            );
        });

        return (
            <div>
                <h1 className="text-center" >WAHS Feed</h1>
                <hr></hr>
                <ul className="article-list">
                    { articles }
                </ul>
            </div>
        )
    }
});

module.exports = ArticleList;