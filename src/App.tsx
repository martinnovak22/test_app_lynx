import { useEffect } from '@lynx-js/react'
import './App.css'
import {Counter} from "./Counter.jsx";

export function App() {

  useEffect(() => {
    console.info('Hello, ReactLynx');
  }, [])

  return (
    <view>
      <view className='Background' />
      <view className='App'>
          <Counter/>
      </view>
    </view>
  )
}
