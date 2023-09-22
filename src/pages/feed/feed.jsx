import clsx from 'clsx'

import OrdersFeed from '../../components/orders/orders-feed/orders-feed'

import styles from './feed.module.css'

export default function Feed() {
  return (
    <main className={clsx(styles.main, 'pl-8')}>
      <h2 className={clsx('text', 'text_type_main-large', 'mb-5')}>
        Лента заказов
      </h2>
      <OrdersFeed/>
    </main>
  )
}
