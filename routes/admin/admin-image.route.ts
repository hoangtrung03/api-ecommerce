import { Router } from 'express'
import helpersMiddleware from '../../middleware/helpers.middleware'
import authMiddleware from '../../middleware/auth.middleware'
import imageController from '../../controllers/image.controller'
import imageMiddleware from '../../middleware/image.middleware'
import { wrapAsync } from '../../utils/response'

const adminImageRouter = Router()

adminImageRouter.get(
    '',
    authMiddleware.verifyAccessToken,
    authMiddleware.verifyAdmin,
    imageMiddleware.getImageRules(),
    helpersMiddleware.entityValidator,
    wrapAsync(imageController.getImages)
  )
adminImageRouter.get(
  '/:image_id',
  authMiddleware.verifyAccessToken,
  authMiddleware.verifyAdmin,
  helpersMiddleware.idRule('image_id'),
  helpersMiddleware.idValidator,
  wrapAsync(imageController.getImage)
)

export default adminImageRouter
