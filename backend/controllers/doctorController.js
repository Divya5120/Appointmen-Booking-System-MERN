import doctorModel from "../models/doctorModel";

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

export { changeAvailability };
