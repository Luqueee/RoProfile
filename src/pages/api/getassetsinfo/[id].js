export async function GET({ params }) {
    const id = params.id;
    try {
        const response = await fetch(
            `https://roblox-account-value-api.sly.ee/api/collectibles-account-value?userid=${id}`
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
