import SmallCard from './SmallCard'

export default function SmallCardContainer() {
  return (
    <div className='flex flex-col gap-3 mt-6 flex-wrap md:grid md:grid-cols-4 lg:grid-cols-4 md:gap-6 md:mt-10 '>
      <h2 className='font-bold text-xl text-dark-grayish-blue dark:text-white md:w-full md:col-span-4 lg:col-span-4'>Overview - Today</h2>

      <SmallCard title="Page Views" icon="facebook" number="87" arrow="up" color="text-lime-green" change="3%" />
      <SmallCard title="Likes" icon="facebook" number="52" arrow="down" color="text-bright-red" change="-2%" />
      <SmallCard title="Likes" icon="instagram" number="5462" arrow="up" color="text-lime-green" change="2257%" />
      <SmallCard title="Profile Views" icon="instagram" number="52k" arrow="up" color="text-lime-green" change="1375%" />
      <SmallCard title="Retweets" icon="twitter" number="117" arrow="up" color="text-lime-green" change="303%" />
      <SmallCard title="Likes" icon="twitter" number="507" arrow="up" color="text-lime-green" change="535%" />
      <SmallCard title="Likes" icon="youtube" number="107" arrow="down" color="text-bright-red" change="-19%" />
      <SmallCard title="Total Views" icon="youtube" number="1407" arrow="down" color="text-bright-red" change="-12%" />
    </div>
  )
}