import { memo } from 'react';

import { HEARTS_COLORS } from 'lib/constants/color';

import IconButton from 'components/common/IconButton';
import Progress from 'components/common/Progress';

import styles from './index.module.scss';

type Props = {
  currentStep: number;
  onClickNextStep: () => void;
};

function Header({ currentStep, onClickNextStep }: Props) {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContent}>
        <Progress step={currentStep + 1} color={HEARTS_COLORS[currentStep]} />
        <IconButton iconType="outline" icon="ArrowRight" size="small" color={HEARTS_COLORS[currentStep]} onClick={onClickNextStep} />
      </div>
    </div>
  );
}

export default memo(Header);
