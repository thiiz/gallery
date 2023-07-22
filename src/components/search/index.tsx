import { BiSearchAlt } from 'react-icons/bi';

export const Search = () => {
  return (
    <div className='w-full px-8'>
      <label className="relative text-gray-600">
        <input className="border-2 border-gray-300 w-full bg-white h-10 px-5 pr-10 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" />
        <button type="submit" className="absolute block right-0 -top-1/2 translate-y-1/2 mr-4 text-xl">
          <BiSearchAlt />
        </button>
      </label>
    </div>
  )
}