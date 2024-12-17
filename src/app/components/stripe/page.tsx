import React from 'react';
import Image from 'next/image';

const Stripe = () => {
  return (
    <div className="relative w-[904px] h-[93px] mt-[8px] ml-40 justify-center items-center"> {/* Set the height explicitly for `fill` */}
      <Image
        src="/image/stripe.png"
        alt="stripe"
        fill // Replaces layout="fill"
        style={{ objectFit: 'contain' }} // Replaces objectFit="contain"
      />
    </div>
  );
};

export default Stripe;
