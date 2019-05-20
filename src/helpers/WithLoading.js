import React from "react";
import styles from "../assets/styles/WithLoading.module.scss";

function WithLoading(Component) {
  return function WithLoadingComponent({ isFetching, ...props }) {
    if (!isFetching) return <Component {...props} />;
    return (
      <div className={styles.wrapper}>
        <p>Sé paciente, la carga de datos puede tomar algo de tiempo :)</p>
      </div>
    );
  };
}

export default WithLoading;
