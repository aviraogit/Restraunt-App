import React from "react";

import PopularItem from "../pages/PopularItem";

const Popular = () => {
  const data = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&w=1000&q=80",
      title: "Tasty Burger",
      price: 30,
      count: 1,
    },
    {
      id: 2,
      image: "https://st4.depositphotos.com/10614052/25239/i/600/depositphotos_252391082-stock-photo-sweet-chocolate-cake-on-wooden.jpg",
      title: "Tasty cake",
      price: 20,
      count: 1,
    },
    {
      id: 3,
      image: "https://www.shutterstock.com/image-photo/traditional-indian-snack-chakli-chakali-260nw-315770030.jpg",
      title: "Tasty Snaks",
      price: 25,
      count: 1,
    },
    {
      id: 4,
      image: "https://natashaskitchen.com/wp-content/uploads/2020/05/Vanilla-Cupcakes-3.jpg",
      price: 19,
      title: "Tasty Cupckae",
      count: 1,
    },
    {
      id: 5,
      image: "https://media.istockphoto.com/id/157567573/photo/clear-full-glass-of-mango-juice-with-mangos-laying-beside.jpg?s=612x612&w=0&k=20&c=8QkLax3AqFfwt1H9VQ_50dZ5QiAQ4bsxZnkHxDHrMSg=",
      title: "Mango Juice",
      price: 20,
      count: 1,
    },
    {
      id: 6,
      image: "https://media.istockphoto.com/id/1161805849/photo/strawberry-vanilla-chocolate-ice-cream-with-waffle-cone-on-marble-stone-backgrounds.jpg?s=612x612&w=0&k=20&c=BXObHKE0gbA2autsMZGFeEmK2xGKYdJBbM1_ig0Boyk=",
      title: "Ice-cream",
      price: 10,
      count: 1,
    },

    {
      id: 7,
      image:
        "https://media.gettyimages.com/id/676294571/photo/indian-food.jpg?s=612x612&w=0&k=20&c=UAcZ11oPIbnwX-BzRxKaGhv7oUfFT-6vWDlvIn01nQs=",
      title: "Butter Paratha",
      price: 20,
      count: 1,
    },

    {
      id: 8,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/nes3txznzu6kzwthhy3e",
      title: "Laccha Paratha",
      price: 35,
      count: 1,
    },

    {
      id: 9,
      image:
        "http://lh3.googleusercontent.com/DBDU-r_yg-_5yapA_UNy6RhZQWmd7jEAEpF8BVCJZGWSWhg-SHk85RDpAUv_jECrQhhXEG3_gBDicf8kd2CkGMq7CQ=s750",
      title: "Shahi Paratha",
      price: 20,
      count: 1,
    },
  ];

  return (
    <>
      <h1 className="heading">
        most <span>popular </span> foods
      </h1>
      <section className="popular" id="popular">
        {data.map((popularData) => (
          <PopularItem key={popularData.id} popularData={popularData} />
        ))}
      </section>
    </>
  );
};

export default Popular;
