import express from 'express';
import { deleteBooking, getBookingById, newBooking } from '../controllers/booking-controller';


const bookingRouter=express.Router();
bookingRouter.post('/',newBooking);
bookingRouter.get('/:id',getBookingById);
bookingRouter.delete("/:id",deleteBooking);
export default bookingRouter;