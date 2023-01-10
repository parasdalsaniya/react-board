import React, { useEffect, useState } from "react";
import DashboardCard from "../../component/DashboardCard/DashboardCard";
import { getAllCards } from "../../Services/Firebase";
import "./Dashboard.scss";

const cards = [
    {
        title: "Earth Changes and Journeys",
        color: "#CAF8FF",
    },
    {
        title: "Eating Right",
        color: "#FFEDC1",
    },
];

const Dashboard = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        const data = await getAllCards();
        setCards(data);
    };

    return (
        <div className="dashboard-container">
            <header>My boards</header>
            <main>
                {cards.map((card, i) => (
                    <DashboardCard card={card} key={i}/>
                ))}
            </main>
        </div>
    );
};

export default Dashboard;
