import DashboardBox from '@/conponents/DashboardBox';
import React from 'react';

type Props = {};

const Row3 = (props: Props) => {
  return (
    <>
    <DashboardBox gridArea="h"></DashboardBox>
    <DashboardBox gridArea="g"></DashboardBox>
    <DashboardBox gridArea="i"></DashboardBox>
    </>
  );
};

export default Row3;