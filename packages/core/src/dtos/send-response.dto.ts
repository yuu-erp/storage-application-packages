export interface SendResponseDto {
  success?: boolean
  granted?: boolean | number
  data?: any
  message?: any
  code?: string | number
  status?: number
}
