import Doctor from "../models/DoctorSchema.js";
import Review from "../models/ReviewSchema.js";

// get all reviews
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({});
    res.status(200).json({
      success: true,
      message: "Successfully retrieved all reviews",
      data: reviews.data,
    });
  } catch (error) {
    console.error(error);
    res.status(404).json({ success: false, message: "Not found" });
  }
};

// create a review
export const createReview = async (req, res) => {
  try {
    if (!req.body.doctor) req.body.doctor = req.params.doctorId;
    if (!req.body.user) req.body.user = req.userId;
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();
    await Doctor.findByIdAndUpdate(req.body.doctor, {
      $push: { reviews: savedReview._id },
    });
    res.status(200).json({
      success: true,
      message: "Review submitted successfully",
      data: savedReview,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: error.message, data: error.data });
  }
};
