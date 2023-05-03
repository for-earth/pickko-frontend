'use client';

import Button from 'components/common/Button';

import PickoLogo from 'lib/assets/logos/picko-logo.svg';

import styles from './index.module.scss';

function StartAccount() {
  return (
    <>
      <div className={styles.startAccountWrapper}>
        <div className={styles.startAccountBox}>
          <PickoLogo />
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button type="button" fullWidth>
          카카오계정으로 시작하기
        </Button>
      </div>
    </>
  );
}

export default StartAccount;
