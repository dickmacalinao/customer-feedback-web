import { useState, useRef, useEffect } from "react";
import { FaEllipsisH } from "react-icons/fa";

type Props<T> = {
  row: T;
  onView?: (row: T) => void;
  onEdit?: (row: T) => void;
  onDelete?: (row: T) => void;
};

export default function RowActionMenu<T>({
  row,
  onView,
  onEdit,
  onDelete,
}: Props<T>) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const buttonRef = useRef<HTMLButtonElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="menu-container" ref={menuRef}>
      <p>{open}</p>
      <button
        ref={buttonRef}
        className="menu-button"
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaEllipsisH />
      </button>

      {open && (
        <>
          {/* Optional overlay */}

          <div className="popup-overlay" onClick={() => setOpen(false)} />

          <div ref={popupRef} className="popup-menu">
            <button
              onClick={() => {
                onView?.(row);
                setOpen(false);
              }}
            >
              View
            </button>

            <button
              onClick={() => {
                onEdit?.(row);
                setOpen(false);
              }}
            >
              Edit
            </button>

            <button
              className="danger"
              onClick={() => {
                onDelete?.(row);
                setOpen(false);
              }}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
}
