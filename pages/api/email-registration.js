export default function handler (req, res) {
    const {method} = req;

    //Access our data
    //extract data

    if (method === "POST") {
        const {email, name, subject, text, eventId} = req.body;

        res.status(200).json({
            message: `You have been registered succesfully with the email: ${email}
             ${eventId}
             ${name},
             ${subject},
             ${text}
             
             `});
    }
}