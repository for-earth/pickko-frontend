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
        <Progress step={currentStep} color="berrymilk" />
        <IconButton iconType="outline" icon="ArrowRight" size="small" color="berrymilk" onClick={onClickNextStep} />
      </div>
    </div>
  );
}

export default Header;
