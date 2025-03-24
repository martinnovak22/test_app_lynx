import './App.css';
import {useState} from '@lynx-js/react';
import {Counter} from './Counter.jsx';
import {TodoList} from './TodoList.jsx';

export function App() {
    const [activeTab, setActiveTab] = useState<'counter' | 'todo'>('counter');
    console.log(activeTab)
    return (
        <view>
            <view className='Background'/>
            <view className='App'>
                <view className="tab-bar">
                    <TabButton
                        label="Counter"
                        active={activeTab === 'counter'}
                        onTap={() => setActiveTab('counter')}
                    />
                    <TabButton
                        label="Todo"
                        active={activeTab === 'todo'}
                        onTap={() => setActiveTab('todo')}
                    />
                </view>

                <view className="tab-content">
                    {activeTab === 'counter' ? <Counter/> : <TodoList/>}
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
        <view
            className={`btn tab-btn ${active ? 'tab-active' : ''}`}
            bindtap={onTap}
        >
            <text>{label}</text>
        </view>
    );
}
