import sendRequest from "./sendRequest";

export default async function saveHandle(setReload, setSave, setError, object)
{

    setError('');
    setSave('loading');
    setReload(false)
    try
    {
        await sendRequest('post', object, '');
        setSave('Success!')
        setReload(true)
    }
    catch (err)
    {
        console.error(err);
        setError(`Couldn't save, try again`);
    }
}