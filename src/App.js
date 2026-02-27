import React, { Component } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

class App extends Component {
  state = {
    selectedExercise: null,
  };

  exercises = [
    { id: 1, name: 'Push Ups', type: 'repetition' },
    { id: 2, name: 'Plank', type: 'duration' },
    { id: 3, name: 'Squats', type: 'repetition' },
    { id: 4, name: 'Wall Sit', type: 'duration' },
  ];

  handleSelect = (exercise) => {
    this.setState({ selectedExercise: exercise });
  };

  renderExerciseScreen() {
    const { selectedExercise } = this.state;

    if (!selectedExercise) {
      return <p>Please select an exercise.</p>;
    }

    switch (selectedExercise.type) {
      case 'repetition':
        return <RepetitionExercise name={selectedExercise.name} />;
      case 'duration':
        return <DurationExercise name={selectedExercise.name} />;
      default:
        return <p>Unknown exercise type.</p>;
    }
  }

  render() {
    const { selectedExercise } = this.state;

    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        
        {!selectedExercise && (
          <div>
            <h1>Select an Exercise</h1>
            <div style={{ marginTop: 20 }}>
              {this.exercises.map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => this.handleSelect(ex)}
                  style={{
                    marginRight: 10,
                    marginBottom: 10,
                    padding: '10px 15px',
                    borderRadius: 5,
                    border: '1px solid #007BFF',
                    backgroundColor: '#FFF',
                    color: '#007BFF',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s, color 0.3s',
                  }}
                >
                  {ex.name}
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedExercise && (
          <div>
            <button
              onClick={() => this.setState({ selectedExercise: null })}
              style={{
                marginBottom: 20,
                padding: '5px 10px',
                cursor: 'pointer',
                borderRadius: 5,
              }}
            >
              ← Back to Menu
            </button>
            {this.renderExerciseScreen()}
          </div>
        )}
      </div>
    );
  }
}

export default App;