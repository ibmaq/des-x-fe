import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const {
      fullName,
      businessEmail,
      projectDetails,
      selectedServices,
      budget,
    } = await req.json();

    const response = await resend.emails.send({
      // from: "DES X Design <leads@test.com>",
      from: "DES X Design <leads@desx.design>",
      to: "desxsolutions@gmail.com",
      // to: "ibrahimaq99@gmail.com",
      subject: `New Lead | ${fullName}`,
      text: `
        Full Name: ${fullName}
        Email: ${businessEmail}
        Budget: ${budget}
        Selected Services: ${
          selectedServices.length ? selectedServices.join(", ") : "None"
        }
        
        Project Details:
        ${projectDetails}
      `,
    });

    return Response.json({ success: true, response }, { status: 200 });
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
