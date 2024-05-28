export async function GET({ params }) {
    const id = params.id;
    const maxRetries = 5;
    let retries = 0;

    while (retries < maxRetries) {
        try {
            const response = await fetch(
                `https://roblox-account-value-api.sly.ee/api/collectibles-account-value?userid=${id}`
            );
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            //console.log(data);
            return new Response(JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        } catch (error) {
            retries++;
            if (retries === maxRetries) {
                return new Response(JSON.stringify({ error: error.message }), {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
            }
        }
    }
}
