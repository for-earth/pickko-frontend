type Props = {
  value: number;
};

const markers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Progress({ value }: Props) {
  return (
    <>
      <input type="range" name="volume" min={1} max={10} list="markers" defaultValue={value} disabled />
      <datalist id="markers">
        {markers.map((marker) => (
          <option key={marker} value={marker} />
        ))}
      </datalist>
    </>
  );
}

export default Progress;
