import Link from "next/link";

const Settings = () => {
  return (
    <div className="flex gap-x-4 py-10">
      <label>名前</label>
      <input type="text" className=" border-2 border-black" />
    </div>
  );
};

export default Settings;
