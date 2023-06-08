'use client';

import { useCallback, useEffect } from 'react';

import { HEARTS_COLORS } from 'lib/constants/color';
import useHeartsStore from 'stores/hearts';
import { shallow } from 'zustand/shallow';

import Button from 'components/common/Button';
import SubjectTitle from 'components/common/SubjectTitle';
import TextButton from 'components/common/TextButton';

import Header from '../Header';

import styles from './index.module.scss';

const MAX_STEP = 10;

function HeartsContainer() {
  const { currentStep, setNextStep } = useHeartsStore((state) => ({
    currentStep: state.currentStep,
    setNextStep: state.setNextStep,
  }), shallow);

  const onClickNextStep = useCallback(() => {
    setNextStep(currentStep + 1 < MAX_STEP ? currentStep + 1 : 0);
  }, [currentStep]);

  useEffect(() => () => setNextStep(0), []);

  return (
    <>
      <Header
        currentStep={currentStep}
        onClickNextStep={onClickNextStep}
      />
      <div className={styles.contentWrapper}>
        <SubjectTitle
          emoji="😍"
          title="인내심이 강한사람"
          color={HEARTS_COLORS[currentStep]}
        />
        <div className={styles.buttonWrapper}>
          <Button color={HEARTS_COLORS[currentStep]} fullWidth>
            Jason
          </Button>
          <Button color={HEARTS_COLORS[currentStep]} fullWidth>
            구민규
          </Button>
          <Button color={HEARTS_COLORS[currentStep]} fullWidth>
            사승민
          </Button>
          <Button color={HEARTS_COLORS[currentStep]} fullWidth>
            Daisy
          </Button>
        </div>
        <TextButton id="find-friends" iconType="outline" icon="Search" label="다른 친구 찾기" color={HEARTS_COLORS[currentStep]} textColor="white" />
      </div>
    </>
  );
}

export default HeartsContainer;
