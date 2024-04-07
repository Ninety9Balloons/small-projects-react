import LargeCard from './LargeCard';

export default function LargeCardContainer() {
  return (
    <div className='flex flex-col gap-4 flex-wrap md:flex-row md:gap-6'>
      <LargeCard icon="facebook" handle="@nathanf" border="border-facebook" followers="1987" change="12" arrow="up" color="lime-green" />
      <LargeCard icon="twitter" handle="@nathanf" border="border-twitter" followers="1044" change="99" arrow="up" color="lime-green" />
      <LargeCard icon="instagram" handle="@realnathanf" border="border-instagram-start" followers="11k" change="1099" arrow="up" color="lime-green" />
      <LargeCard icon="youtube" handle="Nathan F" border="border-youtube" followers="8239" change="144" arrow="down" color="bright-red" />
    </div>
  )
}