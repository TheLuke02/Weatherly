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
    <div className="h-[calc(100vh-108px)] sm:h-[calc(100vh-116px)] md:h-[calc(100vh-128px)]">
      <p className="w-full py-2 text-center text-xl font-semibold sm:text-3xl md:text-5xl">
        Your saved citys...
      </p>
      <div className="grid h-full w-full grid-cols-1 gap-y-2 overflow-y-auto px-2 py-2 sm:grid-cols-3 sm:gap-x-2 md:grid-cols-4">
        {arr.length > 0 ? (
          arr.map(function (item) {
            return (
              <div className="h-full w-full basis-1/4 rounded-lg border-2 border-sky-600">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    handleClick(item!);
                  }}
                  key={window.crypto.randomUUID()}
                >
                  <div className="min-h-20 content-center items-center text-xl font-semibold sm:min-h-32 sm:text-2xl md:min-h-48 md:text-3xl">
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
