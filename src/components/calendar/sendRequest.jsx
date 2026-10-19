

export default async function sendRequest(opp, obj, query )
{
    if (!query)
    {
        query = ''
    }
    try
    {
        const response = await fetch(`https://basecampgenericapi.onrender.com/${opp}/data${query}`, 
        {
            method: 'POST',
            headers: 
                { 
                    'Content-Type': 'application/json' 
                },
            body: JSON.stringify(obj),
        })        

        if (!response.ok) 
        {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data)

        return data;
    } catch (error)
        {
            console.error('Fetch op failed:', error.message)
            throw error
        }
}