import Search from './Search';

export default function MenuSearch() {
  return (
    <div className="w-full flex flex-col bg-gradient-to-r from-[rgba(62,103,150,0.919)] via-[rgba(58,120,177,0.8)] to-[rgb(15,33,110)] py-2 px-3">
      {/* Menu */}
      <ul className="font-semibold text-white flex flex-col gap-2 text-sm drop-shadow">
        <li>Your Store</li>
        <li>New & Noteworthy</li>
        <li>Categories</li>
        <li>Points Shop</li>
        <li>News</li>
        <li>Labs</li>
      </ul>

      {/* Search */}
      <Search />
    </div>
  )
}