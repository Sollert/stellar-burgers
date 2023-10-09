import {useMemo} from 'react'
import clsx from 'clsx'

import styles from './ingredient-icon.module.css'
import {IngredientIconProps} from "./ingredient-icon.types";

export default function IngredientIcon({
                                         imageUrl,
                                         index,
                                         count,
                                         position = 'absolute',
                                       }: IngredientIconProps) {
  const ingredientIconStyle = useMemo(
    () =>
      position === 'absolute' && typeof index !== 'undefined'
        ? {position, zIndex: `${10 - index}`, left: `${index * 48}px`}
        : {position},
    [index, position]
  )

  return (
    <div style={ingredientIconStyle} className={styles['ingredient-icon']}>
      <div className={styles.border}/>
      <div
        style={{
          backgroundImage: `url('${imageUrl}')`,
        }}
        className={styles.image}
      />
      {index === 5 && typeof count !== 'undefined' && count > 0 && (
        <div className={styles.overlay}>
					<span className={clsx('text', 'text_type_main-small')}>
						{`+${count}`}
					</span>
        </div>
      )}
    </div>
  )
}
