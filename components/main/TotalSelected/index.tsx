import Card from 'components/common/Card';

import LabelWithCards from '../LabelWithCards';

function TotalSelected() {
  return (
    <LabelWithCards labelText="전체">
      {/* TODO - 수정 */}
      <Card
        color="indigo"
        icon="🧑‍💻"
        profile={{
          company: 'picko',
          position: '디자개발',
          createdAt: '1분 전',
        }}
        type="avatar"
        title="GOAT 개발자"
      />
      <Card
        color="cloud"
        icon="🏋️"
        profile={{
          company: 'picko',
          position: '디자개발',
          createdAt: '1분 전',
        }}
        type="avatar"
        title="갓생러"
      />
      <Card
        color="forest"
        icon="🧐"
        profile={{
          company: 'picko',
          position: '디자개발',
          createdAt: '1분 전',
        }}
        type="avatar"
        title="인내심이 강한 사람"
      />
      <Card
        color="yam"
        icon="🧐"
        profile={{
          company: 'picko',
          position: '디자개발',
          createdAt: '1분 전',
        }}
        type="avatar"
        title="이성적인 사람"
      />
    </LabelWithCards>
  );
}

export default TotalSelected;
