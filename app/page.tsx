import Button from 'components/common/Button';
import MostSelected from 'components/main/MostSelected';
import TotalSelected from 'components/main/TotalSelected';

import styles from './index.module.scss';

function Page() {
  return (
    <>
      <div className={styles.selectedCardWrapper}>
        <MostSelected />
        <TotalSelected />
      </div>
      <div className={styles.buttonWrapper}>
        <Button href="/sign-up" fullWidth>
          TEST: go to sign up page
        </Button>
      </div>
    </>
  );
}

export default Page;
