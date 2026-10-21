//example data
// objects need to be formatted differently depending on the operatiob being preformed                                


// post needs the team and a body. body holds all the data we're adding

//const deleteObj = {'team': 2, 'id': 2}
// delete needs a team and an id

// const updateObj = {'type': 'task', 'level': 2, 'points': 0, 'date': date, 'content': 'take out trash'}
// update needs just the data that goes into body
// it gets team and id from the query argument

//sendRequest needs the operation in "opp" the object in "obj"
// "query" is only for updates since the link needs to end differently
// "query" can be left empty if you're not using update


export default async function sendRequest(opp, object, query )
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
            body: JSON.stringify(object),
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