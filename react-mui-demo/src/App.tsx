import './App.css';
import MuiButton from './components/MuiButton';
import MUISelect from './components/MUISelect';
import MuiTextField from './components/MuiTextField';
import { MuiTypography } from './components/MuiTypography';

function App() {
  return (
    <div className="App">
      <MuiTypography />
      <MuiButton />
      <MuiTextField />
      <MUISelect />
    </div>
  );
}

export default App;
