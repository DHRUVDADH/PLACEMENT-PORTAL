// contexts/Providers.js
import React from 'react';
import { StudentProvider } from './StudentContext'
import { CompanyProvider } from './CompanyContext'
import { AdminProvider } from './AdminContext'
import { QuestionProvider } from './QuestionContext';
import { LoginInfoProvider } from './LoginInfo';
import { UserInfoProvider } from './UserInfoContext';

export const AppProviders = ({ children }) => {
  return (
    <AdminProvider>
      <StudentProvider>
        <CompanyProvider>
          <QuestionProvider>
            <LoginInfoProvider>
              <UserInfoProvider>
                {children}
              </UserInfoProvider>
            </LoginInfoProvider>
          </QuestionProvider>
        </CompanyProvider>
      </StudentProvider>
    </AdminProvider>
  );
};

export default AppProviders;
