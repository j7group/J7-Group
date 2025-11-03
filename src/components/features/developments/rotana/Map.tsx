import React from "react";

export default function RotanaIframe() {
  return (
    <>
    <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#51301F] mt-16 text-center mb-12">Visit Our Rotana Office</h1>
      <div className="w-full mb-16" style={{ height: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.888931632476!2d72.8651153!3d33.5866258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df99edef0f439f%3A0xa1539f327d8b527a!2sSignature%20Rotana%20Islamabad!5e0!3m2!1sen!2sus!4v1725974400000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Signature Rotana Islamabad Location"
          className="border-0"
        ></iframe>
      </div>
    </>
  );
}
