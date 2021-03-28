const Task = ({task, onToggle}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h2>{task.text}</h2>
            <p>{task.day}</p>
        </div>
    )
};

export default Task;