import React from 'react'
// import Image from 'next/image'
import styles from '#components/styles/UserCard.module.css'

// export type User = {
//   id: string,
//   email: string,
//   avatarUrl: string,
//   bio: string,
//   name: string,
//   url: string,
//   projectsUrl: string
// }

type UserCardProps = {
  // user: User,
  header?: JSX.Element
  // main: JSX.Element
  footer?: JSX.Element
  children: React.ReactNode
}

const Card: React.FC<UserCardProps> = ({ header,  footer,children }) => {
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