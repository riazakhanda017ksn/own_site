import React, { useState } from "react";
import "./Project.css";
import imageOne from "../../projectImg/screenshot.jpg";
import imageTwo from "../../projectImg/screenshot2.jpg";
import imageThree from "../../projectImg/screenshot3.jpg";
import imageFour from "../../projectImg/screenshot4.jpg";
import imageFive from "../../projectImg/screenshot5.jpg";
import imageSix from "../../projectImg/screenshot6.jpg";
import imageSeven from "../../projectImg/screenshot20.jpg";
import imageEight from "../../projectImg/screenshot21.jpg";
import imageNine from "../../projectImg/screenshot24.jpg";
import imageTen from "../../projectImg/screenshot22.jpg";
import imageEleven from "../../projectImg/screenshot7.jpg";
import image2 from "../../projectImg/screenshot8.jpg";
import image3 from "../../projectImg/screenshot9.jpg";
import image4 from "../../projectImg/screenshot17.jpg";
import image5 from "../../projectImg/screenshot18.jpg";
import image6 from "../../projectImg/nxt.jpg";
import image7 from "../../projectImg/screenshot15.jpg";
import image8 from "../../projectImg/screenshot19.jpg";
import image9 from "../../projectImg/screenshot10.jpg";
import image10 from "../../projectImg/screenshot11.jpg";
import imageSol from "../../projectImg/1212.png";
import portfolio from "../../projectImg/screenshot12.jpg";
import vg from "../../projectImg/screenshot13.jpg";
import cl from "../../projectImg/screenshot16.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectsDetails from "../ProjectsDetails/ProjectsDetails";
const Project = () => {
  const myAllProjects = [
    {
      name: "The Unrealistic Photography",
      image: imageOne,
      githubOne: "https://github.com/riazakhanda017ksn/unrealistic-photography",
      githubTwo:
        "https://github.com/riazakhanda017ksn/unrealistic-photography-server",
      liveLink: "https://true-log-in-form.web.app/",
      postOne: `in this website i showed navbar,banner,service-part,testomonial,blog-section ,footer and also showed a user log In form and also showed how to send payment in database with input form with send this in
       mongodb database and also i showed the in this website and i showed admin pannel .Users can book any service if they want.After that the user will be taken to the login page, after leaving he will log in, after that he will be taken to the payment page. 
       After payment, the user can give service review if he wants and then the user can check his order status if he wants`,
      postTwo: `Users can book any service if they want.After that the user will be taken to 
      the login page, after leaving he will log in, after that he will be taken to the payment page. After payment, 
      the user can give service review if he wants and then the user can check his order status if he wants.
      This website has an admin panel, admin which can only view admin page, user 
      can only view his order and give feedback.Language:(html, css, react JS, node, Express JS,MongoDB, firebase)`,
    },
    {
      name: "Your It Shop",
      image: imageTwo,
      githubOne: "https://github.com/riazakhanda017ksn/ema-john-with-react",
      githubTwo: "https://github.com/riazakhanda017ksn/It-shop-server",
      liveLink: "https://new-project-223bb.web.app/",
      postOne: `website name - Your IT Shop
      in this website i showed products and also showed a user log In form and also showed CheckOut page with input form with send this in mongodb database and also i showed the in this website.
      Here any user can buy the product, after buying it will take him to the login page. His order list will appear on the checkout page after log in, his order will be visible.f a user goes to the order page, he will be able to see his orders .
       If the admin wants, he can add any product and delete it again if he wants`,
      postTwo: `website name - Your IT Shop
      in this website i showed products and also showed a user log In form and also showed CheckOut page with input form with send this in mongodb database and also i showed the in this website.
      Here any user can buy the product, after buying it will take him to the login page. His order list will appear on the checkout page after log in, his order will be visible.f a user goes to the order page, he will be able to see his orders .
       If the admin wants, he can add any product and delete it again if he wants`,
    },
    {
      name: "Your It Shop",
      image: imageThree,
      githubOne: "https://github.com/riazakhanda017ksn/ema-john-with-react",
      githubTwo: "https://github.com/riazakhanda017ksn/It-shop-server",
      liveLink: "https://new-project-223bb.web.app/",
      postOne: `website name - Your IT Shop
      in this website i showed products and also showed a user log In form and also showed CheckOut page with input form with send this in mongodb database and also i showed the in this website.
      Here any user can buy the product, after buying it will take him to the login page. His order list will appear on the checkout page after log in, his order will be visible.f a user goes to the order page, he will be able to see his orders .
       If the admin wants, he can add any product and delete it again if he wants`,
      postTwo: `website name - Your IT Shop
      in this website i showed products and also showed a user log In form and also showed CheckOut page with input form with send this in mongodb database and also i showed the in this website.
      Here any user can buy the product, after buying it will take him to the login page. His order list will appear on the checkout page after log in, his order will be visible.f a user goes to the order page, he will be able to see his orders .
       If the admin wants, he can add any product and delete it again if he wants`,
    },
    {
      name: "Ema John",
      image: imageEleven,
      githubOne: "https://github.com/riazakhanda017ksn/ema-john-with-react",
      githubTwo:
        "https://github.com/riazakhanda017ksn/unrealistic-photography-server",
      liveLink: "https://web-of-xyz.web.app/",
      postOne: `in this website i showed products,product review,product remove and also showed a user log In form with email password and also google sign method and also showed 
      CheckOut page.Also i have store my data in mongoDB.also i have added tha payment gateway system`,
      postTwo: `This project's fully dynamic. There is a user log in form system, products management, Service
       add update order status, admin blogs section and also have admin panel etc.The web application is used to sell electronic
        products to clients.`,
    },
    {
      name: "Shipment Dynamic Form",
      image: image2,
      githubOne: "https://github.com/riazakhanda017ksn/ema-john-with-react",
      githubTwo:
        "https://github.com/riazakhanda017ksn/unrealistic-photography-server",
      liveLink: "https://web-of-xyz.web.app/shipment",
      postOne: `in this website i showed products,product review,product remove and also showed a user log In form with email password and also google sign method and also showed 
      CheckOut page.Also i have store my data in mongoDB.also i have added tha payment gateway system`,
      postTwo: `This project's fully dynamic. There is a user log in form system, products management, Service
       add update order status, admin blogs section and also have admin panel etc.The web application is used to sell electronic
        products to clients.`,
    },
    {
      name: " Dynamic Form Payment System",
      image: image3,
      githubOne: "https://github.com/riazakhanda017ksn/ema-john-with-react",
      githubTwo:
        "https://github.com/riazakhanda017ksn/unrealistic-photography-server",
      liveLink: "https://web-of-xyz.web.app/shipment",
      postOne: `in this website i showed products,product review,product remove and also showed a user log In form with email password and also google sign method and also showed 
      CheckOut page.Also i have store my data in mongoDB.also i have added tha payment gateway system`,
      postTwo: `This project's fully dynamic. There is a user log in form system, products management, Service
       add update order status, admin blogs section and also have admin panel etc.The web application is used to sell electronic
        products to clients.`,
    },

    {
      name: "The Doctor Portal Agency",
      image: imageFour,
      githubOne: "https://github.com/riazakhanda017ksn/doctor-application",
      githubTwo:
        "https://github.com/riazakhanda017ksn/doctor-application-server",
      liveLink: "https://the-doctor-portal-agency.web.app/",
      postOne: `This website is basically a medical agency type.Here is the Google 
      login form, the user can open his account if he wants by email or password or 
      according to the Google sign method.Here any user can make an appointment according
       to the date.And the user will be able to see his appointment accordingly and see his 
       appointment status.If the user wants, he can give that review and see the dashboard activities.
       If the admin wants, he can add a doctor.If the admin wants to add a new admin.Any user can contact 
       here if they want.Moreover, everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
      postTwo: `Here any user can make an appointment according to the date. 1.And the user will 
      be able to see his appointment accordingly and see his appointment status. 1.If the user wants,
       he can give that review and see the dashboard activities. 1.If the admin wants, he can add a doctor.
       If the admin wants to add a new admin.Any user can contact here if they want. 1.if they want.Moreover, 
       everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
    },
    {
      name: "The Doctor Portal",
      image: imageFive,
      githubOne: "https://github.com/riazakhanda017ksn/doctor-application",
      githubTwo:
        "https://github.com/riazakhanda017ksn/doctor-application-server",
      liveLink: "https://the-doctor-portal-agency.web.app/about",
      postOne: `This website is basically a medical agency type.Here is the Google 
      login form, the user can open his account if he wants by email or password or 
      according to the Google sign method.Here any user can make an appointment according
       to the date.And the user will be able to see his appointment accordingly and see his 
       appointment status.If the user wants, he can give that review and see the dashboard activities.
       If the admin wants, he can add a doctor.If the admin wants to add a new admin.Any user can contact 
       here if they want.Moreover, everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
      postTwo: `Here any user can make an appointment according to the date. 1.And the user will 
      be able to see his appointment accordingly and see his appointment status. 1.If the user wants,
       he can give that review and see the dashboard activities. 1.If the admin wants, he can add a doctor.
       If the admin wants to add a new admin.Any user can contact here if they want. 1.if they want.Moreover, 
       everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
    },
    {
      name: "Dynamic User Log In from",
      image: imageSix,
      githubOne: "https://github.com/riazakhanda017ksn/doctor-application",
      githubTwo:
        "https://github.com/riazakhanda017ksn/doctor-application-server",
      liveLink: "https://the-doctor-portal-agency.web.app/login",
      postOne: `This website is basically a medical agency type.Here is the Google 
      login form, the user can open his account if he wants by email or password or 
      according to the Google sign method.Here any user can make an appointment according
       to the date.And the user will be able to see his appointment accordingly and see his 
       appointment status.If the user wants, he can give that review and see the dashboard activities.
       If the admin wants, he can add a doctor.If the admin wants to add a new admin.Any user can contact 
       here if they want.Moreover, everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
      postTwo: `Here any user can make an appointment according to the date. 1.And the user will 
      be able to see his appointment accordingly and see his appointment status. 1.If the user wants,
       he can give that review and see the dashboard activities. 1.If the admin wants, he can add a doctor.
       If the admin wants to add a new admin.Any user can contact here if they want. 1.if they want.Moreover, 
       everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
    },
    {
      name: "Dynamic User Log In from",
      image: imageSix,
      githubOne: "https://github.com/riazakhanda017ksn/doctor-application",
      githubTwo:
        "https://github.com/riazakhanda017ksn/doctor-application-server",
      liveLink: "https://the-doctor-portal-agency.web.app/login",
      postOne: `This website is basically a medical agency type.Here is the Google 
      login form, the user can open his account if he wants by email or password or 
      according to the Google sign method.Here any user can make an appointment according
       to the date.And the user will be able to see his appointment accordingly and see his 
       appointment status.If the user wants, he can give that review and see the dashboard activities.
       If the admin wants, he can add a doctor.If the admin wants to add a new admin.Any user can contact 
       here if they want.Moreover, everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
      postTwo: `Here any user can make an appointment according to the date. 1.And the user will 
      be able to see his appointment accordingly and see his appointment status. 1.If the user wants,
       he can give that review and see the dashboard activities. 1.If the admin wants, he can add a doctor.
       If the admin wants to add a new admin.Any user can contact here if they want. 1.if they want.Moreover, 
       everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
    },
    {
      name: "Dynamic Appointment By Calender",
      image: imageSeven,
      githubOne: "https://github.com/riazakhanda017ksn/doctor-application",
      githubTwo:
        "https://github.com/riazakhanda017ksn/doctor-application-server",
      liveLink: "https://the-doctor-portal-agency.web.app/appointment",

      postOne: `This website is basically a medical agency type.Here is the Google 
      login form, the user can open his account if he wants by email or password or 
      according to the Google sign method.Here any user can make an appointment according
       to the date.And the user will be able to see his appointment accordingly and see his 
       appointment status.If the user wants, he can give that review and see the dashboard activities.
       If the admin wants, he can add a doctor.If the admin wants to add a new admin.Any user can contact 
       here if they want.Moreover, everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
      postTwo: `Here any user can make an appointment according to the date. 1.And the user will 
      be able to see his appointment accordingly and see his appointment status. 1.If the user wants,
       he can give that review and see the dashboard activities. 1.If the admin wants, he can add a doctor.
       If the admin wants to add a new admin.Any user can contact here if they want. 1.if they want.Moreover, 
       everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
    },
    {
      name: "Dynamic Appointment Form",
      image: imageEight,
      githubOne: "https://github.com/riazakhanda017ksn/doctor-application",
      githubTwo:
        "https://github.com/riazakhanda017ksn/doctor-application-server",
      liveLink: "https://the-doctor-portal-agency.web.app/appointment",
      postOne: `This website is basically a medical agency type.Here is the Google 
      login form, the user can open his account if he wants by email or password or 
      according to the Google sign method.Here any user can make an appointment according
       to the date.And the user will be able to see his appointment accordingly and see his 
       appointment status.If the user wants, he can give that review and see the dashboard activities.
       If the admin wants, he can add a doctor.If the admin wants to add a new admin.Any user can contact 
       here if they want.Moreover, everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
      postTwo: `Here any user can make an appointment according to the date. 1.And the user will 
      be able to see his appointment accordingly and see his appointment status. 1.If the user wants,
       he can give that review and see the dashboard activities. 1.If the admin wants, he can add a doctor.
       If the admin wants to add a new admin.Any user can contact here if they want. 1.if they want.Moreover, 
       everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
    },
    {
      name: "Dynamic User Review",
      image: imageNine,
      githubOne: "https://github.com/riazakhanda017ksn/doctor-application",
      githubTwo:
        "https://github.com/riazakhanda017ksn/doctor-application-server",
      liveLink: "https://the-doctor-portal-agency.web.app/review",
      postOne: `This website is basically a medical agency type.Here is the Google 
      login form, the user can open his account if he wants by email or password or 
      according to the Google sign method.Here any user can make an appointment according
       to the date.And the user will be able to see his appointment accordingly and see his 
       appointment status.If the user wants, he can give that review and see the dashboard activities.
       If the admin wants, he can add a doctor.If the admin wants to add a new admin.Any user can contact 
       here if they want.Moreover, everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
      postTwo: `Here any user can make an appointment according to the date. 1.And the user will 
      be able to see his appointment accordingly and see his appointment status. 1.If the user wants,
       he can give that review and see the dashboard activities. 1.If the admin wants, he can add a doctor.
       If the admin wants to add a new admin.Any user can contact here if they want. 1.if they want.Moreover, 
       everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
    },
    {
      name: "Dynamic Counter Dashboard",
      image: imageTen,
      githubOne: "https://github.com/riazakhanda017ksn/doctor-application",
      githubTwo:
        "https://github.com/riazakhanda017ksn/doctor-application-server",
      liveLink: "https://the-doctor-portal-agency.web.app/dashboardActivities",
      postOne: `This website is basically a medical agency type.Here is the Google 
      login form, the user can open his account if he wants by email or password or 
      according to the Google sign method.Here any user can make an appointment according
       to the date.And the user will be able to see his appointment accordingly and see his 
       appointment status.If the user wants, he can give that review and see the dashboard activities.
       If the admin wants, he can add a doctor.If the admin wants to add a new admin.Any user can contact 
       here if they want.Moreover, everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
      postTwo: `Here any user can make an appointment according to the date. 1.And the user will 
      be able to see his appointment accordingly and see his appointment status. 1.If the user wants,
       he can give that review and see the dashboard activities. 1.If the admin wants, he can add a doctor.
       If the admin wants to add a new admin.Any user can contact here if they want. 1.if they want.Moreover, 
       everything that is on the web site has
       been shown in a dynamic way.If the admin wants, he can delete the admin`,
    },
    {
      name: "Portfolio - React ",
      image: portfolio,
      githubOne: "https://github.com/riazakhanda017ksn/my-protfolio",
      githubTwo: "https://github.com/riazakhanda017ksn/my-protfolio",
      liveLink:
        "https://it-z-riaz-site.web.app/?fbclid=IwAR1_cu-hxb-Iz94ohOMAyer942M_wUmG8Kn8cfWqQHYsgmpO6qUBU7nfUJk",
      postOne: `It is a dynamic website built with React.Here the scroll is Navbar.
       Here is the video given in the banner.
       Moreover, there is a service section here.
       Moreover, there is a message box for dynamic user messaging.
       Here is the service section. Where the services are shown.
       Moreover there is a dynamic blog section.
       The biggest thing is that there is no way to show the user project gula.
      `,
      postTwo: `It is a dynamic website built with React.Here the scroll is Navbar.
      Here is the video given in the banner.
      Moreover, there is a service section here.
      Moreover, there is a message box for dynamic user messaging
      Here is the service section. Where the services are shown.
      Moreover there is a dynamic blog section.
      The biggest thing is that there is no way to show the user project gula.
      `,
    },
    {
      name: "Developer Portfolio - React ",
      image: image8,
      githubOne: "https://github.com/riazakhanda017ksn/Developer-Portfolio",
      githubTwo: "https://github.com/riazakhanda017ksn/Developer-Portfolio",
      liveLink: "https://friendly-pasteur-d692b5.netlify.app/",
      postOne: `It is a dynamic website built with React.Here the scroll is Navbar.
      Here is the image given in the banner.
      Moreover, there is a service section here.
      Moreover, there is a message box for dynamic user messaging.
      Here is the service section. Where the services are shown.
      Moreover there is a dynamic blog section.
      The biggest thing is that there is no way to show the user project gula.
     `,
      postTwo: `It is a dynamic website built with React.Here the scroll is Navbar.
     Here is the image given in the banner.
     Moreover, there is a service section here.
     Moreover, there is a message box for dynamic user messaging
     Here is the service section. Where the services are shown.
     Moreover there is a dynamic blog section.
     The biggest thing is that there is no way to show the user project gula.
     `,
    },
    {
      name: "Dressified with Redux",
      image: image4,
      githubOne: "https://github.com/riazakhanda017ksn/dressified_with_redux",
      githubTwo: "https://github.com/riazakhanda017ksn/dressified_with_redux",
      liveLink: "https://jolly-babbage-1e0d77.netlify.app/",
      postOne: `This is an e-commerce site named - Dressified.This site intends to sell fashionable cloths for male. Following are the features of this website.ReactJS in the front-end Css frameworks such as Bootstrap, Semantic UI AnimatedCSS for animation Redux for state management`,
      PostTwo: `This site intends to sell fashionable cloths for male. Following are the features of this website.ReactJS in the front-end Css frameworks such as Bootstrap, Semantic UI AnimatedCSS for animation Redux for state management`,
    },
    {
      name: "Product Details",
      image: image5,
      githubOne: "https://github.com/riazakhanda017ksn/dressified_with_redux",
      githubTwo: "https://github.com/riazakhanda017ksn/dressified_with_redux",
      liveLink: "https://jolly-babbage-1e0d77.netlify.app/",
      postOne: `This is an e-commerce site named - Dressified.This site intends to sell fashionable cloths for male. Following are the features of this website.ReactJS in the front-end Css frameworks such as Bootstrap, Semantic UI AnimatedCSS for animation Redux for state management`,
      PostTwo: `This site intends to sell fashionable cloths for male. Following are the features of this website.ReactJS in the front-end Css frameworks such as Bootstrap, Semantic UI AnimatedCSS for animation Redux for state management`,
    },
    {
      name: "User Post - Next js",
      image: image6,
      githubOne: "https://github.com/riazakhanda017ksn/Users_Post_Api",
      githubTwo: "https://github.com/riazakhanda017ksn/Users_Post_Api",
      liveLink: "https://users-post-api.vercel.app/",
      postOne: `This is my first blog website named 'Users-Post'.
      If someone clicks on a user's post box, it will show the details of that user. Here are 100 user details given in Pagination`,
      postTwo: `This is my first blog website named 'Users-Post'.
      If someone clicks on a user's post box, it will show the details of that user. Here are 100 user details given in Pagination`,
    },
    {
      name: "Search Country - Javascript ",
      image: image7,
      githubOne: "https://github.com/riazakhanda017ksn/problem-one",
      githubTwo: "https://github.com/riazakhanda017ksn/problem-one",
      liveLink:
        "https://riazakhanda017ksn.github.io/problem-one/?fbclid=IwAR1H3fKcZbmPbappSdNcux-TDNCjW1YSrekzHE1F2TA0PZpN5pIiyv8oIMA",
      postOne: `The project is fully dynamic.
      Here are given all the countries of the world. In which the flags and details of each country are given. Which is the website that is shown through the search.`,
      postTwo: `
         Here are given all the countries of the world. In which the flags and details of each country are given. Which is the website that is shown through the search.`,
    },
    {
      name: " Cooking - Javascript ",
      image: image9,
      githubOne: "https://github.com/riazakhanda017ksn/assingment-Five",
      githubTwo: "https://github.com/riazakhanda017ksn/assingment-Five",
      liveLink: "https://riazakhanda017ksn.github.io/assingment-Five/",
      postOne: `If you search the input field here, the user's favorite food will come. Clicking there will show the details of that food.`,
      postTwo: `If you search the input field here, the user's favorite food will come. Clicking there will show the details of that food.`,
    },
    {
      name: "Search Image - Javascript ",
      image: image10,
      githubOne: "https://github.com/riazakhanda017ksn/assingment-6",
      githubTwo: "https://github.com/riazakhanda017ksn/assingment-6",
      liveLink: "https://riazakhanda017ksn.github.io/assingment-6/",
      postOne: `This is an input field search. The user can select the image and create a slider. This website loader is a spinner`,
      postTwo: `This is an input field search. The user can select the image and create a slider. This website loader is a spinner`,
    },
    {
      name: "Vegetable - Static ",
      image: vg,
      githubOne:
        "https://github.com/riazakhanda017ksn/mobirise-template-2021-by-riaz",
      githubTwo:
        "https://github.com/riazakhanda017ksn/mobirise-template-2021-by-riaz",
      liveLink:
        "https://riazakhanda017ksn.github.io/mobirise-template-2021-by-riaz/?fbclid=IwAR31oaOJ9Vp8Kis4FrfmKswB-4asBBlmw6ZCse0RXKFLFr8TFMaHolYDdvo",
      postOne: `This website is a static website. Here a template has been coded and cloned in Mobiris. And I made it to design`,
      postTwo: `This website is a static website. Here a template has been coded and cloned in Mobiris. And I made it to design`,
    },
    {
      name: "The Doctor Agency - Static ",
      image: cl,
      githubOne:
        "https://github.com/riazakhanda017ksn/mobirise-template-2021-by-riaz",
      githubTwo:
        "https://github.com/riazakhanda017ksn/mobirise-template-2021-by-riaz",
      liveLink:
        "https://riazakhanda017ksn.github.io/mobirise-clinic/?fbclid=IwAR10wOc_KrjHFd0GG8FNf8EqksfqGLZ3aQafg-51CEG38g5-BbLwAKa6JYc",
      postOne: `This website is a static website. Here a template has been coded and cloned in Mobiris. And I made it to design`,
      postTwo: `This website is a static website. Here a template has been coded and cloned in Mobiris. And I made it to design`,
    },
    {
      name: "The Sol Rapper",
      image: imageSol,
      githubOne: "https://github.com/riazakhanda017ksn/Sol-Rapper",
      githubTwo: "https://github.com/riazakhanda017ksn/Sol-Rapper",
      liveLink: "https://riazakhanda017ksn.github.io/Sol-Rapper/",
      postOne: `This website is a static website. Here a template has been coded . And I made it to design`,
      postTwo: `This website is a static website. Here a template has been coded and . And I made it to design`,
    },
  ];
  ///
  ////pagination-work
  /*
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(1);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  ///
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const pageSliceProject = myAllProjects.slice(
    indexOfFirstPost,
    indexOfLastPost
  );*/

  //

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="project-bg">
      <div>
        <div className="my-services ">
          <div className="text-center">
            <h6>I have tried to show here my projects</h6>
            <h1> My Projects Are Here</h1>
            <p>
              Here I have tried to show my project gula.There are many projects
              here.I have given the live link and git hub link of the project.
              And you can see the details of these projects
            </p>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <Slider {...settings}>
            {myAllProjects.map((prp) => (
              <ProjectsDetails projects={prp}></ProjectsDetails>
            ))}
          </Slider>
        </div>
        {/* <br />
        <Pagination
          postPerPage={postPerPage}
          totalPosts={myAllProjects.length}
          paginate={paginate}
        ></Pagination> */}
      </div>
    </div>
  );
};

export default Project;
