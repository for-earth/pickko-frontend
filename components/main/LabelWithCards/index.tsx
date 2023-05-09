import { PropsWithChildren } from 'react';

import Label from 'components/common/Label';

import styles from './index.module.scss';

type Props = {
  labelText: string;
};

function LabelWithCards({ labelText, children }: PropsWithChildren<Props>) {
  return (
    <div className={styles.mainLayout}>
      <Label text={labelText} color="white" />
      <div className={styles.cardWrapper}>
        {children}
      </div>
    </div>
  );
}

export default LabelWithCards;
