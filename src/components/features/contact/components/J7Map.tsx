import React from 'react';

const GoogleMapsIframe = () => {
  return (
    <div className="w-full z-40 mb-12">
      <h1 className='text-3xl md:text-4xl lg:text-5xl font-coconat text-[#51301F] mt-24 text-center mb-12'>Visit Our Head Office</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106290.80261117766!2d72.7425542!3d33.6848143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa3c04e780e09%3A0x35545ef89750ef15!2sPlot%201%20MR%209%2C%20Block%20C%20Multi%20Gardens%20B-17%2C%20Islamabad!5e0!3m2!1sen!2s!4v1726474800000!5m2!1sen!2s"
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

export default GoogleMapsIframe;