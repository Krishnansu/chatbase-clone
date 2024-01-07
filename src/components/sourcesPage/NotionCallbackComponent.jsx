import { useEffect } from "react";
import { getServerSideProps } from "./notion-callback.jsx";

const NotionCallbackComponent = ({ response }) => {
  console.log(response);

  return (
    <div>
      <h1 className="text-2xl font-bold">HEYYY</h1>
      {/* Display or use response data as needed */}
    </div>
  );
};

export default NotionCallbackComponent;