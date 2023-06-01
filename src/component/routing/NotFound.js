<<<<<<< HEAD
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    Swal.fire({
      title: '404',
      text: 'Page Not Found',
      icon: 'error',
    });
  }, []);

  return <div className="not-found">Page Not Found</div>;
};

export default NotFound;
=======
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';
import './NotFound.css';

const NotFound = () => {
  useEffect(() => {
    Swal.fire({
      title: '404',
      text: 'Page Not Found',
      icon: 'error',
    });
  }, []);

  return <div className="not-found">Page Not Found</div>;
};

export default NotFound;
>>>>>>> 0df67ea6dac342501196177dbff275f440fad1f0
