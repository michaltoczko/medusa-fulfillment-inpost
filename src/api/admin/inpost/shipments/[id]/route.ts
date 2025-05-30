import type { MedusaRequest, MedusaResponse } from "@medusajs/medusa"
import InpostFulfillmentService from "../../../../../services/inpost-fulfillment"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
): Promise<any> => {
  const inpostFulfillmentService: InpostFulfillmentService = req.scope.resolve(
    "inpostFulfillmentService"
  )

  const { id } = req.params

  try {
    const shipment = await inpostFulfillmentService.getShipment(id)

    res.json(shipment)
  } catch (error) {
    const { status, data } = error.response || { status: 500, data: {} }

    res.status(status).json({
      error: data.error,
      message: data.message,
    })
  }
}

export const PUT = async (
  req: MedusaRequest,
  res: MedusaResponse
): Promise<any> => {
  const inpostFulfillmentService: InpostFulfillmentService = req.scope.resolve(
    "inpostFulfillmentService"
  )

  const { id } = req.params
  const data = req.body

  try {
    const updatedShipment = await inpostFulfillmentService.updateShipment(id, data)

    res.json(updatedShipment)
  } catch (error) {
    const { status, data } = error.response || { status: 500, data: {} }

    res.status(status).json({
      error: data.error,
      message: data.message,
    })
  }
}

export const DELETE = async (
  req: MedusaRequest,
  res: MedusaResponse
): Promise<any> => {
  const inpostFulfillmentService: InpostFulfillmentService = req.scope.resolve(
    "inpostFulfillmentService"
  )

  const { id } = req.params

  try {
    const result = await inpostFulfillmentService.cancelShipment(id)

    res.json(result)
  } catch (error) {
    const { status, data } = error.response || { status: 500, data: {} }

    res.status(status).json({
      error: data.error,
      message: data.message,
    })
  }
}
