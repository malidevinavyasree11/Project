import React, { useState, useCallback } from 'react';
import { FaPencilAlt, FaEye } from 'react-icons/fa';
import './App.css';
import Filter from './Component/Filter/Filter';
import Navbar from './Component/Navbar/Navbar';
import Table from './Component/Table/Table';
import Column from './Component/Column/Column';
const App = () => {
  const initialData = [
    { 
      Owner:"Deepak",
      Account:"IBM",
      Position:"",
      Requirement:"Active",
      Grade:"C",
      Date:"1/4/2025",
      CandidateID:"7654",
      FullName:"MalideviNavyasree",
      ContactNo:"9876544321",
      Email:"malidevinavyasree@gmail.com",
      Source:"CareerSoft",
      Skills:"javascript,Html",
      Total_expMonth:"5",
      Total_ExpYear:"1",
      RelevantExpMonth:"12",
      RelevantExpYear:"23",
      CurrentLocation:"gurgaon",
      PreferredLocation:"Bengaluru",
      CurrentCTC:"26000",
      ExpectedCTC:"30000",
      BUARC:"1234",
      Hike:"1",
      ARC:"1",
      ARSSLAB:"Above Arc",
      NoticePeriod:"0",
      NPRange:"15days",
      TentativeDOJ:"2/02/2025",
      Lwp_if_series:"immediate",
      TentativeJoining:"Feb25",
      PayrollCurrent:"Realworld-one Gmbh&Co.KG",
      Client_Organization:"",
      Gender:"Female",
      Current_project:"",
      TeamSize_of_the_Project:"",
      Rehire:"No",
      Recuiter:"Manorama",
      TA_lead:"Shankar",
      CG_Screening_status:"Moved to L1",
      CG_Screening_FeedBack:"",
      CG_L1_round_Date:"1/06/2024",
      CG_L1_rond_Pannel:"pradeep",
      CG_L1_round_result:"Selected",
      CG_L2_round_Date:"",
      CG_L2_rond_Pannel:"",
      CG_L2_round_result:"",
      Client_Submission_type:"",
      Client_Submission_date:"1/04/2025",
      Client_l1_interview_date:"",
      Client_l1_interview_result:"Select",
      Client_l2_interview_date:"",
      Client_l2_interview_result:"",
      MR_round_date:"",
      MR_round_result:"",
      Final_Status:"CR to be shedulded",
      HM:"Vinutha",
      Project:"Regular Hiring",
      Remarks:"Slot Pending From Client",
      Wave:"",
      4:"",
      5:"",
      6:"",
      Category:"Profiles With Client",
      Tent_joining_Month:"Feb25",
    },
    { 
       Owner:"Deepak",
       Account:"IBM",
       Position:"",
       Requirement:"Active",
       Grade:"A",
       Date:"1/1/2025",
       CandidateID:"2345",
       FullName:"Mounika",
       ContactNo:"9876544321",
       Email:"Mounika@gmail.com",
       Source:"CareerSoft",
       Skills:"Css,Html",
       Total_expMonth:"5",
       Total_ExpYear:"1",
       RelevantExpMonth:"12",
       RelevantExpYear:"23",
       CurrentLocation:"gurgaon",
       PreferredLocation:"Bengaluru",
       CurrentCTC:"28000",
       ExpectedCTC:"36000",
       BUARC:"1234",
       Hike:"1",
       ARC:"1",
       ARSSLAB:"Above Arc",
       NoticePeriod:"0",
       NPRange:"15days",
       TentativeDOJ:"5/1/2025",
       Lwp_if_series:"30days before",
       TentativeJoining:"Feb20",
       PayrollCurrent:"Realworld-one Gmbh&Co.KG",
       Client_Organization:"",
       Gender:"Female",
       Current_project:"",
       TeamSize_of_the_Project:"",
       Rehire:"No",
       Recuiter:"Manorama",
       TA_lead:"Shankar",
       CG_Screening_status:"Moved to L1",
       CG_Screening_FeedBack:"",
       CG_L1_round_Date:"1/6/24",
       CG_L1_rond_Pannel:"pradeep",
       CG_L1_round_result:"Selected",
       CG_L2_round_Date:"",
       CG_L2_rond_Pannel:"",
       CG_L2_round_result:"",
       Client_Submission_type:"",
       Client_Submission_date:"1/02/2025",
       Client_l1_interview_date:"",
       Client_l1_interview_result:"Select",
       Client_l2_interview_date:"",
       Client_l2_interview_result:"",
       MR_round_date:"",
       MR_round_result:"",
       Final_Status:"CR to be shedulded",
       HM:"Vinutha",
       Project:"Regular Hiring",
       Remarks:"Slot Pending From Client",
       Wave:"",
       4:"",
       5:"",
       6:"",
       Category:"Profiles With Client",
       Tent_joining_Month:"Feb28",
  
    },
    { 
      Owner:"Anjali",
      Account:"Microsoft",
      Position:"",
      Requirement:"Active",
      Grade:"B",
      Date:"1/3/2025",
      CandidateID:"4321",
      FullName:"Chamanthi",
      ContactNo:"9876544321",
      Email:"Chamanthi@gmail.com",
      Source:"CareerSoft",
      Skills:"ReactJs",
      Total_expMonth:"5",
      Total_ExpYear:"1",
      RelevantExpMonth:"12",
      RelevantExpYear:"23",
      CurrentLocation:"gurgaon",
      PreferredLocation:"Bengaluru",
      CurrentCTC:"25000",
      ExpectedCTC:"30000",
      BUARC:"1234",
      Hike:"1",
      ARC:"1",
      ARSSLAB:"Above Arc",
      NoticePeriod:"0",
      NPRange:"15days",
      TentativeDOJ:"2/02/2025",
      Lwp_if_series:"Month before",
      TentativeJoining:"jan23",
      PayrollCurrent:"Realworld-one Gmbh&Co.KG",
      Client_Organization:"",
      Gender:"Female",
      Current_project:"",
      TeamSize_of_the_Project:"",
      Rehire:"No",
      Recuiter:"Manorama",
      TA_lead:"Shankar",
      CG_Screening_status:"Moved to L1",
      CG_Screening_FeedBack:"",
      CG_L1_round_Date:"11/7/24",
      CG_L1_rond_Pannel:"pradeep",
      CG_L1_round_result:"Selected",
      CG_L2_round_Date:"",
      CG_L2_rond_Pannel:"",
      CG_L2_round_result:"",
      Client_Submission_type:"",
      Client_Submission_date:"11/03/2025",
      Client_l1_interview_date:"",
      Client_l1_interview_result:"Select",
      Client_l2_interview_date:"",
      Client_l2_interview_result:"",
      MR_round_date:"",
      MR_round_result:"",
      Final_Status:"CR to be shedulded",
      HM:"Vinutha",
      Project:"Regular Hiring",
      Remarks:"Slot Pending From Client",
      Wave:"",
      4:"",
      5:"",
      6:"",
      Category:"Profiles With Client",
      Tent_joining_Month:"Feb25",
 
     },
     { 
      Owner:"Anjali",
      Account:"MicroSoft",
      Position:"",
      Requirement:"Active",
      Grade:"A",
      Date:"1/3/2025",
      CandidateID:"1234",
      FullName:"Harika",
      ContactNo:"9876544325",
      Email:"Harika@gmail.com",
      Source:"CareerSoft",
      Skills:"javascript,Html",
      Total_expMonth:"5",
      Total_ExpYear:"1",
      RelevantExpMonth:"12",
      RelevantExpYear:"23",
      CurrentLocation:"gurgaon",
      PreferredLocation:"Bengaluru",
      CurrentCTC:"26000",
      ExpectedCTC:"30000",
      BUARC:"1234",
      Hike:"1",
      ARC:"1",
      ARSSLAB:"Above Arc",
      NoticePeriod:"0",
      NPRange:"15days",
      TentativeDOJ:"2/03/2025",
      Lwp_if_series:"immediate",
      TentativeJoining:"Feb22",
      PayrollCurrent:"Realworld-one Gmbh&Co.KG",
      Client_Organization:"",
      Gender:"Female",
      Current_project:"",
      TeamSize_of_the_Project:"",
      Rehire:"No",
      Recuiter:"Manorama",
      TA_lead:"Shankar",
      CG_Screening_status:"Moved to L1",
      CG_Screening_FeedBack:"",
      CG_L1_round_Date:"17/7/24",
      CG_L1_rond_Pannel:"pradeep",
      CG_L1_round_result:"Selected",
      CG_L2_round_Date:"",
      CG_L2_rond_Pannel:"",
      CG_L2_round_result:"",
      Client_Submission_type:"",
      Client_Submission_date:"13/03/2025",
      Client_l1_interview_date:"",
      Client_l1_interview_result:"Select",
      Client_l2_interview_date:"",
      Client_l2_interview_result:"",
      MR_round_date:"",
      MR_round_result:"",
      Final_Status:"CR to be shedulded",
      HM:"Vinutha",
      Project:"Regular Hiring",
      Remarks:"Slot Pending From Client",
      Wave:"",
      4:"",
      5:"",
      6:"",
      Category:"Profiles With Client",
      Tent_joining_Month:"Feb25",
    },   
  ];
  const initialColumns = [
    { header: 'Owner', accessorKey: 'Owner' },
    { header: 'Account', accessorKey: 'Account' },
    { header: 'Positions', accessorKey: 'Positions' },
    { header: 'Requirement', accessorKey: 'Requirement' },
    { header: 'Grade', accessorKey: 'Grade' },
    { header: 'Date', accessorKey: 'Date' },
    { header: 'CandidateID', accessorKey: 'CandidateID' },
    { header: 'FullName', accessorKey: 'FullName' },
    { header: 'ContactNo', accessorKey: 'ContactNo' },
    { header: 'Email', accessorKey: 'Email' },
    { header: 'Source', accessorKey: 'Source' },
    { header: 'Skills', accessorKey: 'Skills' },
    { header: 'Total_expMonth', accessorKey: 'Total_expMonth' },
    { header: 'Total_ExpYear', accessorKey: 'Total_ExpYear' },
    { header: 'RelevantExpMonth', accessorKey: 'RelevantExpMonth' },
    { header: 'RelevantExpYear', accessorKey: 'RelevantExpYear' },
    { header: 'CurrentLocation', accessorKey: 'CurrentLocation' },
    { header: 'PreferredLocation', accessorKey: 'PreferredLocation' },
    { header: 'TeamSize_of_the_Project', accessorKey: 'TeamSize_of_the_Project' },
    { header: 'ExpectedCTC', accessorKey: 'ExpectedCTC' },
    { header: 'BUARC', accessorKey: 'BUARC' },
    { header: 'Hike', accessorKey: 'Hike' },
    { header: 'ARC', accessorKey: 'ARC' },
    { header: 'ARSSLAB', accessorKey: 'ARSSLAB' },
    { header: 'NoticePeriod', accessorKey: 'NoticePeriod' },
    { header: 'NPRange', accessorKey: 'NPRange' },
    { header: 'TentativeDOJ', accessorKey: 'TentativeDOJ' },
    { header: 'Lwp_if_series', accessorKey: 'Lwp_if_series' },
    { header: 'TentativeJoining', accessorKey: 'TentativeJoining' },
    { header: 'PayrollCurrent', accessorKey: 'PayrollCurrent' },
    { header: 'Client_Organization', accessorKey: 'Client_Organization' },
    { header: 'Gender', accessorKey: 'Gender' },
    { header: 'Current_project', accessorKey: 'Current_project' },
    { header: 'Rehire', accessorKey: 'Rehire' },
    { header: 'Recuiter', accessorKey: 'Recuiter' },
    { header: 'TA_lead', accessorKey: 'TA_lead' },
    { header: 'CG_Screening_status', accessorKey: 'CG_Screening_status' },
    { header: 'CG_Screening_FeedBack', accessorKey: 'CG_Screening_FeedBack' },
    { header: 'CG_L1_round_Date', accessorKey: 'CG_L1_round_Date' },
    { header: 'CG_L1_rond_Pannel', accessorKey: 'CG_L1_rond_Pannel' },
    { header: 'CG_L1_round_result', accessorKey: 'CG_L1_round_result' },
    { header: 'CG_L2_round_Date', accessorKey: 'CG_L2_round_Date' },
    { header: 'CG_L2_rond_Pannel', accessorKey: 'CG_L2_rond_Pannel' },
    { header: 'CG_L2_round_result', accessorKey: 'CG_L2_round_result' },
    { header: 'Client_Submission_type', accessorKey: 'Client_Submission_type' },
    { header: 'Client_l1_interview_date', accessorKey: 'Client_l1_interview_date' },
    { header: 'Client_l1_interview_result', accessorKey: 'Client_l1_interview_result' },
    { header: 'Client_l2_interview_date', accessorKey: 'Client_l2_interview_date' },
    { header: 'Client_l2_interview_result', accessorKey: 'Client_l2_interview_result' },
    { header: 'MR_round_date', accessorKey: 'MR_round_date' },
    { header: 'MR_round_result', accessorKey: 'MR_round_result' },
    { header: 'Final_Status', accessorKey: 'Final_Status' },
    { header: 'HM', accessorKey: 'HM' },
    { header: 'Project', accessorKey: 'Project' },
    { header: 'Remarks', accessorKey: 'Remarks' },
    { header: 'Wave', accessorKey: 'Wave' },
    { header: '4', accessorKey: '4' },
    { header: '5', accessorKey: '5' },
    { header: '6', accessorKey: '6' },
    { header: 'Category', accessorKey: 'Category' },
    { header: 'Tent_joining_Month', accessorKey: 'Tent_joining_Month' },
    {
      header: "Actions",
      accessorKey: 'Actions',
      cell: ({ row }) => (
        <div className="actions">
          <button className="edit-button"><FaPencilAlt /></button>
          <button className="view-button"><FaEye /></button>
        </div>
      ),
    },
  ];
  const loadColumnVisibility = () => {
    const savedVisibility = localStorage.getItem('columnVisibility');
    if (savedVisibility) {
      return JSON.parse(savedVisibility);
    }
    return initialColumns.reduce((acc, column) => {
      acc[column.accessorKey] = true;
      return acc;
    }, {});
  };
  const [data] = useState(initialData);
  const [columnVisibility, setColumnVisibility] = useState(loadColumnVisibility);
  const [isColumnDropdownOpen, setIsColumnDropdownOpen] = useState(false);
  const toggleColumnVisibility = useCallback((columnKey) => {
    setColumnVisibility((prevState) => {
      const newState = { ...prevState, [columnKey]: !prevState[columnKey] };
      localStorage.setItem('columnVisibility', JSON.stringify(newState));
      return newState;
    });
  }, []);
  const resetColumnVisibility = () => {
    const defaultVisibility = initialColumns.reduce((acc, column) => {
      acc[column.accessorKey] = true;
      return acc;
    }, {});
    setColumnVisibility(defaultVisibility);
    localStorage.setItem('columnVisibility', JSON.stringify(defaultVisibility));
  };
  const closeColumnDropdown = () => {
    setIsColumnDropdownOpen(false);
  };
  return (
    <div className="table">
      <div>
        <Navbar />
      </div>
      <div className="table-container">
        <div className="dropdown-container">
          <div className='filter-dropdown-wrapper'>
            <Filter closeColumnDropdown={closeColumnDropdown}/>
            <button className='column' onClick={() => setIsColumnDropdownOpen(!isColumnDropdownOpen)}>
              ...
            </button>
          </div>
          {isColumnDropdownOpen && (
            <Column
              initialColumns={initialColumns}
              columnVisibility={columnVisibility}
              toggleColumnVisibility={toggleColumnVisibility}
              resetColumnVisibility={resetColumnVisibility}
            />
          )}
        </div>
        <Table
          data={data}
          initialColumns={initialColumns}
          columnVisibility={columnVisibility}
          setColumnVisibility={setColumnVisibility}
        />
      </div>
    </div>
  );
};
export default App;
