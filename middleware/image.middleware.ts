import { query } from 'express-validator'

const getImageRules = () => {
  return [
    query('exclude')
      .if((value: any) => value)
      .isMongoId()
      .withMessage('exclude không đúng định dạng')
  ]
}


const imageMiddleware = { getImageRules }

export default imageMiddleware