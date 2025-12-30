
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './Layouts/Layout';
import FacultyLayout from './Layouts/FacultyLayout'; // Import FacultyLayout
import AdminLayout from './Layouts/AdminLayout'; // Import AdminLayout

import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import FacultySISU from './pages/SISU/FacultySISU';
import AdminSISU from './pages/SISU/AdminSISU';
import StudentSISU from './pages/SISU/StudentSISU';
import FacultyRegister from './pages/SISU/FacultyRegister';
import StudentRegister from './pages/SISU/StudentRegister';
import { FontSizeProvider } from './components/Ribbon/FontSizeContext';
import FontSizeHandler from './components/Ribbon/FontSizeHandler';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="font-size-handler" element={<FontSizeHandler />} />
      <Route path="faculty-sign-up" element={<FacultySISU />} />
      <Route path="admin-sign-up" element={<AdminSISU />} />
      <Route path="student-sign-up" element={<StudentSISU />} />
      <Route path="faculty-register" element={<FacultyRegister />} />
      <Route path="student-register" element={<StudentRegister />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

createRoot(document.getElementById('root')).render(
  <FontSizeProvider>
    <RouterProvider router={router} />
  </FontSizeProvider>
);