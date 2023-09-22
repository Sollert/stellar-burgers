import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

import {burgerIngredientsConfig} from '../../utils/config'

import BurgerConstructor from '../../components/burger-constructor/burger-constructor'
import BurgerIngredients from '../../components/burger-ingredients/burger-ingredients'

import styles from './home.module.css'

export default function Home() {
  return (
    <DndProvider backend={HTML5Backend}>
      <main className={styles['home-container']}>
        <BurgerIngredients config={burgerIngredientsConfig}/>
        <BurgerConstructor/>
      </main>
    </DndProvider>
  )
}
