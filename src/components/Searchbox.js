import React from "react";
import { connect } from "react-redux";
import { setProductQuery } from "../actions";
import styles from "../assets/styles/Searchbox.module.scss";

function Searchbox(props) {
  function handleChange(e) {
    const { value } = e.target;
    const { dispatch } = props;

    dispatch(setProductQuery(value));
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.inside}>
        <svg
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          className={styles.icon}
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="icon-shape">
              <path d="M12.9056439,14.3198574 C11.5509601,15.3729184 9.84871145,16 8,16 C3.581722,16 0,12.418278 0,8 C0,3.581722 3.581722,0 8,0 C12.418278,0 16,3.581722 16,8 C16,9.84871145 15.3729184,11.5509601 14.3198574,12.9056439 L19.6568542,18.2426407 L18.2426407,19.6568542 L12.9056439,14.3198574 Z M8,14 C11.3137085,14 14,11.3137085 14,8 C14,4.6862915 11.3137085,2 8,2 C4.6862915,2 2,4.6862915 2,8 C2,11.3137085 4.6862915,14 8,14 Z" />
            </g>
          </g>
        </svg>
        <input
          type="search"
          name="searchbox"
          className={styles.input}
          onChange={handleChange}
          placeholder="¿Qué estás buscando?"
          autoComplete="off"
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  productQuery: state.productQuery
});

export default connect(mapStateToProps)(Searchbox);
