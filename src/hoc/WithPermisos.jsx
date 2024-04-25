/* eslint-disable react/display-name */

export const WithPermisos = (WrappedComponent, permitId) => (props) => {
  // usuario que esta logueado tiene los permisos numero [1, 5 , 7]

  const permisosDelUsuario = [1, 5, 7]; //tiene que venir de algun lugar, base de datos, etc

  switch (permisosDelUsuario.includes(permitId)) {
    case true:
      return <WrappedComponent {...props} />;
    case false:
      return <h1> No tienes permisos para ver este contenido </h1>;
  }
};
