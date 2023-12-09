import Loading from "./Loading";
import Image from "next/image";
const ListItem = ({ name, username, setCurrent, avatar }) => {
  return (
    <div
      onClick={setCurrent}
      className="w-full cursor-pointer flex hover:bg-gray-700 hover:bg-opacity-30 items-center justify-between p-3 px-4 border-b border-gray-700"
    >
      <div className="flex">
        <div className="relative w-14 h-14 flex overflow-hidden items-center justify-center rounded-full border ">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-14 h-14"
          >
            <path
              fillRule="evenodd"
              d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              clipRule="evenodd"
            />
          </svg> */}
          <Image
            height={20}
            width={20}
            className="w-full aspect-square"
            src={avatar}
            // onLoad={(e) => {
            //   if (e.target.naturalWidth === 0) {
            //     // Broken image
            //     // set_imgSrc("");
            //   }
            // }}
          />
        </div>
        <div className="px-4">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <h2 className="">{username}</h2>
        </div>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-chevron-right w-6 h-6"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  );
};

export default function UserList({ data, setCurrent, current, loading }) {
  return (
    <div className="border border-gray-700 relative w-full overflow-hidden backdrop-blur-lg bg-gray-700 bg-opacity-20 h-full rounded-xl">
      <div className="py-5 px-4 border-b border-gray-700">
        <h1 className="text-3xl font-bold">Users</h1>
      </div>
      <div className="w-full h-full lg:overflow-y-scroll">
        {loading ? (
          <div className="w-full h-full flex items-center justify-center">
            <Loading />
          </div>
        ) : (
          data.map((item) => (
            <ListItem
              key={item.id + item.profile.firstName}
              avatar={item.avatar}
              name={item.profile.firstName + " " + item.profile.lastName}
              username={item.profile.username}
              setCurrent={() => setCurrent(item)}
              current={current}
            />
          ))
        )}
        <div className="w-full h-20"></div>
      </div>
    </div>
  );
}
