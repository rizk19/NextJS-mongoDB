import styles from './Avatar.module.css';

const Avatar = ({ size, username, url }) => {
  console.log(url, 'masuk');
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={styles.avatar}
      src={url || '/images/default_user.jpg'}
      alt={username}
      width={size}
      height={size}
    />
  );
};

export default Avatar;
