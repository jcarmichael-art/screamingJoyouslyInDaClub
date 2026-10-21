import sendRequest from "./sendRequest";

export default async function saveHandle(setReload, setSave, setError, object)
{
    const delObj = {};
    delObj.team = 2;
    delObj.id = object.id;

    setError('');
    setSave('loading');
    setReload(false);
    try
    {
        await sendRequest('delete', delObj, '');
        setSave('Success!');
        setReload(true);
    }
    catch (err)
    {
        console.error(err);
        setError(`Couldn't save, try again`);
        setSave('Failure');
    }
}