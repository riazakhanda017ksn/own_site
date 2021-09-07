import React, { useState } from "react";
import "./BlogArrangement.css";
import imageThree from "../../images/attractive-happy-man-using-laptop-park-watching-video-podcast-fresh-air (1).jpg";
import imageFour from "../../images/two-people-using-laptop-meeting-coffee-shop.jpg";
import imageFive from "../../images/confident-millennial-female-applicant-glasses-talking-job-interview.jpg";
import imageSix from "../../images/z.jpg";
import BlogArrangementDetails from "../BlogArrangementDetails/BlogArrangementDetails";
import Pagination from "../Pagination/Pagination";
import OtherPagination from "../OtherPagination/OtherPagination";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const BlogArrangement = () => {
  const myBlog = [
    {
      image: `https://i.ibb.co/Sy2qf4H/33.jpg`,
      name: "Javascript",
      postOne: `JavaScript is a multi-paradigm, dynamic language with types and operator . Its build in object in method. It made by Brendan which in 1995. JavaScript is a Syntax base on
       java and c language — there are lots of language that used structured from JavaScript.`,
      postTwo: `Undefined and null is slightly which are slightly Odd . Array is special Object in JavaScript. And Also Get freely Date and Regex. And to be technical 
      accurate that function are special Type of Object. So the diagram look more like this`,
      link: "https://riazakhanda.medium.com/javascript-8c420bfef001",
    },
    {
      image: `https://i.ibb.co/RzX6NdW/22-1.jpg`,
      name: "React Js",
      postOne: `React is a front-end JavaScript library which maintained by Facebook. React is a single page application or mobile application.Its more faster than another language framework or library.`,
      postTwo: `React is one of the best option for make web design. It make the website design unique.React Specially help on similar in loop different in data.
       for this purpose react is best solution for website design. Also it help in development.`,
      link: "https://riazakhanda.medium.com/react-ee5b43176c4",
    },
    {
      image: `https://i.ibb.co/PrntwLV/11.jpg`,
      name: "Javascript Primitive Value",
      postOne: `In JavaScript primitive values and primitive data type is not an object or has no method. All primitive values are immutable. Primitive we cannot change because a primitive itself variable assigned a primitive value.
       We can reassign any value, but the existing value is never change. But object and array can be changed`,
      postTwo: `if people want that they can resaerch about JavaScript. Brandan Eich made JavaScript. but after 25 year they able to success to make nine things 
      .In which anytype of website or any application can build by those nine such types.`,
      link: "https://riazakhanda.medium.com/primitive-values-e0f52327490e",
    },
    {
      image: `https://i.ibb.co/8j9vWP9/44.jpg`,
      name: "Discussion About React ",
      postOne: `React is a front-end JavaScript library which maintained by Facebook. React is a single page application or mobile application.Its more faster than another language framework or library.`,
      postTwo: `React is one of the best option for make web design. It make the website design unique.React Specially help on similar in loop different in data.
       for this purpose react is best solution for website design. Also it help in development.`,
      link: "https://riazakhanda.medium.com/react-ee5b43176c4",
    },
    {
      image: `https://i.ibb.co/3BKr7sJ/66.jpgg`,
      name: "Javascript Data Types",
      postOne: `JavaScript is a multi-paradigm, dynamic language with types and operator . Its build in object in method. It made by Brendan which in 1995. JavaScript is a Syntax base on
       java and c language — there are lots of language that used structured from JavaScript.`,
      postTwo: `Undefined and null is slightly which are slightly Odd . Array is special Object in JavaScript. And Also Get freely Date and Regex. And to be technical 
      accurate that function are special Type of Object. So the diagram look more like this`,
      link: "https://riazakhanda.medium.com/primitive-values-e0f52327490e",
    },
    {
      image: `https://i.ibb.co/Bz6jqq7/confident-millennial-female-applicant-glasses-talking-job-interview.jpg`,
      name: "Interview Preparation for a javascript developer",
      postOne: `Object method property is a property where we are declare any value and also declare any function.Just not only one function , we can declare many function`,
      postTwo: `In Javascript, Truthy value is a value that is considered true when encountered in a Boolean context.And All value is not get as truthy value then they get as falsy value.The truthy value used when we need to compare which right or which wrong. Or Correct or Incorrect. Without Condition we cant make website dynamically`,
      link: "https://riazakhanda.medium.com/more-introduce-with-javascript-91e546eb5e3b",
    },
  ];

  // ///
  // ////pagination-work
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage, setPostPerPage] = useState(1);
  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // ///
  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  // const pageSlice = myBlog.slice(indexOfFirstPost, indexOfLastPost);

  // //
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    //
    <div className="blog-bg">
      <div className="container">
        <div className="row">
          <Slider {...settings}>
            {myBlog.map((blog) => (
              <BlogArrangementDetails blogItems={blog}></BlogArrangementDetails>
            ))}
          </Slider>
        </div>
        <br />
        {/* <OtherPagination
          postPerPage={postPerPage}
          totalPosts={myBlog.length}
          paginate={paginate}
        ></OtherPagination> */}
      </div>
    </div>
  );
};

export default BlogArrangement;
