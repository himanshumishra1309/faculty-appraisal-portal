
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import Layout from './Layouts/Layout';
import FacultyLayout from './Layouts/FacultyLayout'; // Import FacultyLayout
import AdminLayout from './Layouts/AdminLayout'; // Import AdminLayout
import RouteTransitionWrapper from './Animations/RouteTransitionWrapper';

import Home from './pages/Home/Home';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import FacultySISU from './pages/SISU/FacultySISU';
import AdminSISU from './pages/SISU/AdminSISU';
import StudentSISU from './pages/SISU/StudentSISU';
import FacultyRegister from './pages/SISU/FacultyRegister';
import StudentRegister from './pages/SISU/StudentRegister';
import { FontSizeProvider } from './components/Ribbon/FontSizeContext';
import FontSizeHandler from './components/Ribbon/FontSizeHandler';


import StudentHome from './pages/StudentPortal/StudentHome';
import StudentLayout from "./Layouts/StudentLayout"
import LectureCards from './pages/StudentPortal/LectureCards';
import UpcomingRsvp from './pages/StudentPortal/UpcomingRsvp';
import SeminarCards from './pages/StudentPortal/SeminarCards';

import LectureAndAttendance from './table/Tables/Faculty/LectureAndAttendance';
import FacultyCourseTable from './table/Tables/FacultyCourseTable';
import ResearchLayout from './Layouts/ResearchLayout';
import FacultyAppraisalReport from './pages/FacultyAppraisalReport';
import FacultyPointAllocationLayout from './Layouts/FacultyPointAllocationLayout';
import FacultyLecturesTable from './table/Tables/Faculty/FacultyLecturesTable';
import FacultySTTPTable from './table/Tables/Faculty/FacultySTTPTable';
import FacultyEventTable from './table/Tables/Faculty/FacultyEventTable';
import FacultySeminarsTable from './table/Tables/Faculty/FacultySeminarsConductedTable';
import FacultyProjectTable from './table/Tables/Faculty/FacultyProjectTable';
import FacultyGuidedTable from './table/Tables/Faculty/FacultyGuidedTable';
import SeminarLayout from './Layouts/SeminarLayout';
import UpcomingSeminars from './pages/UpcomingSeminars/UpcomingSeminars';
import PostsPage from './pages/FacultyPortal/PostsPage';
import AppraisalReport from './pages/FacultyAppraisalReport';
import SubjectList from './table/Tables/Faculty/SubjectList';


import AdminHomeLayout from "./Layouts/AdminHomeLayout"
import AdminHome from './pages/AdminPortal/AdminList/AdminHome';
import HODAppraisalLayout from './Layouts/HODAppraisalLayout';
import ReleaseFeedbacks from './pages/AdminPortal/AdminList/AdminFeedbacks';
import AdminLectureAllocationPage from './pages/AdminPortal/AdminList/AdminLectureAllocation';
import AdminAllocateSubjectToStudent from './pages/AdminPortal/AdminList/AdminAllocateSubjectToStudents';
import AdminPointAllocationLayout from './Layouts/AdminPointAllocationLayout';
import HODTaskDistributionLayout from './Layouts/HODTaskDistributionLayout';
import WeightageDistributionLayout from './Layouts/WeightageDistributionLayout';
import FacultyAppraisalRankingTable from './table/Tables/FacultyAppraisalRankingTable';
import AdminEditProfile from './components/EditProfile/AdminEditProfile';



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


    <Route path="admin" element={<AdminHomeLayout/>} errorElement={<NotFoundPage/>}>
    <Route  index element={<AdminHome/>} errorElement={<NotFoundPage/>}/>
    <Route path="faculty-data" element={ <RouteTransitionWrapper><AdminHome/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>}/>
    <Route path="hod-data" element={<RouteTransitionWrapper><HODAppraisalLayout/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>}/>

    <Route path="allocate-lectures" element={<RouteTransitionWrapper><AdminLectureAllocationPage/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>}/>
    <Route path="release-feedbacks" element={<RouteTransitionWrapper><ReleaseFeedbacks/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>}/>
    <Route path="register-faulty" element={<RouteTransitionWrapper><FacultyRegister/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>}/>
    <Route path="register-student" element={<RouteTransitionWrapper><StudentRegister/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>}/>
    <Route path="allocate-sub-student" element={<RouteTransitionWrapper><AdminAllocateSubjectToStudent/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>}/>
    <Route path="appraisal-points" element={<RouteTransitionWrapper><AdminPointAllocationLayout/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>}/>
    <Route path="assign-tasks" element={<RouteTransitionWrapper><HODTaskDistributionLayout/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>}/>
