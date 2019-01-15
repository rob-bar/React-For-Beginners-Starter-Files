import React from 'react';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  creatFish = (e) => {
    e.preventDefault();
    const fish = {
      name: this.nameRef.value.value,
      price: parseFloat(this.priceRef.value.value),
      status: this.statusRef.value.value,
      desc: this.descRef.value.value,
      image: this.imageRef.value.value,
    };
    this.props.addFish(fish);
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.creatFish}>
        <input name="name" ref={this.nameRef} type="text" placerholder="Name"/>
        <input name="price" ref={this.priceRef} type="number" placerholder="Price"/>
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" ref={this.descRef} placerholder="Desc"></textarea>
        <input name="image" ref={this.imageRef} type="text" placerholder="Image"/>
        <button type="submit">+ Add Fish</button>
      </form>
    )
  }
}

export default AddFishForm;
