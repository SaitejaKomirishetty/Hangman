const HEAD = (
    <div
        style={{
            height: '25px',
            width: '25px',
            borderRadius: '100%',
            border: '10px solid red',
            position: 'absolute',
            top: 25,
            right: -18,
        }}
    />
);
const BODY = (
    <div
        style={{
            height: '50px',
            width: '10px',
            background: 'red',
            position: 'absolute',
            top: 70,
            right: 0,
        }}
    />
);
const RIGHT_ARM = (
    <div
        style={{
            height: '10px',
            width: '50px',
            background: 'red',
            position: 'absolute',
            top: 75,
            right: -50,
            rotate: '-30deg',
            transformOrigin: 'left bottom',
        }}
    />
);
const LEFT_ARM = (
    <div
        style={{
            height: '10px',
            width: '50px',
            background: 'red',
            position: 'absolute',
            top: 75,
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
            width: '50px',
            background: 'red',
            position: 'absolute',
            top: 100,
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
            width: '50px',
            background: 'red',
            position: 'absolute',
            top: 100,
            right: -40,
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
                    height: '26px',
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
                    height: '150px',
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
