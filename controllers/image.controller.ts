import { Request, Response } from 'express'
import { responseSuccess, ErrorHandler, responseError } from '../utils/response'
import { STATUS } from '../constants/status'
import { ImageModel } from '../database/models/image.model'

const getImage = async (req: Request, res: Response) => {
  const imageDB = await ImageModel.findById(req.params.image_id)
    .select({ __v: 0 })
    .lean()
  if (imageDB) {
    const response = {
      message: 'Lấy image thành công',
      data: imageDB,
    }
    return responseSuccess(res, response)
  } else {
    throw new ErrorHandler(STATUS.BAD_REQUEST, 'Không tìm thấy Image')
  }
}

const getImages = async (req: Request, res: Response) => {
  const { exclude } = req.query
  let condition = exclude ? { _id: { $ne: exclude } } : {}
  try {
    const images = await ImageModel.find(condition).select('-__v').lean()
    const response = {
      message: 'Lấy image thành công',
      data: images,
    }
    return res.status(200).json(response)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Lấy image không thành công' })
  }
}

const imageController = {
  getImage,
  getImages,
}

export default imageController
