import DragDropList from "../DragDropList/DragDropList";
import Header from "./Header";

const MiddleUI = () => {
  return (
    <div className="h-full bg-red-700 p-6 text-white">
      <Header />
      <div className="flex flex-col space-y-6">
        <h1 className="text-4xl font-bold">Michael Jackson</h1>
        <p className="text-lg text-gray-300">27,892,501 monthly listeners</p>
        <DragDropList />
      </div>
    </div>
  );
};

export default MiddleUI;
