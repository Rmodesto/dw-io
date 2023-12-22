//
import React from 'react';
import DashboardContent from './DashboardContent';
import Header from './HeaderDash';
import Sidebar from './Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
