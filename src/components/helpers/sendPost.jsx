import sendRequest from "./sendRequest";

export default async function saveHandle(setSave, setError, object)
{

    setError('');
    setSave('');

    try
    {
        await sendRequest('post', object, '');
        setSave('Success!')
    }
    catch (err)
    {
        console.error(err);
        setError(`Couldn't save, try again`);
    }
}