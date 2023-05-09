import Card from 'components/common/Card';

import LabelWithCards from '../LabelWithCards';

function MostSelected() {
  return (
    <LabelWithCards labelText="제일 많이 선택된">
      {/* TODO - 수정 */}
      <Card color="indigo" icon="🧑‍💻" profile={null} type="default" title="1. GOAT 개발자" />
      <Card color="cloud" icon="🏋️" profile={null} type="default" title="2. 갓생러" />
      <Card color="yam" icon="🧐" profile={null} type="default" title="3. 이성적인 사람" />
    </LabelWithCards>
  );
}

export default MostSelected;
