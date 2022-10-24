const NotFoundPage = (props) => {
  const { statusCode } = props
  return <div>Error {statusCode}</div>
}

export default NotFoundPage

NotFoundPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
