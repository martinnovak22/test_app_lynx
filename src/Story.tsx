import {useState} from '@lynx-js/react';
import {SceneSVG} from "./SceneSVG.js";

export function Story() {
    const [sceneIndex, setSceneIndex] = useState(0);
    const [fadeClass, setFadeClass] = useState('');

    const goToScene = (index: number) => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setSceneIndex(index);
            setFadeClass('fade-in');
            setTimeout(() => setFadeClass(''), 400);
        }, 300);
    };

    const current = scenes[sceneIndex];
    console.log("xd")
    return (
        <view className={`story ${fadeClass}`}>
            <SceneSVG type={current.svg}/>

            <text className="title">{current.title}</text>

            <view className="buttons">
                {current.choices.length === 0 ? (
                    <view className="btn story-btn" bindtap={() => goToScene(0)}>
                        <text>Restart</text>
                    </view>
                ) : (
                    current.choices.map((choice, i) => (
                        <view
                            key={i}
                            className="btn story-btn"
                            bindtap={() => goToScene(choice.next)}
                        >
                            <text>{choice.text}</text>
                        </view>
                    ))
                )}
            </view>
        </view>
    );
}

const scenes = [
    {
        title: 'You wake up in the middle of a glowing forest. The air hums.',
        svg: 'fog',
        choices: [
            {text: 'Call out for help', next: 1},
            {text: 'Walk deeper into the trees', next: 2},
        ],
    },
    {
        title: 'A faint voice answers… then silence. Something is listening.',
        svg: 'figure',
        choices: [
            {text: 'Follow the voice', next: 3},
            {text: 'Hide behind a tree', next: 4},
        ],
    },
    {
        title: 'You find a mossy path illuminated by floating lights.',
        svg: 'mystic-path',
        choices: [
            {text: 'Follow the lights', next: 5},
            {text: 'Ignore them', next: 6},
        ],
    },
    {
        title: 'You reach a clearing. A tall hooded figure stands silently.',
        svg: 'figure',
        choices: [
            {text: 'Speak to it', next: 7},
            {text: 'Back away slowly', next: 8},
        ],
    },
    {
        title: 'A shadow passes overhead. Something large is above you.',
        svg: 'sleep',
        choices: [
            {text: 'Run', next: 9},
            {text: 'Look up', next: 10},
        ],
    },
    {
        title: 'The lights guide you to a glowing portal pulsing softly.',
        svg: 'portal',
        choices: [
            {text: 'Enter the portal', next: 11},
            {text: 'Turn around', next: 12},
        ],
    },
    {
        title: 'The trees close in. You feel… watched.',
        svg: 'fog',
        choices: [
            {text: 'Climb a tree', next: 13},
            {text: 'Sit and wait', next: 14},
        ],
    },
    {
        title: 'The figure lifts its hood… it’s you. But older.',
        svg: 'mirror',
        choices: [
            {text: 'Touch them', next: 15},
            {text: 'Run away', next: 16},
        ],
    },
    {
        title: 'You step back — and trip into the portal from behind.',
        svg: 'portal',
        choices: [],
    },
    {
        title: 'You run endlessly. The forest never ends.',
        svg: 'fog',
        choices: [],
    },
    {
        title: 'It’s a massive owl with glowing eyes. It speaks your name.',
        svg: 'owl',
        choices: [
            {text: 'Answer it', next: 17},
            {text: 'Stay silent', next: 18},
        ],
    },
    {
        title: 'You step into the portal and wake up in your bed. Was it a dream?',
        svg: 'sleep',
        choices: [],
    },
    {
        title: 'You turn around. The path is gone. You are alone.',
        svg: 'fog',
        choices: [],
    },
    {
        title: 'From above, you see paths. You now know the way out.',
        svg: 'mystic-path',
        choices: [],
    },
    {
        title: 'You fall asleep. Something curls beside you.',
        svg: 'sleep',
        choices: [],
    },
    {
        title: 'Your hand passes through them. A memory? A ghost?',
        svg: 'mirror',
        choices: [],
    },
    {
        title: 'You run. You are not ready to know.',
        svg: 'fog',
        choices: [],
    },
    {
        title: 'You answer. It tells you the secret of the woods.',
        svg: 'owl',
        choices: [],
    },
    {
        title: 'You stay silent. It closes its eyes. You are forgotten.',
        svg: 'owl',
        choices: [],
    },
];

