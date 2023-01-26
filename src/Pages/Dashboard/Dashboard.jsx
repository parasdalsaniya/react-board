import React, { useEffect, useState } from "react";
import { useGlobalLoading } from "../../assets/Context/useLoader";
import DashboardCard from "../../component/DashboardCard/DashboardCard";
import Navbar from "../../component/Navbar/Navbar";
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
    const { setGlobalLoading } = useGlobalLoading();
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        setGlobalLoading(true);
        const data = await getAllCards();
        setCards(data);
        setGlobalLoading(false);
    };

    return (
        <>
            <Navbar />
            <div className="dashboard-container">
                <header>My boards</header>
                <main>
                    {cards.map((card, i) => (
                        <DashboardCard
                            key={i}
                            card={card}
                            reloadData={getData}
                            navigateTo={`/card/${card.id}`}
                        />
                    ))}
                </main>
            </div>
        </>
    );
};

export default Dashboard;
