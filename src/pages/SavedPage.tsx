export const SavedPage = () => {
  let arr = [];

  for (let i = 0; i < localStorage.length - 1; i++) {
    arr.push(localStorage.key(i));
  }

  return (
    <div>
      {arr.map(function (item) {
        return <div>{item}</div>;
      })}
    </div>
  );
};
