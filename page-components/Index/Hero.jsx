import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h1 className={styles.title}>
          <span className={styles.nextjs}>Feedapp</span>
          <span className={styles.mongodb}>Nextjs MongoDB</span>
        </h1>
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/feed">
              <ButtonLink className={styles.button}>Explore Feed</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="https://github.com/rizk19"
              type="secondary"
              className={styles.button}
            >
              GitHub
            </ButtonLink>
          </Container>
        </Container>
        <p className={styles.subtitle}>
          A Next.js and MongoDB web application, designed with simplicity for
          learning and real-world applicability in mind.
        </p>
      </div>
    </Wrapper>
  );
};

export default Hero;
