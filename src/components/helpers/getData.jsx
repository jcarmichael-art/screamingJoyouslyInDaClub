

export default async function getData()
{

    const chats = []
    const tasks = []


    try
    {

        const responsePromise = await fetch('https://basecampgenericapi.onrender.com/get/all?teamId=2')

        if (!responsePromise.ok)
        {
            throw new Error(`HTTP error! Status: ${responsePromise.status}`)
        }

        const data = await responsePromise.json()

        for (let i = 0; i < data.response.length; i++)
        {
            if (data.response[i].data_json?.type === 'chat')
            {
                chats.push(data.response[i])
            }
            else if (data.response[i].data_json?.type === 'task')
            {
                tasks.push(data.response[i])
            }
        }

        return { chats, tasks }
    } catch (error)
    {
        console.error(error.message)
        throw error
    }
}