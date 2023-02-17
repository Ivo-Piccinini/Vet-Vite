const Error = ({children}) => {
  return (
    <div className="bg-red-600 text-white text-center uppercase font-bold mb-5 p-1 rounded-md">
    <p>{children}</p>
    </div>
  )
}

export default Error