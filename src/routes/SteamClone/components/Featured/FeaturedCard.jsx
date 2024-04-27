import DiscountLong from '../Shared/DiscountLong';

export default function FeaturedCard({ title, fullPrice, image, discount, currentPrice }) {

  // Take the price and add a decimal to it 
  function insertDecimal(num) {
    return Number((num / 100).toFixed(2));
  }
  const formattedPrice = insertDecimal(currentPrice)

  return (
    <div className="w-full flex flex-col items-start rounded shadow-lg shadow-[0_0_7px_0_#000000]">
      {/* Image */}
      <img src={image} className="w-full" />

      {/* Text */}
      <div className="text-white w-full p-2 pb-4 bg-gradient-to-b from-[#0A141D] to-[rgba(10,20,29,0.2)]">
        <h2 className="font-bold">{title}</h2>
        {discount != null ? <DiscountLong discount={discount} fullPrice={fullPrice} currentPrice={currentPrice} />
          : <p className="text-sm">{formattedPrice == 0 ? "Free to Play" : `$${formattedPrice}`}</p>}
      </div>
    </div>
  )
}