import React from 'react'

import styles from '#components/styles/Card.module.css'

type UserCardProps = {
  header?: JSX.Element
  footer?: JSX.Element
  children: React.ReactNode
}

const Card: React.FC<UserCardProps> = ({ header, footer, children }) => {
  return (
    <div className={styles.root}>
      {header && <div className={styles.header}>
        {header}
      </div>}

      <div className={styles.main}>
        {children}
      </div>

      {footer && <div className={styles.footer}>
        {footer}
      </div>}
    </div>
  )
}

export default Card