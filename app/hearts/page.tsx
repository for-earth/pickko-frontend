import Navigation from 'components/common/Navigation';

export const metadata = {
  title: 'hearts',
};

function HeartsPage() {
  return (
    <div>
      <Navigation activePathname="hearts" />
      <Navigation activePathname="feed" />
      <Navigation activePathname="user" />
    </div>
  );
}

export default HeartsPage;
