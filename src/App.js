import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

    const tasks =
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                day: 'Feb 5th 2:20pm',
                reminder: true
            },
            {
                id: 2,
                text: 'Meeting at School',
                day: 'Feb 7th 8:20pm',
                reminder: true
            },
            {
                id: 3,
                text: 'Food Shopping',
                day: 'Feb 9th 9:20pm',
                reminder: true
            },
        ];

  return (
    <div className="container">
        <Header/>
        <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
