import {createHashRouter, Navigate} from "react-router-dom";
import Root from "../Root/Root.jsx";
import TreesSelectorPage from "../../pages/TreesSelectorsPage/TreesSelectorPage.jsx";
import CompositeSelectorsPage from "../../pages/CompositeSelectorsPage/CompositeSelectorsPage.jsx";
import RegistrationPage from "../../pages/RegistrationPage/RegistrationPage.jsx";
import SuccessPage from "../../pages/SuccessPage/SuccessPage.jsx";
import RegistrationWithRunningButton from "../../pages/RegistrationWithRunningButton/RegistrationWithRunningButton.jsx";
import SuccessFirePage from "../../pages/SuccessFirePage/SuccessFirePage.jsx";
import RegistrationWithTimer from "../../pages/RegistrationWithTimer/RegistrationWithTimer.jsx";
import RegistrationFailPage from "../../pages/RegistrationFailPage/RegistrationFailPage.jsx";

export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Navigate to="/tree-selectors" />, // Error element to render when a route matches an error
    children: [
      {
        path: "/tree-selectors",
        element: <TreesSelectorPage />,
        errorElement: <div>Oops! Something went wrong.</div>, // Error element to render when a route matches an error
      },
      {
        path: "/composite-selectors",
        element: <CompositeSelectorsPage />,
        errorElement: <div>Oops! Something went wrong.</div>, // Error element to render when a route matches an error
      },
      {
        path: "/registration-form",
        element: <RegistrationPage />,
        errorElement: <div>Oops! Something went wrong.</div>, // Error element to render when a route matches an error
      },
      {
        path: "/registration-form-fire",
        element: <RegistrationWithRunningButton />,
        errorElement: <div>Oops! Something went wrong.</div>, // Error element to render when a route matches an error
      },
      {
        path: "/success",
        element: <SuccessPage />,
        errorElement: <div>Oops! Something went wrong.</div>, // Error element to render when a route matches an error
      },
      {
        path: "/success-fire",
        element: <SuccessFirePage />,
        errorElement: <div>Oops! Something went wrong.</div>, // Error element to render when a route matches an error
      },
      {
        path: "/registration-fail",
        element: <RegistrationFailPage />,
        errorElement: <div>Oops! Something went wrong.</div>, // Error element to render when a route matches an error
      },
      {
        path: "/registration-form-timer",
        element: <RegistrationWithTimer />,
        errorElement: <div>Oops! Something went wrong.</div>, // Error element to render when a route matches an error
      },
    ]
  },

]);
