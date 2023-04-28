import styles from './app.module.css';
import { data } from '../../utils/data';
import { sortData } from '../../utils/utils';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';

function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={sortData(data)} />
        <div></div>
      </main>
    </>
  );
}

export default App;
