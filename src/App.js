import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

    const tasks =
        [
            {
                id: 1,
                text: 'Doctors Appointment',
                reminder: true
            },
            {
                id: 2,
                text: 'Meeting at School',
                reminder: true
            },
            {
                id: 3,
                text: 'Food Shopping',
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
