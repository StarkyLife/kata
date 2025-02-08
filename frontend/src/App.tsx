import { App, Button } from 'antd';
import classes from './App.module.css';

function MyApp() {
  return (
    <App>
      <div className={classes.base}>
        <Button className="bg-black" variant="outlined">
          Hello
        </Button>
      </div>
    </App>
  );
}

export default MyApp;
