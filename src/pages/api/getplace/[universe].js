export async function GET({ params }) {
    const universe = params.universe;
    console.log(universe);
    try {
        const response = await fetch(
            `https://games.roblox.com/v1/games?universeIds=${universe}`
        );
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        return new Response(JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
