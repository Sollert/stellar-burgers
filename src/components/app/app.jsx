import styles from './app.module.css';
import { data } from '../../utils/data';
import { burgerIngredientsConfig } from '../../utils/config';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';

function App() {
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients data={data} config={burgerIngredientsConfig} />
        <BurgerConstructor data={data} />
      </main>
    </>
  );
}

export default App;
