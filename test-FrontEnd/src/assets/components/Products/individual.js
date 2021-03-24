import React, { Component } from "react";
import { serverlink } from "./../../enviroment";
import store from "../../store/index";
import {
  addProductToCart,
  deleteOneProductOfCart,
} from "../../store/actions/cartActions";
import {
  IonButton,
  IonCol,
  IonGrid,
  IonRow,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonCardHeader,
} from "@ionic/react";
import { sendEvent } from "../../functions/GAFunctions";

class IndividualGrid extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
    this.onMinus = this.onMinus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onAdd = this.onAdd.bind(this);
  }

  onAdd() {
    sendEvent("add_to_cart_product");
    const data = {
      id: this.props.item.id,
      name: this.props.item.name,
      price_base: this.props.item.price_base,
      quantity: 1,
    };
    store.dispatch(addProductToCart(data));
    this.setState({ quantity: this.state.quantity + 1 });
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onMinus() {
    if (this.state.quantity == 0) {
    } else {
      this.setState({ quantity: parseInt(this.state.quantity) - 1 });
      store.dispatch(deleteOneProductOfCart(this.props.item));
    }
  }
  render() {
    if (this.props.st_notSame && this.state.quantity != 0) {
      this.setState({ quantity: 0 });
    }

    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    });

    return (
      <>
        <div className="col-md-4 hidden-xs">
          <IonCard className="">
            <IonCardTitle>
              <img
                className="img-responsive"
                src={this.props.item.picture}
                alt={this.props.item.name}
              />
            </IonCardTitle>
            <IonCardContent>
              <IonCardTitle>{this.props.item.name}</IonCardTitle>
              <IonCardSubtitle>
                {formatter.format(this.props.item.price_base)}
              </IonCardSubtitle>
              <div className="center-responsive fr-12">
                <div className="adition-box mtr-10">
                  <IonGrid>
                    <IonRow>
                      <IonCol
                        className="text-right"
                        style={{ marginTop: "4px" }}
                        size="4"
                      >
                        <IonButton
                          size="small"
                          disabled={this.state.quantity < 1}
                          onClick={this.onMinus}
                        >
                          <i className="fa fa-minus"></i>
                        </IonButton>
                      </IonCol>
                      <IonCol className="text-left pdr-0" size="4">
                        <input
                          type="number"
                          value={this.state.quantity}
                          style={{
                            marginTop: "5px",
                            border: "none",
                          }}
                          className="form-control bolder"
                          onChange={this.onChange}
                          onBlur={this.onBlur}
                          name="quantity"
                        />
                      </IonCol>
                      <IonCol
                        className="text-left"
                        style={{ marginTop: "4px" }}
                        size="4"
                      >
                        <IonButton size="small" style={{}} onClick={this.onAdd}>
                          <i className="fa fa-plus"></i>
                        </IonButton>
                      </IonCol>
                    </IonRow>
                  </IonGrid>
                </div>
              </div>
            </IonCardContent>
          </IonCard>
        </div>
        <div className="col-xs-12 visible-xs">
          <IonCard>
            <div className="row">
              <div className="col-xs-4">
                <img
                  className="img-responsive"
                  src={this.props.item.picture}
                  alt={this.props.item.name}
                />
              </div>
              <div className="col-xs-8 text-left">
                <p className="fs-16 f600">{this.props.item.name}</p>
                <IonCardSubtitle>
                  {formatter.format(this.props.item.price_base)}
                </IonCardSubtitle>
                <IonGrid>
                  <IonRow>
                    <IonCol
                      className="text-right"
                      style={{ marginTop: "0px" }}
                      size="4"
                    >
                      <IonButton
                        size="small"
                        disabled={this.state.quantity < 1}
                        onClick={this.onMinus}
                      >
                        <i className="fa fa-minus"></i>
                      </IonButton>
                    </IonCol>
                    <IonCol className="text-left pdr-0" size="4">
                      <input
                        type="number"
                        value={this.state.quantity}
                        style={{
                          marginTop: "5px",
                          border: "none",
                        }}
                        className="form-control bolder"
                        onChange={this.onChange}
                        onBlur={this.onBlur}
                        name="quantity"
                      />
                    </IonCol>
                    <IonCol
                      className="text-left"
                      style={{ marginTop: "0px" }}
                      size="4"
                    >
                      <IonButton size="small" style={{}} onClick={this.onAdd}>
                        <i className="fa fa-plus"></i>
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </div>
            </div>
          </IonCard>
        </div>
      </>
    );
  }
}

export default IndividualGrid;
