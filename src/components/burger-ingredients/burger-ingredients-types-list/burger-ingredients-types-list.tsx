import BurgerIngredientsType from '../burger-ingredients-type/burger-ingredients-type'

import styles from './burger-ingredients-types-list.module.css'
import {BurgerIngredientsTypesListProps} from "../../../services/types/types";

const BurgerIngredientsTypesList = ({
                                      config,
                                      bunRef,
                                      sauceRef,
                                      mainRef,
                                      onScrollHandler,
                                      scrollContainerRef,
                                    }: BurgerIngredientsTypesListProps) => {
  return (
    <ul
      className={`${styles.types__list} custom-scroll`}
      onScroll={onScrollHandler}
      ref={scrollContainerRef}
    >
      <BurgerIngredientsType config={config} type={'bun'} ref={bunRef}/>
      <BurgerIngredientsType config={config} type={'sauce'} ref={sauceRef}/>
      <BurgerIngredientsType config={config} type={'main'} ref={mainRef}/>
    </ul>
  )
}


export default BurgerIngredientsTypesList
