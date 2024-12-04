import Link from "next/link";

const Modal = ({ title, children, href, modalId }) => {
  return (
    <>
      <button
        type="button"
        className="btn bg-cat-maroon text-cat-base hover:bg-cat-red w-1/3"
        data-bs-toggle="modal"
        data-bs-target={`#${modalId}`}
      >
        Info
      </button>

      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby={`${modalId}-label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content bg-cat-base">
            <div className="modal-header">
              <h5 className="modal-title text-cat-maroon font-bold" id={`${modalId}-label`}>
                {title}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              {children}
            </div>
            <div className="modal-footer">
              <Link href={href} passHref>
                <button type="button" className="btn bg-cat-maroon hover:bg-cat-red flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 .5C5.373.5 0 5.873 0 12.5c0 5.245 3.388 9.688 8.06 11.245.59.109.8-.256.8-.569 0-.28-.01-1.21-.015-2.191-3.283.715-3.973-1.58-3.973-1.58-.537-1.364-1.312-1.73-1.312-1.73-1.075-.735.083-.72.083-.72 1.188.083 1.813 1.22 1.813 1.22 1.055 1.811 2.77 1.288 3.445.986.107-.765.414-1.288.754-1.588-2.665-.3-5.466-1.333-5.466-5.933 0-1.312.468-2.386 1.236-3.23-.124-.303-.535-1.528.117-3.176 0 0 1.008-.323 3.295 1.23.957-.267 1.987-.399 3.005-.404 1.018.005 2.048.137 3.005.404 2.287-1.553 3.295-1.23 3.295-1.23.653 1.648.241 2.873.118 3.176.769.844 1.236 1.918 1.236 3.23 0 4.608-2.807 5.624-5.471 5.914.426.367.807 1.096.807 2.206 0 1.592-.014 2.874-.014 3.26 0 .314.209.684.805.568C20.612 22.188 24 17.745 24 12.5 24 5.873 18.627.5 12 .5z" />
                  </svg>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
