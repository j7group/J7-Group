import React from "react";

export default function App() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-[#51301F] mt-24 text-center mb-16">
        Visit Our J7 Icon Office
      </h1>
      <div className="w-full mb-12" style={{ height: "400px" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.760219984697!2d72.8654339!3d33.5883752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df99a405d16387%3A0xda43cdc3c277499c!2sJ7%20Icon%2C%20Plot%20No.%20MC-J%20E%20Blue%20Zone%2C%20Indus%20Main%2C%20Srinagar%20Hwy%2C%20Islamabad!5e0!3m2!1sen!2sus!4v1725974400000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="J7 Icon Location"
          className="border-0"
        ></iframe>
      </div>
    </>
  );
}
