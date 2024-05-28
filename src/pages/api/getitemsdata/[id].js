export async function GET({ params }) {
    const id = params.id;
    const url = 'https://catalog.roblox.com/v1/catalog/items/details';

    try {
        const requestBody = JSON.stringify({
            items: [{ itemType: 1, id: id }], // itemType replaced from 'Asset' to 1
        });

        const headers = {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: headers,
                body: requestBody,
            });

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
            console.error('Error:', error);
            return new Response(JSON.stringify({ error: error.message }), {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
