import {useRef, useState} from 'react'

import BurgerIngredientsTabs from './burger-ingredients-tabs/burger-ingredients-tabs'
import BurgerIngredientsTypesList
  from './burger-ingredients-types-list/burger-ingredients-types-list'


import styles from './burger-ingredients.module.css'
import {BurgerIngredientsProps} from "./burger-ingredients.types";

const BurgerIngredients = ({config}: BurgerIngredientsProps) => {
  const [currentTab, setCurrentTab] = useState('Булки')

  const scrollContainerRef = useRef<HTMLUListElement>(null)
  const bunRef = useRef<HTMLDivElement>(null)
  const sauceRef = useRef<HTMLDivElement>(null)
  const mainRef = useRef<HTMLDivElement>(null)

  const onScrollHandler = () => {
    const currentScroll = scrollContainerRef.current?.scrollTop
    if (typeof currentScroll !== 'undefined' && bunRef.current && sauceRef.current && mainRef.current) {
      const bunTitlePos = Math.abs(bunRef.current.offsetTop - currentScroll)
      const sauceTitlePos = Math.abs(sauceRef.current.offsetTop - currentScroll)
      const mainTitlePos = Math.abs(mainRef.current.offsetTop - currentScroll)

      if (bunTitlePos < sauceTitlePos) setCurrentTab('Булки')
      if (sauceTitlePos < bunTitlePos && sauceTitlePos < mainTitlePos)
        setCurrentTab('Соусы')
      if (mainTitlePos < sauceTitlePos) setCurrentTab('Начинки')
    }
  }

  const setCurrentType = (evt: string) => {
    setCurrentTab(evt)

    if (evt === 'Булки') {
      bunRef.current?.scrollIntoView({behavior: 'smooth'})
    } else if (evt === 'Соусы') {
      sauceRef.current?.scrollIntoView({behavior: 'smooth'})
    } else if (evt === 'Начинки') {
      mainRef.current?.scrollIntoView({behavior: 'smooth'})
    }
  }

  return (
    <section className={`${styles.container} pt-10`}>
      <h2 className={'text text_type_main-large mb-5'}>Соберите бургер</h2>
      <BurgerIngredientsTabs current={currentTab} setCurrent={setCurrentType}/>
      <BurgerIngredientsTypesList
        config={config}
        scrollContainerRef={scrollContainerRef}
        bunRef={bunRef}
        sauceRef={sauceRef}
        mainRef={mainRef}
        onScrollHandler={onScrollHandler}
      />
    </section>
  )
}

export default BurgerIngredients
