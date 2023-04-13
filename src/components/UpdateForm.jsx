
export const UpdateForm = ({ editItem, onClose, onEdit }) => {
return (
    <div>
        <h2>Edit modal</h2>
        <button 
        type="button"
        onClick={() =>{ 
        onEdit({ id: editItem.id, title: 'Wow! Wow! Wow!', link: editItem.link});
        onClose();
        }}>Make edit</button>
        <button type='button' onClick={onClose}>Close</button>
    </div>
    )
};