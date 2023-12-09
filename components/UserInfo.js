import Image from "next/image";

export default function UserInfo({ current }) {
  if (current)
    return (
      <div className="w-full flex flex-col gap-3 lg:gap-5 items-center justify-center h-auto py-5 lg:h-screen bg-gray-900">
        <div className=" relative flex items-center justify-center w-1/4 bg-black aspect-square rounded-full overflow-hidden ">
          <Image
            height={20}
            width={20}
            className="w-full aspect-square"
            src={current.avatar}
            onLoad={(e) => {
              if (e.target.naturalWidth === 0) {
                // Broken image
                set_imgSrc("");
              }
            }}
          />
          {/* <div className="absolute w-full aspect-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="aspect-square scale-125"
            >
              <path
                fillRule="evenodd"
                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div> */}
        </div>

        <h1 className="lg:text-4xl text-3xl font-bold">
          {current.profile.firstName + " " + current.profile.lastName}
        </h1>
        <h2 className="lg:text-lg">@{current.profile.username}</h2>

        <div className="w-11/12 lg:w-3/4 md:text-lg">
          <div className="flex gap-2 py-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                clipRule="evenodd"
              />
              <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
            </svg>
            <h3>
              <span className="font-semibold">Occupation:</span>{" "}
              {current.jobTitle}
            </h3>
          </div>

          <div className="flex gap-2 pb-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
            <p>
              <span className="font-semibold">Email: </span>{" "}
              {current.profile.email}
            </p>
          </div>
        </div>

        <div className="w-11/12 lg:w-3/4 p-3 lg:p-5 bg-gray-700 bg-opacity-25 backdrop-blur-xl rounded-xl">
          <h3 className="font-semibold text-xl lg:text-2xl">Bio</h3>
          <p className="">{current.Bio}</p>
        </div>
      </div>
    );
  else {
    return (
      <div className="bg-black h-auto lg:h-screen flex flex-col p-5 items-center justify-center w-full">
        <h1 className="text-2xl lg:text-4xl font-bold">
          Select a user to see their Information!
        </h1>
        <div className="loadingio-spinner-bean-eater-cr67g9w0dq scale-50">
          <div className="ldio-k31jfhc6q2b">
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @keyframes ldio-k31jfhc6q2b-1 {
            0% {
              transform: rotate(0deg);
            }
            50% {
              transform: rotate(-45deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
          @keyframes ldio-k31jfhc6q2b-2 {
            0% {
              transform: rotate(180deg);
            }
            50% {
              transform: rotate(225deg);
            }
            100% {
              transform: rotate(180deg);
            }
          }
          .ldio-k31jfhc6q2b > div:nth-child(2) {
            transform: translate(-15px, 0);
          }
          .ldio-k31jfhc6q2b > div:nth-child(2) div {
            position: absolute;
            top: 40px;
            left: 40px;
            width: 120px;
            height: 60px;
            border-radius: 120px 120px 0 0;
            background: #f8b26a;
            animation: ldio-k31jfhc6q2b-1 1s linear infinite;
            transform-origin: 60px 60px;
          }
          .ldio-k31jfhc6q2b > div:nth-child(2) div:nth-child(2) {
            animation: ldio-k31jfhc6q2b-2 1s linear infinite;
          }
          .ldio-k31jfhc6q2b > div:nth-child(2) div:nth-child(3) {
            transform: rotate(-90deg);
            animation: none;
          }
          @keyframes ldio-k31jfhc6q2b-3 {
            0% {
              transform: translate(190px, 0);
              opacity: 0;
            }
            20% {
              opacity: 1;
            }
            100% {
              transform: translate(70px, 0);
              opacity: 1;
            }
          }
          .ldio-k31jfhc6q2b > div:nth-child(1) {
            display: block;
          }
          .ldio-k31jfhc6q2b > div:nth-child(1) div {
            position: absolute;
            top: 92px;
            left: -8px;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background: #e15b64;
            animation: ldio-k31jfhc6q2b-3 1s linear infinite;
          }
          .ldio-k31jfhc6q2b > div:nth-child(1) div:nth-child(1) {
            animation-delay: -0.67s;
          }
          .ldio-k31jfhc6q2b > div:nth-child(1) div:nth-child(2) {
            animation-delay: -0.33s;
          }
          .ldio-k31jfhc6q2b > div:nth-child(1) div:nth-child(3) {
            animation-delay: 0s;
          }
          .loadingio-spinner-bean-eater-cr67g9w0dq {
            width: 200px;
            height: 200px;
            display: inline-block;
            overflow: hidden;
            background: #000000;
          }
          .ldio-k31jfhc6q2b {
            width: 100%;
            height: 100%;
            position: relative;
            transform: translateZ(0) scale(1);
            backface-visibility: hidden;
            transform-origin: 0 0; /* see note above */
          }
          .ldio-k31jfhc6q2b div {
            box-sizing: content-box;
          }
          /* generated by https://loading.io/ */
        `}</style>
      </div>
    );
  }
}
