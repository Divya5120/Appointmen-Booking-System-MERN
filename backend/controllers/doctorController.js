import doctorModel from "../models/doctorModel.js";

const changeAvailability = async (requestAnimationFrame, res) => {
  try {
    const { docId } = requestAnimationFrame.body;
    const docData = await doctorModel.findById(docId);
    await doctorModel.findByIdAndUpdate(docId, {
      available: !docData.available,
    });
    res.json({ success: true, message: "Availability changed" });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

const doctorList = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).select(["-password", "-email"]);
    res.json({ success: true, doctors });
  } catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
};

//API FOR DOCTOR login

const loginDoctor= async (req, res) => {
  try{}
  catch (err) {
    console.log(err);
    res.json({ success: false, message: err.message });
  }
}

export { changeAvailability, doctorList };
