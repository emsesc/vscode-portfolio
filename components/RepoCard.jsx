import WatchIcon from '../components/icons/WatchIcon';
import ForkIcon from '../components/icons/ForkIcon';
import StarIcon from '../components/icons/StarIcon';
import GithubIcon from '../components/icons/GithubIcon';
import LinkIcon from '../components/icons/LinkIcon';
import styles from '../styles/RepoCard.module.css';

const RepoCard = ({ repo }) => {
  return (
    <div className={styles.card}>
      <div>
        <h3 className={styles.title}>{repo.name}</h3>
        <p>{repo.description}</p>
      </div>
      <div className={styles.stats}>
        <div>
          <div>
            <WatchIcon className={styles.icon} /> {repo.watchers.totalCount}
          </div>
          <div>
            <ForkIcon className={styles.icon} /> {repo.forkCount}
          </div>
          <div>
            <StarIcon className={styles.icon} /> {repo.stargazerCount}
          </div>
        </div>
        <div>
          <a href={repo.url} target="_blank" rel="noopener noreferrer">
            <GithubIcon height={20} width={20} className={styles.icon} />
          </a>
          {repo.homepageUrl && (
            <a href={repo.homepageUrl} target="_blank" rel="noopener noreferrer">
              <LinkIcon height={20} width={20} className={styles.icon} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default RepoCard;
