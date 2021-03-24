import React from "react";
import { connect } from "react-redux";
import { IonImg, IonCard } from "@ionic/react";
import { serverlink } from "./../../enviroment";
import { Link } from "react-router-dom";
import "hover.css";
import { selectCategory } from "../../store/actions/informationActions";

const ListCategories = ({
  st_listCategories,
  selectCategory,
  dismissPopOver,
}) => {
  return (
    <>
      {st_listCategories.map((category) => {
        return (
          <div className="col-md-2 no-padding" key={category.id}>
            <Link
              onClick={() => {
                selectCategory(category.id);
                dismissPopOver();
              }}
              to={"/categoria/" + category.id}
              className="no-link hvr-grow"
            >
              <IonCard className="listCategoriesBox">
                <IonImg
                  src={category.image}
                  alt={category.name + "_categoria"}
                  className="img-responsive pt-10 pb-20"
                />
                {category.name}
              </IonCard>
            </Link>
          </div>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => ({
  st_listCategories: state.information.listCategories,
});

const setStateToProps = (dispatch) => {
  return {
    selectCategory: (categorySelected) =>
      dispatch(selectCategory(categorySelected)),
  };
};
export default connect(mapStateToProps, setStateToProps)(ListCategories);
