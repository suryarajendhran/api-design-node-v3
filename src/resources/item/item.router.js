import { Router } from 'express'

const router = Router()

const mockController = (res, req) => {
  res.send({ message: 'route works' })
}
// /api/item
router
  .route('/')
  .get(mockController)
  .post(mockController)

// /api/item/:id
router
  .route('/:id')
  .get(mockController)
  .put(mockController)
  .delete(mockController)

export default router
