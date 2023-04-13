import { Component } from "react"
import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { MaterialsEditorForm } from "./MaterialsEditorForm";
import * as API from './api';
import { MaterialsList } from "./MaterialsList";

export class App extends Component {

  state = {
    materials: [],
    isLoading: false,
    error: null
  };

  async componentDidMount() {
    try {
      this.setState({ isLoading: true, })
      const materials = await API.getMaterials();
      this.setState({ materials, isLoading: false, })
    } catch (error) {
      this.setState({ error, isLoading: false,  });
      console.log(error);
    }
  }

  handleSubmit = async (values) => {
    try {

      const material = await API.addMaterial(values);
      this.setState(prevState => ({ 
        materials:  [...prevState.materials, material], 
      }));

      console.log(material);

    } catch (error) {
      console.log(error);
    };
  };

  deleteMaterial = async id => {
    try {
      await API.deleteMaterial(id);
      this.setState(prevState => (
        { materials: prevState.materials.filter(
          material => material.id !== id
          )}))
    } catch (error) {
      this.setState({ error, isLoading: false,  });
      console.log(error);
    }
};

  updateMaterial = async fields => {
    try {
      const updateMaterial = await API.updateMaterial(fields);
      this.setState( state => (
        {
          materials: this.state.materials.map(material => 
            material.id === fields.id ? updateMaterial : material)
      }
      ))
    } catch (error) {
      this.setState({ error, isLoading: false,  });
      console.log(error);
    }
  };

  render() {

    const { materials, isLoading, error } = this.state;

    return (
      <>
        <GlobalStyle />
        {error && <div><p>{error}</p></div> }
        <MaterialsEditorForm onSubmit={this.handleSubmit} />
        {isLoading 
        ? <p>Loading....</p> 
        : <MaterialsList 
          items={materials} 
          onDelete={this.deleteMaterial}
          onUpdate= {this.updateMaterial}
            /> }
      </>
    );
  }
};
