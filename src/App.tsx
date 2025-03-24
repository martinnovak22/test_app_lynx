import './App.css';
import {useState} from '@lynx-js/react';
import {Counter} from './Counter.jsx';
import {TodoList} from './TodoList.jsx';
import {Story} from './Story.jsx';

export function App() {
    const [activeTab, setActiveTab] = useState<'counter' | 'todo' | 'story'>('counter');

    return (
        <view>
            <view className='Background'/>
            <view className='App'>
                <view className="tab-bar">
                    <TabButton label="Counter" active={activeTab === 'counter'} onTap={() => setActiveTab('counter')}/>
                    <TabButton label="Todo" active={activeTab === 'todo'} onTap={() => setActiveTab('todo')}/>
                    <TabButton label="Story" active={activeTab === 'story'} onTap={() => setActiveTab('story')}/>
                </view>

                <view className="tab-content">
                    {activeTab === 'counter' && <Counter/>}
                    {activeTab === 'todo' && <TodoList/>}
                    {activeTab === 'story' && <Story/>}
                </view>
            </view>
        </view>
    );
}

type TabProps = {
    label: string;
    active: boolean;
    onTap: () => void;
};

function TabButton({label, active, onTap}: TabProps) {
    return (
        <view className={`btn tab-btn ${active ? 'tab-active' : ''}`} bindtap={onTap}>
            <text>{label}</text>
        </view>
    );
}
