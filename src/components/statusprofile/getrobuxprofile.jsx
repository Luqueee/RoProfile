import React, { useState, useEffect } from 'react';
import Limited from '../badges/Limited.astro';
import Mas100K from '../badges/Mas100k.astro';
import Verified from '../badges/Verified.astro';

function GetRobuxProfile({ origin, id }) {
    const [totalRobux, setTotalRobux] = useState(null);
    const [totalEuros, setTotalEuros] = useState(null);
    const [online, setOnlineStatus] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [badges, setBadges] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`${origin}/api/getassetsinfo/${id}`);
            const responsestatus = await fetch(
                `${origin}/api/statusprofile/${id}`
            );

            const statusdata = await responsestatus.json();
            setBadges(statusdata['badges']);

            const data = await response.json();

            if (data.error || data['collectibles'].length === 0) {
                window.location.reload(true);
            }

            setTotalRobux(data['total_robux']);
            setTotalEuros(data['in_euro']);
            setOnlineStatus(
                statusdata['isOnline'] ? 'En línea' : 'Desconectado'
            );
            setIsLoading(false);
        }

        fetchData();
    }, [origin, id]);

    if (isLoading) {
        return (
            <p class="lg:text-4xl text-[#ac965c] leading-relaxed mt-4 mb-6">
                Cargando datos...
            </p>
        );
    }

    return (
        <section>
            <section>
                <p class="lg:text-4xl text-gray-700 leading-relaxed mt-4 mb-6">
                    {totalRobux}
                    <span class="text-[#ac965c] font-bold"> Robux</span>
                </p>
                <p class="lg:text-4xl text-gray-700 leading-relaxed mt-4 mb-6">
                    {totalEuros}
                    <span class="text-[#95b46e] font-bold"> €</span>
                </p>
                {online === 'En línea' ? (
                    <p class="lg:text-4xl text-[#95b46e] leading-relaxed mt-4 mb-6 font-semibold">
                        <span class=" text-gray-700 font-normal">Estado: </span>
                        {online}
                    </p>
                ) : (
                    <p class="lg:text-4xl text-gray-700 leading-relaxed mt-4 mb-6 font-semibold">
                        <span class=" text-gray-700 font-normal">Estado: </span>
                        {online}
                    </p>
                )}
                <section className="flex gap-6"></section>
            </section>
        </section>
    );
}

export default GetRobuxProfile;
