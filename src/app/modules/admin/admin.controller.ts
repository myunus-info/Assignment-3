import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AdminServices } from './admin.service';

const blockUser = catchAsync(async (req, res) => {
  await AdminServices.blockUser(req.params.userId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User blocked successfully!',
  });
});

const deleteBlog = catchAsync(async (req, res) => {
  await AdminServices.deleteBlog(req.params.id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog deleted successfully!',
  });
});

export const AdminControllers = {
  blockUser,
  deleteBlog,
};
