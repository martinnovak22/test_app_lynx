import './App.css';
import {useState} from '@lynx-js/react';

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [animateClass, setAnimateClass] = useState('');

    const triggerAnimation = () => {
        setAnimateClass('bounce');
        setTimeout(() => {
            setAnimateClass('');
        }, 300);
    };

    const increment = () => {
        setCount(count + 1);
        triggerAnimation();
    };

    const decrement = () => {
        setCount(count - 1);
        triggerAnimation();
    };

    const reset = () => {
        setCount(0);
        triggerAnimation();
    };

    return (
        <view className="counter">
            <text className={`title ${animateClass}`}>Count: {count}</text>

            <view className="buttons">
                <Button text={'+1'} onTap={increment}/>
                <Button text={'-1'} onTap={decrement}/>
                <Button text={'Reset'} onTap={reset}/>
            </view>
        </view>
    );
};

type BtnProps = {
    text: string;
    onTap: () => void;
};

const Button = ({text, onTap}: BtnProps) => {
    return (
        <view className="btn" bindtap={onTap}>
            <text>{text}</text>
        </view>
    );
};
