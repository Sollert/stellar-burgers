import { useSelector } from 'react-redux'

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'

import BurgerConstructorToppingsList from '../burger-constructor-toppings-list/burger-constructor-toppings-list'
import BurgerConstructorOrderSubmit from '../burger-constructor-order-submit/burger-constructor-order-submit'

import styles from './burger-constructor.module.css'

const BurgerConstructor = () => {
	const bun = useSelector(store => store.cart.bun)

	return (
		<section className={styles.section__container}>
			<ul className={`${styles.ingredients__container}`}>
				<li className={'ml-10'}>
					{bun ? (
						<ConstructorElement
							type='top'
							isLocked={true}
							text={`${bun?.name} (верх)`}
							price={bun?.price}
							thumbnail={bun?.image}
						/>
					) : (
						<div className={`${styles.bun__empty} ${styles.bun__empty_top}`}>
							<span
								className={`${styles.bun__emptyText} text text_type_main-default`}
							>
								Выбери булку
							</span>
						</div>
					)}
				</li>
				<li>
					<ul className={`${styles.toppings__container} custom-scroll`}>
						<BurgerConstructorToppingsList />
					</ul>
				</li>
				<li className={'ml-10'}>
					{bun ? (
						<ConstructorElement
							type='bottom'
							isLocked={true}
							text={`${bun?.name} (низ)`}
							price={bun?.price}
							thumbnail={bun?.image}
						/>
					) : (
						<div className={`${styles.bun__empty} ${styles.bun__empty_bottom}`}>
							<span
								className={`${styles.bun__emptyText} text text_type_main-default`}
							>
								Выбери булку
							</span>
						</div>
					)}
				</li>
			</ul>
			{bun ? <BurgerConstructorOrderSubmit /> : null}
		</section>
	)
}

export default BurgerConstructor
