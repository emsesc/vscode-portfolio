import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'emilychen.me',
    href: 'https://my-portfolio-2022-two.vercel.app/',
  },
  {
    social: 'email',
    link: 'emseschen@gmail.com',
    href: 'mailto:emseschen@gmail.com',
  },
  {
    social: 'github',
    link: 'emsesc',
    href: 'https://github.com/emsesc',
  },
  {
    social: 'linkedin',
    link: 'emilyschen',
    href: 'https://www.linkedin.com/in/emilyschen/',
  },
  {
    social: 'twitter',
    link: 'emsesc',
    href: 'https://www.twitter.com/emsesc',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
