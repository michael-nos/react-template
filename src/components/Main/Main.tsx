import { useCounter } from '@/hooks/useCounter';

export const Main = () => {
  const { count, incrementCount } = useCounter();

  return (
    <div>
      <h1>This is the Main component</h1>
      <p>Count: {count}</p>
      <button onClick={() => incrementCount()}>Increment count :)</button>
    </div>
  );
};
