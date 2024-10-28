import React from 'react';
import './GameOfLives.css';
import GameOfLives from './GameOfLives';

function GameOfLifeMain() {
    return (
        <div className="App my-5">
            <header className="App-header">
                <h1 className='mb-3'>Game of Life</h1>
                <GameOfLives />
            </header>
        </div>
    );
}

export default GameOfLifeMain;
