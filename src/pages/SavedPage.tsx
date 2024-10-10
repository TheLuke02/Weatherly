import { useNavigate } from "react-router-dom";
export const SavedPage = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams();

  const handleClick = (city: string) => {
    params.append("q", city);
    navigate({
      pathname: "/search",
      search: params.toString(),
    });
  };

  let arr = [];

  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) !== "ally-supports-cache")
      arr.push(localStorage.key(i));
  }

  return (
    <div className="h-[calc(100vh-64px)]">
      <div className="flex h-full flex-col space-y-2 overflow-auto px-2 py-2">
        <p className="py-2 text-center text-2xl font-semibold">
          Your saved citys...
        </p>
        {arr.length > 0 ? (
          arr.map(function (item) {
            return (
              <button
                onClick={() => {
                  handleClick(item!);
                }}
                key={window.crypto.randomUUID()}
              >
                <div className="h-20 content-center rounded-lg border-2 border-sky-600 text-center text-xl font-semibold">
                  {item}
                </div>
              </button>
            );
          })
        ) : (
          <div className="items-center justify-center py-10 text-center text-2xl font-semibold">
            You didn't save any city
          </div>
        )}
      </div>
    </div>
  );
};
