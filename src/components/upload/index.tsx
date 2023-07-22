export const Upload = () => {
  return (
    <div className="flex justify-center my-8">
      <div className="rounded-lg shadow-xl bg-gray-950 lg:w-1/2">
        <div className="m-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col w-full h-32 border-4 border-dashed border-gray-500 hover:bg-gray-800 hover:border-gray-400">
              <div className="flex flex-col items-center justify-center pt-7">
                <svg xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12 text-gray-600 group-hover:text-gray-600" viewBox="0 0 20 20"
                  fill="currentColor">
                  <path fill-rule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clip-rule="evenodd" />
                </svg>
                <p className="pt-1 text-sm tracking-wider text-gray-600 group-hover:text-gray-600">
                  Select a photo</p>
              </div>
              <input type="file" className="opacity-0" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}