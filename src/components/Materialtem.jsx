import { Component } from "react";
import { UpdateForm } from "./UpdateForm";


export class MaterialItem extends Component {
    state = {
        isModalOpen: false,
    };

    handleModal = () => 
        this.setState(prevState => ({
        isModalOpen: !prevState.isModalOpen,
    }));

    render() {
        const { item, onDelete, onUpdate } = this.props;

        return (
            <div>
                <h2><b>Title: </b> {item.title}</h2>
                <p><b>Link: </b> {item.link}</p>
                <button type="button" onClick={() => onDelete(item.id)}>Delete</button>
                <button 
                    type="button" 
                    onClick={this.handleModal}
                    >Edit</button>
                {this.state.isModalOpen 
                && <UpdateForm 
                    editItem={item}
                    onClose={this.handleModal} 
                    onEdit={onUpdate} />}
                <hr />
            </div>
        );
    };
};