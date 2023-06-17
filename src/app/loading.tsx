export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      <div className="grid place-content-center h-[40rem] w-full">
        {/* <div className="lds-hourglass"></div> */}
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </>
  )
}
