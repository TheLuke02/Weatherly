import { useNavigate } from "react-router-dom";
export const SavedPage = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams();
  let key: number = 0;

  const handleClick = (city: string) => {
    params.append("q", city);
    navigate({
      pathname: "/search",
      search: params.toString(),
    });
  };

  let arr = [];

  for (let i = 0; i < localStorage.length; i++) {
    if (
      localStorage.key(i) !== "ally-supports-cache" &&
      localStorage.key(i) !== "Temperature" &&
      localStorage.key(i) !== "Wind" &&
      localStorage.key(i) !== "Lenguage"
    )
      arr.push(localStorage.key(i));
  }

  return (
    <div className="h-[calc(100vh-108px)] sm:h-[calc(100vh-116px)] md:h-[calc(100vh-128px)]">
      <p className="w-full py-2 text-center text-xl font-semibold sm:text-3xl md:text-5xl">
        Your saved citys...
      </p>
      <div className="grid h-full grid-cols-1 content-start gap-2 overflow-y-auto px-2 py-2 sm:grid-cols-3 md:grid-cols-4">
        {arr.length > 0 ? (
          arr.map(function (item) {
            key++;
            return (
              <div
                className="h-20 w-full rounded-lg border-2 border-sky-600 sm:h-28 md:h-32"
                key={key}
              >
                <button
                  className="h-full w-full"
                  onClick={() => {
                    handleClick(item!);
                  }}
                >
                  <div className="flex h-full items-center justify-center text-xl font-semibold sm:text-2xl md:text-3xl">
                    {item}
                  </div>
                </button>
              </div>
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
