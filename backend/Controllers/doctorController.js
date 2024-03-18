import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    ); //{new:true} is used to return the new updated data instead of old data

    res
      .status(200)
      .json({
        success: true,
        message: "Updated successfully ",
        data: updateDoctor,
      });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to update" });
  }
};
export const deleteDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Deleted successfully " });
  } catch (err) {
    res.status(500).json({ success: false, message: "Failed to delete" });
  }
};
export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id).select("-password");
    res
      .status(200)
      .json({ success: true, message: "Doctor found ", data: doctor });
  } catch (err) {
    res.status(404).json({ success: false, message: "No Doctor found" });
  }
};
export const getAllDoctor = async (req, res) => {
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors =  await Doctor.find({
        isApproved: "approved",
        $or: [{ name: { $regex: query, $options: "i" } },{ specialization: { $regex: query, $options: "i" } },],
      }).selected('-password');
    }else{
        doctors = await Doctor.find({isApproved:"approved"}).select("-password"); //-->select function excludes the password field
    }

    res
      .status(200)
      .json({ success: true, message: "Doctor found", data: doctors });
  } catch (err) {
    res.status(404).json({ success: false, message: "Not found" });
  }
};
