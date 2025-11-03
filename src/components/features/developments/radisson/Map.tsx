import React from 'react';

const RadissonIframe = () => {
  return (
    <div className="w-full z-40 mb-8">
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-coconat text-[#51301F] mt-24 text-center mb-12'>Visit Our J7 Global Office</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.017738326228!2d72.858939!3d33.58456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9940800c22df%3A0xabb0325cb88a40bf!2sJ7%20GLOBAL%20SALE%20OFFICE!5e0!3m2!1sen!2sus!4v1725974400000!5m2!1sen!2sus"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Multi Gardens B-17 Location"
      ></iframe>
    </div>
  );
};

export default RadissonIframe;
