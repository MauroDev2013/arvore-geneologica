import "./Modal.css";
import { motion } from "framer-motion";
export default function Modal({ person, onClose }) {

  if (!person) return null;

  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <img src={person.image} />
        <h2>{person.name}</h2>
        <p>{person.relation}</p>
        <p>Nascimento: {person.birth}</p>
        <div className="modal-history">
          {person.history}
        </div>
      </motion.div>
    </motion.div>
  );
}
