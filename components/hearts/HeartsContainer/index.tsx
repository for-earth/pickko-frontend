'use client';

import Button from 'components/common/Button';
import SubjectTitle from 'components/common/SubjectTitle';
import TextButton from 'components/common/TextButton';

import Header from '../Header';

import styles from './index.module.scss';

function HeartsContainer() {
  return (
    <>
      <Header currentStep={5} onClickNextStep={() => console.log('test')} />
      <div className={styles.contentWrapper}>
        <SubjectTitle
          emoji="😍"
          title="인내심이 강한사람"
          color="berrymilk"
        />
        <div className={styles.buttonWrapper}>
          <Button color="berrymilk" fullWidth>
            Jason
          </Button>
          <Button color="berrymilk" fullWidth>
            구민규
          </Button>
          <Button color="berrymilk" fullWidth>
            사승민
          </Button>
          <Button color="berrymilk" fullWidth>
            Daisy
          </Button>
        </div>
        <TextButton id="find-friends" iconType="outline" icon="Search" label="다른 친구 찾기" color="berrymilk" textColor="white" />
      </div>
    </>
  );
}

export default HeartsContainer;
