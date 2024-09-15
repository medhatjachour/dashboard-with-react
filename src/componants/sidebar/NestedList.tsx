
const NestedList = () => {
  
  return (
    <div>
      <div className="bg-gray-100 p-4">
        <ul className="space-y-2">
          <li className="text-gray-700">
            Home
            <ul className="pl-4 space-y-1">
              <li>Dashboard</li>
              <li>Analytics</li>
            </ul>
          </li>
          <li className="text-gray-700">
            Pages
            <ul className="pl-4 space-y-1">
              <li>About</li>
              <li>Contact</li>
            </ul>
          </li>
          {/* Add other nested items */}
        </ul>
      </div>
    </div>
  );
};

export default NestedList;
