// import React from 'react';
// import { Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import App from 'components/Loader/Bar';
// import avatar1 from '../../assets/images/user/avatar-1.jpg';
// import avatar2 from '../../assets/images/user/avatar-2.jpg';
// import avatar3 from '../../assets/images/user/avatar-3.jpg';

// const DashDefault = () => {
//   return (
//     <div style={{ backgroundColor: '#000000', padding: '40px' }}> {/* Background added here */}
//       <Row>
//         <Col md={6} xl={4}>
//           <Card className="card-social h-100" style={{ borderRadius: '35px' }}>
//             <Card.Body className="d-flex flex-column">
//               <div className="mb-3">
//                 <h4><b>Facility Information <br />IIT Madras Research Park</b></h4>
//               </div>
//               <div className="flex-grow-1">
//                 BUA: 12 lakhs sq.ft.<br />
//                 Chennai, India <br />
//                 Climate Type: Hot & Humid
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6} xl={4}>
//           <Card className="card-social h-100" style={{ borderRadius: '35px' }}>
//             <Card.Body className="d-flex flex-column">
//               <div className="mb-3">
//                 <h4><b>Elements Score</b></h4>
//               </div>
//               <div className="flex-grow-1">
//                 <h5>Your Building Score: 760</h5>
//                 <br />
//                 Suggestions For Improvement
//               </div>

//               <Row className="mt-auto">
//                 <div className="col mt-3">
//                   <button className="btn btn-primary">Connect</button>
//                 </div>

//                 <div className="col mt-3">
//                   <div className="progress" style={{ height: '20px' }}>
//                     <div
//                       className="progress-bar bg-success"
//                       role="progressbar"
//                       style={{ width: '76%' }}
//                       aria-valuenow="76"
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     >
//                       760 - Good
//                     </div>
//                   </div>
//                   <div className="d-flex justify-content-between mt-2">
//                     <small>Poor</small>
//                     <small>Average</small>
//                     <small>Good</small>
//                   </div>
//                 </div>
//               </Row>
//             </Card.Body>
//           </Card>
//         </Col>

//         <Col md={6} xl={4}>
//           <Card className="p-4 card-social h-100" style={{ borderRadius: '35px' }}>
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <h6 className="mb-0"><b>Savings</b></h6>
//               <div className="dropdown">
//                 <button
//                   className="btn btn-link dropdown-toggle text-dark p-0"
//                   type="button"
//                   id="dropdownMenuButton"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Today ▾
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
//                   <li><a className="dropdown-item" href="#">Yesterday</a></li>
//                   <li><a className="dropdown-item" href="#">This Week</a></li>
//                   <li><a className="dropdown-item" href="#">This Month</a></li>
//                 </ul>
//               </div>
//             </div>

//             <div className="d-flex justify-content-between align-items-start flex-grow-1">
//               <div>
//                 <p className="mb-0"><small>Energy</small></p>
//                 <h4 className="mb-0"><b>1.4K</b> <small>kWh (Avg)</small></h4>
//                 <p className="text-muted mb-0"><small>During Peak Shaving</small> <i className="bi bi-info-circle"></i></p>
//               </div>
//               <div className="text-end">
//                 <p className="mb-0"><small>Cost</small></p>
//                 <h4 className="mb-0"><b>₹2K</b></h4>
//                 <p className="text-muted mb-0"><small>During peak hours</small> <i className="bi bi-info-circle"></i></p>
//               </div>
//             </div>
//           </Card>
//         </Col>
//       </Row>
     
//     </div>
    
//   );
// };

// export default DashDefault;

import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Bar from 'components/Loader/Bar'; // Import the Bar component
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import { Pie } from 'recharts';
import PieDonutChart from 'components/Loader/PieDonutChart';
const DashDefault = () => {
  return (
    <div>
      {/* Section with background color */}
      <div style={{ backgroundColor: '', padding: '40px' }}>
        
        <Row>
          <Col md={6} xl={4}>
            <Card className="card-social h-100" style={{ borderRadius: '35px' }}>
              <Card.Body className="d-flex flex-column">
                <div className="mb-3">
                  <h4><b>Facility Information <br />IIT Madras Research Park</b></h4>
                </div>
                <div className="flex-grow-1">
                  BUA: 12 lakhs sq.ft.<br />
                  Chennai, India <br />
                  Climate Type: Hot & Humid
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} xl={4}>
            <Card className="card-social h-100" style={{ borderRadius: '35px' }}>
              <Card.Body className="d-flex flex-column">
                <div className="mb-3">
                  <h4><b>Elements Score</b></h4>
                </div>
                <div className="flex-grow-1">
                  <h5>Your Building Score: 760</h5>
                  <br />
                  Suggestions For Improvement
                </div>

                <Row className="mt-auto">
                  <div className="col mt-3">
                    <button className="btn btn-primary">Connect</button>
                  </div>

                  <div className="col mt-3">
                    <div className="progress" style={{ height: '20px' }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: '76%' }}
                        aria-valuenow="76"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        760 - Good
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                      <small>Poor</small>
                      <small>Average</small>
                      <small>Good</small>
                    </div>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} xl={4}>
            <Card className="p-4 card-social h-100" style={{ borderRadius: '35px' }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0"><b>Savings</b></h6>
                <div className="dropdown">
                  <button
                    className="btn btn-link dropdown-toggle text-dark p-0"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Today ▾
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li><a className="dropdown-item" href="#">Yesterday</a></li>
                    <li><a className="dropdown-item" href="#">This Week</a></li>
                    <li><a className="dropdown-item" href="#">This Month</a></li>
                  </ul>
                </div>
              </div>

              <div className="d-flex justify-content-between align-items-start flex-grow-1">
                <div>
                  <p className="mb-0"><small>Energy</small></p>
                  <h4 className="mb-0"><b>1.4K</b> <small>kWh (Avg)</small></h4>
                  <p className="text-muted mb-0"><small>During Peak Shaving</small> <i className="bi bi-info-circle"></i></p>
                </div>
                <div className="text-end">
                  <p className="mb-0"><small>Cost</small></p>
                  <h4 className="mb-0"><b>₹2K</b></h4>
                  <p className="text-muted mb-0"><small>During peak hours</small> <i className="bi bi-info-circle"></i></p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Vertical Bar Chart - Outside the background colored section */}
      <Row>
      <Col md={8} xl={6}>
      <Card className="p- card-social h-100 w-100 mt-5" style={{ borderRadius: '35px' }}>
      <div className="mt-4">
        {/* <h4>Vertical Bar Chart</h4> */}
        <div>
          <Bar
            animationDuration={500}
            progress={0.76} // 76% progress
            direction="vertical" // Assuming the Bar component supports direction prop
          />
        </div>
      </div>
      </Card>
      </Col>
      <Col md={8} xl={6}>
      <Card className="p- card-social h-100 w-100 mt-5" style={{ borderRadius: '35px' }}>
      <div className="mt-4">
        {/* <h4>Vertical Bar Chart</h4> */}
        <div>
          <PieDonutChart
            animationDuration={500}
            progress={0.76} // 76% progress
            direction="vertical" // Assuming the Bar component supports direction prop
          />
        </div>
      </div>
      </Card>
      </Col>

      
      </Row>
    </div>
    
  );
};

export default DashDefault;
