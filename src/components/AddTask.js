import {useState} from 'react';

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault();
        if(!text){
            alert('Please add task');
            return;
        }
        onAdd({text, day, reminder});
        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Task</label>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div>
                <label>Date & Time</label>
                <input
                    type="text"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div>
                <label>Set Reminder</label>
                <input
                    type="checkbox"
                    checked={reminder}
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input
                type="submit"
                value="Save Task"
                className="btn"
            />
        </form>
    )
}

export default AddTask;