const HEAD = (
    <div
        style={{
            height: '50px',
            width: '50px',
            borderRadius: '100%',
            border: '10px solid black',
            position: 'absolute',
            top: 50,
            right: -30,
        }}
    />
);
const BODY = (
    <div
        style={{
            height: '100px',
            width: '10px',
            background: 'black',
            position: 'absolute',
            top: 120,
            right: 0,
        }}
    />
);
const RIGHT_ARM = (
    <div
        style={{
            height: '10px',
            width: '100px',
            background: 'black',
            position: 'absolute',
            top: 150,
            right: -100,
            rotate: '-30deg',
            transformOrigin: 'left bottom',
        }}
    />
);
const LEFT_ARM = (
    <div
        style={{
            height: '10px',
            width: '100px',
            background: 'black',
            position: 'absolute',
            top: 150,
            right: 10,
            rotate: '30deg',
            transformOrigin: 'right bottom',
        }}
    />
);
const RIGHT_LEG = (
    <div
        style={{
            height: '10px',
            width: '100px',
            background: 'black',
            position: 'absolute',
            top: 210,
            right: 0,
            rotate: '-60deg',
            transformOrigin: 'right bottom',
        }}
    />
);
const LEFT_LEG = (
    <div
        style={{
            height: '10px',
            width: '100px',
            background: 'black',
            position: 'absolute',
            top: 210,
            right: -90,
            rotate: '60deg',
            transformOrigin: 'left bottom',
        }}
    />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG];

type HangmanDrawingProps = {
    numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: HangmanDrawingProps) => {
    return (
        <div style={{ position: 'relative' }}>
            {BODY_PARTS.slice(0, numberOfGuesses)}
            <div
                style={{
                    height: '51px',
                    width: '10px',
                    background: 'black',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
            />
            <div
                style={{
                    height: '10px',
                    width: '155px',
                    background: 'black',
                    marginLeft: '120px',
                }}
            />
            <div
                style={{
                    height: '350px',
                    width: '10px',
                    background: 'black',
                    marginLeft: '120px',
                }}
            />
            <div
                style={{ height: '10px', width: '250px', background: 'black' }}
            />
        </div>
    );
};

export default HangmanDrawing;
