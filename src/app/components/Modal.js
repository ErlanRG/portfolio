import Link from "next/link";

const Modal = ({ title, children, href, modalId }) => {
  return (
    <>
      <button 
        type="button" 
        className="btn bg-cat-maroon text-cat-base hover:bg-cat-red w-1/2" 
        data-bs-toggle="modal" 
        data-bs-target={`#${modalId}`}
      >
        Info
      </button>

      <div className="modal fade" id={modalId} tabIndex="-1" aria-labelledby={`${modalId}-label`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content bg-cat-base">
            <div className="modal-header">
              <h1 className="modal-title fs-5 text-cat-maroon font-bold" id={`${modalId}-label`}>{title}</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              <Link href={href}>
                <button type="button" className="btn bg-cat-maroon hover:bg-cat-red">Go to repository</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
