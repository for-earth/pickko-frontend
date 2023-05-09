import Button from 'components/common/Button';
import LayoutContainer from 'components/common/LayoutContainer';
import MostSelected from 'components/main/MostSelected';
import TotalSelected from 'components/main/TotalSelected';

import styles from './index.module.scss';

function Page() {
  return (
    <LayoutContainer backgroundColor="berrymilk">
      <div className={styles.selectedCardWrapper}>
        <MostSelected />
        <TotalSelected />
      </div>
      <Button href="/sign-up" fullWidth>
        go to sign up page
      </Button>
    </LayoutContainer>
  );
}

export default Page;
