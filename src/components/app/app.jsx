import styles from './app.module.css';
import { getIngredientsData } from '../../utils/api';
import { burgerIngredientsConfig } from '../../utils/config';

import AppHeader from '../app-header/app-header';
import BurgerIngredients from '../burger-ingredients/burger-ingredients';
import BurgerConstructor from '../burger-constructor/burger-constructor';
import { useEffect, useState } from 'react';

function App() {
  const [ingredientsData, setIngredientsData] = useState([]);

  useEffect(() => {
    const getIngredients = async () => {
      try {
        const res = await getIngredientsData();
        setIngredientsData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getIngredients();
  }, []);

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients
          data={ingredientsData}
          config={burgerIngredientsConfig}
        />
        <BurgerConstructor data={ingredientsData} />
      </main>
    </>
  );
}

export default App;
