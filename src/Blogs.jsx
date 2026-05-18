import React from "react";
<<<<<<< HEAD
import "./Blogs.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import j7 from "./assets/j7.jpeg";
import d6 from "./assets/d6.jpeg";
import h2 from "./assets/h2.jpeg";
import i9 from "./assets/i9.jpeg";
import j6 from "./assets/j6.jpeg";
import l7 from "./assets/l7.jpeg";
import k10 from "./assets/k10.jpeg";
import te5 from "./assets/te5.jpg";
import i8 from "./assets/i8.jpeg";










const blogs = [
{
img:j7,
title:"Corporate Event Trends Every Brand Should Know",
desc:"Explore the latest corporate event trends that help businesses engage audiences, build stronger brand identity....",
link:"/blog1"
},

{
img:d6,
title:"Creative Wedding Event Ideas for Modern Couples",
desc:"Discover elegant wedding event concepts, stylish decor ideas, and memorable experiences that make wedding celebrations truly magical....",
link:"/blog2"
},

{
img:h2,
title:"Exhibition Booth Design Ideas to Attract Visitors",
desc:"Learn how smart exhibition booth designs can attract attention, increase visitor interaction, and enhance your brand visibility....",
link:"/blog3"
},

{
img:i9,
title:"Artists and Entertainment Ideas for Live Events",
desc:"From live bands and DJs to celebrity performers and dancers, entertainment plays a key role in making events energetic and memorable....",
link:"/blog4"
},

{
img:j6,
title:"Conference Event Planning Guide for Businesses",
desc:"Plan successful conferences with engaging speakers, interactive sessions, and seamless event management strategies....",
link:"/blog5"
},

{
img:l7,
title:"How Product Launch Events Build Brand Excitement",
desc:"Product launch events create excitement, media buzz, and customer interest while introducing innovative products to the market....",
link:"/blog6"
},

{
img:k10,
title:"Experiential Marketing Events That Engage Customers",
desc:"Experiential marketing allows brands to create immersive experiences that connect emotionally with customers and increase brand loyalty....",
link:"/blog7"
},

{
img:te5,
title:"Team Building Activities for Corporate Success",
desc:"Interactive team building activities help employees collaborate better, improve communication, and create a positive ....",
link:"/blog8"
},

{
img:i8,
title:"Technology Innovations Transforming Event Management",
desc:"Discover how technology like AR, VR, and digital engagement tools are transforming the future of event management....",
link:"/blog9"
}
];

function BlogSection(){

return(

<section className="blog-section">

<div className="blog-header">

<p className="sub">WE PROVIDE AWESOME INSIGHTS</p>

<h2>RECENT <span>BLOG</span></h2>

<p className="tagline">
Ideas, tips & inspiration — we share what matters in events.
</p>

</div>

<div className="blog-grid">

{blogs.map((blog,index)=>(

<div className="blog-card" key={index}>

<img src={blog.img} alt="blog"/>

<div className="blog-content">

<h3>{blog.title}</h3>

<p>{blog.desc}</p>

<Link to={blog.link}>
<button className="read-btn">Read More</button>
</Link>

</div>

</div>

))}

</div>



</section>


)

}

export default BlogSection;
=======
import { Link } from "react-router-dom";
import "./Blogs.css";
import blog1 from "./assets/blog1.png";

const blogs = [
  {
    id: 1,
    image: blog1,
    title: "Best Corporate Team-Building Activities In 2026",
    desc: "Discover fun and engaging activities that boost teamwork and productivity in corporate environments.",
    path: "/blog1"
  },
  {
    id: 2,
    image: blog1,
    title: "Top 10 Conference Halls In Bangalore",
    desc: "Explore the best venues in Bangalore for hosting conferences and corporate events.",
    path: "/blog2"
  },
  {
    id: 3,
    image: blog1,
    title: "Top 10 Team Outing Resorts",
    desc: "Find the best resorts perfect for team outings and relaxation.",
    path: "/blog3"
  },
  {
    id: 4,
    image: blog1,
    title: "Top 10 Corporate Party Venues",
    desc: "Amazing venues to host unforgettable corporate parties.",
    path: "/blog4"
  },
  {
    id: 5,
    image: blog1,
    title: "How To Host An Event",
    desc: "A complete guide to organizing successful events easily.",
    path: "/blog5"
  },
  {
    id: 6,
    image: blog1,
    title: "Benefits Of Team Building",
    desc: "Understand how team building improves productivity.",
    path: "/blog6"
  },
  {
    id: 7,
    image: blog1,
    title: "Micro Event Marketing",
    desc: "Learn about the power of micro-event marketing strategies.",
    path: "/blog7"
  },
  {
    id: 8,
    image: blog1,
    title: "Virtual Events Guide",
    desc: "Everything you need to know about hosting virtual events.",
    path: "/blog8"
  },
  {
    id: 9,
    image: blog1,
    title: "Award Ceremony Events",
    desc: "Tips to create engaging and memorable award ceremonies.",
    path: "/blog9"
  },
];

export default function Home() {
  return (
    <div className="app">
      <div className="heading">
        <h1>Orbit Events & Experiences</h1>
        <p>Discover modern event trends and ideas.</p>
      </div>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <div className="image-box">
              <img src={blog.image} alt={blog.title} />
            </div>

            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p className="blog-desc">{blog.desc}</p>

              <Link to={blog.path}>
                <button className="read-btn">
                  Read Blog <span>↗</span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
>>>>>>> 1d39347 (local changes)
