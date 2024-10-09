import { useNavigate } from "react-router-dom";

export const BadRequest = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center space-y-5">
      <div className="flex text-6xl">
        <p>Bad Reqest</p>
      </div>
      <div className="flex">
        <button onClick={handleClick}>Return home</button>
      </div>
    </div>
  );
};