<Route path="weightage-distribution" element={<RouteTransitionWrapper><WeightageDistributionLayout/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />

<Route path="appraisal-ranking" element={<RouteTransitionWrapper><FacultyAppraisalRankingTable/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />

<Route path="edit-profile" element={<RouteTransitionWrapper><AdminEditProfile/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />
    </Route>


      <Route path="/faculty/:id" element={<FacultyLayout />}>
       <Route  index element={<RouteTransitionWrapper><FacultyAppraisalReport/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />
    
        {/* <Route path="contribution" element={<RouteTransitionWrapper><FacultyDataDashboard/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} /> */}
        <Route path="subject/:subjectId" element={<RouteTransitionWrapper><LectureAndAttendance /></RouteTransitionWrapper>}  errorElement={<NotFoundPage />}/>
        <Route path="teaching-process" element={<RouteTransitionWrapper><FacultyCourseTable/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />
        <Route path="research-papers" element={<RouteTransitionWrapper><ResearchLayout/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />
        <Route path="expert-lectures" element={<RouteTransitionWrapper><FacultyLecturesTable /></RouteTransitionWrapper>}errorElement={<NotFoundPage/>}  />
        <Route path="sttp-conducted" element={<RouteTransitionWrapper><FacultySTTPTable /></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />
        <Route path="students-guided" element={<RouteTransitionWrapper><FacultyGuidedTable /></RouteTransitionWrapper>}errorElement={<NotFoundPage/>}  />
        <Route path="seminars" element={<RouteTransitionWrapper><SeminarLayout /></RouteTransitionWrapper>}errorElement={<NotFoundPage/>}  >
         <Route path="upcoming" element={<RouteTransitionWrapper><UpcomingSeminars /></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} /> 
        </Route>
        <Route path="projects" element={<RouteTransitionWrapper><FacultyProjectTable /></RouteTransitionWrapper>} />
        <Route path="event-participation" element={<RouteTransitionWrapper><FacultyEventTable /></RouteTransitionWrapper>} errorElement={<NotFoundPage />} />
        <Route path="posts" element={<RouteTransitionWrapper><PostsPage/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />
        <Route path="appraisal-report" element={<RouteTransitionWrapper><AppraisalReport/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />
        {/* <Route path="peer-review" element={<RouteTransitionWrapper><PeerReview/></RouteTransitionWrapper>}errorElement={<NotFoundPage/>} /> */}

        <Route path="lecAttend" element={<RouteTransitionWrapper><SubjectList/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />

        <Route path="faculty-points" element={<RouteTransitionWrapper><FacultyPointAllocationLayout/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />
        {/* <Route path="teacheraddecture" element={<RouteTransitionWrapper><AddLecMarkAttendabce/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} /> */}

      </Route>


      <Route path="student-home" element={<StudentHome />} /> {/* Route for student portal */}
      <Route path="student" element={<RouteTransitionWrapper><StudentLayout/></RouteTransitionWrapper>}>
      <Route path="lecture" element={<RouteTransitionWrapper><LectureCards/></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />
      {/* <Route path="upcoming-rsvp" element={< UpcomingRsvp/>} errorElement={<NotFoundPage/>} /> */}
      <Route path="seminar" element={<RouteTransitionWrapper><SeminarCards /></RouteTransitionWrapper>} errorElement={<NotFoundPage/>} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Route>

  )
);

createRoot(document.getElementById('root')).render(
  <FontSizeProvider>
    <RouterProvider router={router} />
  </FontSizeProvider>
);