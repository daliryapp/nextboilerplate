// import { t } from "locales";

const NEED_SUPPORT_MESSAGE = [1126, 1127]

const translateServerErrors = (error = null, code = null, customize = false) => {
  if (code) {
    return `error-${code}${customize ? '-custom' : ''}`
  } else if (error) {
    const errorCode = error?.data?.lang?.code
    if (!errorCode) return error?.data?.message || error?.data?.error

    // Errors with contact support message
    if (NEED_SUPPORT_MESSAGE.includes(+errorCode)) {
      return errorCode
      // t(`error-${errorCode}${customize ? "-custom" : ""}`) +
      // t("contact-support")
    }

    return `error-${errorCode}${customize ? '-custom' : ''}`
  }
}

export default translateServerErrors

export const getHumanError = error => {
  if (error?.response) {
    const errorMessage = translateServerErrors(error?.response)

    return errorMessage
  } else {
    return 'somethingWentWrong'
  }
}
