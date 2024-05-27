export async function GET({ params }) {
    const name = params.name;
    const url = 'https://users.roblox.com/v1/usernames/users';

    try {
        const requestBody = JSON.stringify({
            usernames: [name],
            excludeBannedUsers: true,
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
            return null;
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
