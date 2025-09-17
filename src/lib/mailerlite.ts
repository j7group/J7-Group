import { ContactFormData, MailerLiteSubscriber } from "./contact/types";

export const addToMailerLite = async (formData: ContactFormData) => {
  try {
    console.log("MailerLite groupId:", process.env.MAILERLITE_GROUP_ID);
    console.log("Subscriber payload:", );
    const subscriber: MailerLiteSubscriber = {
      email: formData.email,
      fields: {
        name: formData.fullName,
        phone: formData.phone || "",
        property_interest: formData.interestedIn || "",
      },
      groups: [process.env.MAILERLITE_GROUP_ID!], // Replace with your group ID
    };

    const response = await fetch(
      "https://connect.mailerlite.com/api/subscribers",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.MAILERLITE_API_KEY}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(subscriber),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error("MailerLite API error:", errorData);
      throw new Error(`MailerLite API error: ${response.status}`);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.error("MailerLite subscription error:", error);
    throw new Error("Failed to add subscriber to MailerLite");
  }
};
