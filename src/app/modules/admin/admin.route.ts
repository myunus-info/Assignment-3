import { Router } from 'express';
import { AdminControllers } from './admin.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.constant';

const router = Router();

router.patch('/users/:userId/block', auth(USER_ROLE.admin), AdminControllers.blockUser);

router.delete('/blogs/:id', auth(USER_ROLE.admin), AdminControllers.deleteBlog);

export const AdminRoutes = router;
