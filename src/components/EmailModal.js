import React, { Component } from "react";
import { Button, Modal, ModalHeader, Input, ModalFooter } from 'reactstrap';

class EmailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Export</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Send Results to Your Email</ModalHeader>
          <Input style={{width: "90%", marginLeft: '5%', paddingLeft: '1%'}} type="email" name="email" id="exampleEmail" placeholder="Email" />
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Send</Button>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EmailModal;