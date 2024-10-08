import { useNavigate } from "react-router-dom";

export const HandleError = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="flex text-9xl">Bad Reqest</div>
      <div className="flex">
        <button onClick={handleClick}>Return home</button>
      </div>
    </div>
  );
};
