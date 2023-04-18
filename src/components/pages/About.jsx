export default function Contact() {
  return (
    <>
      <div className="relative pt-16 pb-20 flex content-center items-center justify-center ">
        <div
          className="absolute top-0 w-full h-80 bg-top bg-cover "
          style={{
            backgroundImage: `url('assets/images/banner/af82b1b22f25aa21e8cc3f8b9268ae74.jpg')`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75  text-white text-center font-extrabold text-4xl pt-20 content-center justify-center mt-10 lg:mt-20 "
          >
            {" "}
            WHO WE ARE?
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-wrap bg-orange-800 text-center justify-center content-center  pt-60 px-10">
        <div className="px-10">
          <p className="text-3xl text-yellow-400 font-bold pb-7">ABOUT US</p>
          <p className="px-7 text-white text-2xl lg:px-18 pb-10 text-left indent-12">
            Swami vivekanandar sevalaya and Social development in Utiramerur was
            started on 4-8-2013. Since then it has been performing various
            social services and activities. This trust comes under the State
            government of Tamil Nadu, India, and works are done based on rules
            and regulations of the Ramakrishna mission. Our Trust has been
            registered under the Department of Social Welfare and works towards
            the welfare of people in our society.
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-wrap bg-orange-800 text-center justify-center content-center px-10">
        <div className="px-10">
          <p className="text-3xl text-yellow-400 font-bold pb-7 pt-20">
            HOW YOU CAN HELP US
          </p>
          <p className="px-7 text-white text-2xl lg:px-18 pb-10 text-left indent-12">
            Swami vivekanandar sevalaya Provides various special training for
            students ,Youngsters and Unemployyed person to improve their skills.
            One of the main hurdle we are facing is the lack of proper toilets
            for the members and students. As the number of persons in the trust
            has been increased there is an lack of space for the students to
            study. You can donate directly to the bank details given below or
            you can contact us in person and make a donation. We guarantee that
            every rupee you donate will be made to good use by our trust.
          </p>
        </div>
      </div>

      <div className="flex flex-col flex-wrap bg-orange-800 text-center justify-center content-center py-10">
          <p className="text-3xl text-yellow-400 font-bold pb-7">
            DONATE TO US NOW
          </p>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <tbody>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white-50 dark:text-white dark:bg-gray-800"
                  >
                    Bank Name
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white-50 dark:text-white dark:bg-gray-900">INDIAN BANK</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Branch Name
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white-50 dark:text-white dark:bg-gray-900">UTHIRAMERUR (Branch Code:2390)</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Account Name
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white-50 dark:text-white dark:bg-gray-900">
                    SWAMI VIVEKANANDAR SEVALAYA AND SOCIAL DEVELOPMENT
                  </td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    Account No
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white-50 dark:text-white dark:bg-gray-900">6561205031</td>
                </tr>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                  >
                    IFSC CODE
                  </th>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-white-50 dark:text-white dark:bg-gray-900">IDIB000U032</td>
                </tr>
              </tbody>
            </table>
          </div>
      </div>
    </>
  );
}
