import React, { Component } from 'react';
import { connect } from 'react-redux';
import styledComponents from '../../styledComponents';
import NavigationBar from '../navigationbar';
import { updateFormInput, submitForm } from '../../actions/formActions';

const { FormCard, FormInput, FormContainer, Panel, ToggleContainer, ToggleDiv } = styledComponents;
class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: false,
    }
    this.handleToggle = this.handleToggle.bind(this);
    this.handleFormUpdate = this.handleFormUpdate.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
 
  handleFormUpdate(e, form, field){
    const { value } = e.target;
    const { updateFormInput } = this.props;
    updateFormInput({form, field, value});
  }

  handleFormSubmit(form){
    const { submitForm } = this.props;
    submitForm(form);
  }

  handleToggle(name){
    if (name === 'login'){
      this.setState({
        selected: false
      });
    }
    else (
      this.setState({
        selected: true
      })
    )
  }

  render() {
    const { selected } = this.state;
    return (
      <div>
        <div>
          <NavigationBar />
        </div>
        <Panel />
        <FormCard>

            <ToggleContainer>
              <ToggleDiv selected={selected} onClick={() => {this.handleToggle('login')}} >
                <p>Login</p>
              </ToggleDiv>
              <ToggleDiv selected={!selected} onClick={() => {this.handleToggle()}}>
                <p>Signup</p>
              </ToggleDiv>
            </ToggleContainer> 

          <FormContainer selected={selected}>
              <FormInput 
                type="text" 
                placeholder="First Name" 
                onChange={(e) => {this.handleFormUpdate(e, 'signup', 'firstName')}} 
              />
              <FormInput 
                type="text" 
                placeholder="Last Name" 
                onChange={(e) => {this.handleFormUpdate(e, 'signup', 'lastName')}} 
              />
              <FormInput 
                type="text" 
                placeholder="Email" 
                onChange={(e) => {this.handleFormUpdate(e, 'signup', 'email')}}  
              />
              <FormInput 
                type="password" 
                placeholder="Password" 
                onChange={(e) => {this.handleFormUpdate(e, 'signup', 'password')}} 
              />
              <FormInput 
                type="password" 
                placeholder="Re-enter Password" 
                onChange={(e) => {this.handleFormUpdate(e, 'signup', 're-enterPassword')}} 
              />
              <FormInput 
                type="button" 
                value="Signup"
                onClick={() => {this.handleFormSubmit('signup')}}
              />
          </FormContainer>

          <FormContainer selected={!selected}>
              <FormInput 
                type="text" 
                placeholder="Email" 
                onChange={(e) => {this.handleFormUpdate(e, 'login', 'email')}} 
              />
              <FormInput 
                type="password" 
                placeholder="Password" 
                onChange={(e) => {this.handleFormUpdate(e, 'login', 'password')}} 
              />
              <FormInput 
                type="button" 
                value="login"
                onClick={() => {this.handleFormSubmit('login')}}
              />
          </FormContainer>
        </FormCard>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    forms: state.forms
  });
}

const mapDispatchToProps = {
  updateFormInput,
  submitForm
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
