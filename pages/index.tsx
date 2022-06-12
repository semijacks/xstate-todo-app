import { useMachine } from '@xstate/react';
import type { NextPage } from 'next';
import { myMachine } from '../machines/myFirstMachine';

const Home: NextPage = () => {
  const [state, send] = useMachine(myMachine);
  return (
    <div>
      {JSON.stringify(state.value)}
      <button onClick={() => send('MOUSEOVER')}>Hover</button>
      <button onClick={() => send('MOUSEOUT')}>Unhover</button>
    </div>
  );
};

export default Home;
