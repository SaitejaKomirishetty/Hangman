import { useCallback, useEffect, useState } from 'react';
import words from './wordList.json';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';

function App() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [wordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)];
    });
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

    const incorrectLetters = guessedLetters.filter(
        (letter) => !wordToGuess.includes(letter)
    );
    const handleRestart = () => {
        window.location.reload();
    };

    const isLoser = incorrectLetters.length >= 6;
    const isWinner = wordToGuess
        .split('')
        .every((letter) => guessedLetters.includes(letter));

    const addGuessedLetter = useCallback(
        (letter: string) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner) return;
            setGuessedLetters((currentLetters) => [...currentLetters, letter]);
        },
        [guessedLetters, isLoser, isWinner]
    );

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key;
            if (!key.match(/^[a-z]$/)) {
                return;
            }
            e.preventDefault();
            addGuessedLetter(key);
        };
        document.addEventListener('keypress', handler);
        return () => {
            document.removeEventListener('keypress', handler);
        };
    }, [guessedLetters]);

    return (
        <div
            style={{
                maxWidth: '800px',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                margin: '0 auto',
                alignItems: 'center',
                overflowY: 'auto',
            }}
        >
            <div style={{ fontSize: '5rem' }}>Hangman</div>
            <div
                style={{
                    fontSize: isSmallScreen ? '1rem' : '2rem',
                    whiteSpace: 'nowrap',
                }}
            >
                Guess the correct word and save the man ↓
            </div>
            <div style={{ fontSize: '2rem', textAlign: 'center' }}>
                {isWinner && 'winner'}
                {isLoser && 'Nice Try'}{' '}
                {(isLoser || isWinner) && (
                    <button onClick={() => handleRestart()}>Restart</button>
                )}
            </div>
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    gap: '5rem',
                    flexDirection: isSmallScreen ? 'column' : 'row',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
                    <HangmanWord
                        reveal={isLoser}
                        guessedLetters={guessedLetters}
                        wordToGuess={wordToGuess}
                    />
                </div>
                <div
                    style={{
                        alignSelf: 'stretch',
                        width: '100%',
                    }}
                >
                    <Keyboard
                        disabled={isLoser || isWinner}
                        activeLetters={guessedLetters.filter((letter) =>
                            wordToGuess.includes(letter)
                        )}
                        inactiveLetters={incorrectLetters}
                        addGuessedLetter={addGuessedLetter}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
