import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const container = document.getElementById('app');
// Disable non null assetion rules as React ask to do it (https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(<App />);
