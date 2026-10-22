import sendRequest from "./sendRequest";

export default async function saveHandle(selectedTask, update, setSave, setError, setReload, setTask)
{

    setError('');
    setSave('loading');
    setReload(false)
    try
    {
        await sendRequest('update', update, `?teamId=2&recordId=${selectedTask.id}`);
        setSave('Success!')
        setReload(true)
        setTask({'id': selectedTask.id, 'data_json': update})
    }
    catch (err)
    {
        console.error(err);
        setError(`Couldn't save, try again`);
    }
}