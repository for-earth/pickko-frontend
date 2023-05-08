import Card from 'components/common/Card';

// TODO - Card 테스트용
function Page() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Card icon="🧑‍💻" type="default" profile={null} title="GOAT 개발자" />
      <Card
        icon="🧑‍💻"
        type="avatar"
        profile={{
          company: '당근마켓',
          createdAt: '1분 전',
          position: '개발자',
        }}
        title="GOAT 개발자"
      />
    </div>
  );
}

export default Page;
