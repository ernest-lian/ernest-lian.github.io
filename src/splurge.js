import React from 'react';

import { Box } from '@material-ui/core';

import './synthesize.css';

import SplurgeCover from './images/splurge-cover.png';
import SplurgeGif from './images/splurge-gif.gif';

import SplurgeGifTwo from './images/splurge-gif-two.gif';
import SplurgeGifThree from './images/splurge-gif-three.gif';

const Overview = () => {
  return (
    <Box
    bgcolor='#f5f6f7'
    pl='20%'
    pr='20%'
    pt={4}
    pb={4}

  >
    <Box
      id='h1'
    >
      Overview
    </Box>
    <Box>
      <Box
        pt={2}
      >
      Managing personal finances can present challenges, particularly when individuals lack a strong foundation in financial literacy. The complexity of banking applications, coupled with limited features lacking data categorization, further hinder the process. It is time to say goodbye to your excel spreadsheets and embrace a more efficient and streamlined approach to organizing expenses.
      </Box>
    </Box>
    <Context/>
  </Box>
  )
}

const Context = () => {
  return (
  <Box
    pt={4}
    pb={4}
  >
    <Box
      id='project-subheader'
    >
      Context
    </Box>
    <Box
      pt={2}
      id='h2'  
    >
      Why it is challenging to budget using banking apps?
    </Box>
    <Box
      pt={1}
    >
        <ul>
            <li>
                <span style={{'font-weight': 'bold'}}>Lack of financial literacy:</span> Many individuals may not have a strong understanding of budgeting concepts and financial management which can make it difficult to effectively utilize budgeting tools provided by banking apps
            </li>
            <li>
                <span style={{'font-weight': 'bold'}}>Complex user interfaces:</span> Some banking apps have complicated interfaces, making it challenging for users to navigate and understand budgeting features effectively
            </li>
            <li>
                <span style={{'font-weight': 'bold'}}>Limited features or customization options:</span> Banking apps lack budgeting features or have tools that do not align with an individual's specific budgeting needs, hindering their overall experience
            </li>
            <li>
                <span style={{'font-weight': 'bold'}}>Data categorization issues:</span> Some banking apps automatically categorize transactions into spending categories which lacks customizability and lead to misrepresentation of spending patterns 
            </li>
        </ul>
    </Box>

    <Box
      pt={4}
      id='h2'  
    >
      Key Insights:
    </Box>
    <Box
      pt={1}
    >
      Addressing these key insights can lead to improved user experiences and increased effectiveness of budgeting tools in banking apps. By promoting financial literacy, simplifying interfaces, providing customization options, and allowing flexibility in data categorization, banking apps can better support individuals in managing their finances and achieving their financial goals.
    </Box>
  </Box>)
}

const ProblemStatement = () => {
  return (
    <Box
      pl='20%'
      pr='20%'
      pt={4}
      pb={4}
      bgcolor='black'
    >
      <Box
        id='h1'
        color='white'
      >
        Problem Statement
      </Box>
      <Box
        pt={2}
        color='white'
      >
        How might we streamline the process of budgeting to make it <span style={{'font-weight': 'bold', 'color': '#FAA0A0'}}>efficient</span> and <span style={{'font-weight': 'bold', 'color': '#FAA0A0'}}>centralized</span> to improve the overall user experience
      </Box>
    </Box>
  );
}

const Solution= () => {
  return (
    <Box
      pl='20%'
      pr='20%'
      pt={4}
      pb={4}
      bgcolor='#f5f6f7'
    >
      <Box
        id='h1'
        pt={2}
      >
        Solution
      </Box>
      <Box
        pt={2}
      >
        <Box>
        The goal of my solution is to create an application providing real-time user data that is easy to use and analyze trends to assist users in working towards the ability to manage debt and monitor their overall financial health.
        </Box>
        <Box
          className='demo'
        >
          <Box
            alignSelf='center'
          >
            <Box
              pt={2}
              className='solution-header'
            >
              Categorize expenses to budget efficiently and tackle debts
            </Box>
            <Box
              pt={2}
            >
              Sift through each transaction made and sort by category buckets to keep expenses organize
            </Box>
          </Box>
          <Box
            id='demo-gif'
            component='img'
            src={SplurgeGif}
            p={4}
          >
          </Box>

        </Box>

        <Box
          className='demo-even'
        >
          <Box
            alignSelf='center'
          >
            <Box
              pt={2}
              className='solution-header'
            >
              Take a glimpse into an overview of monthly spending
            </Box>
            <Box
              pt={2}
            >
              View real-time transactions itemized or grouped by categories to visualize monthly spending
            </Box>
          </Box>
          <Box
            id='demo-gif'
            component='img'
            src={SplurgeGifTwo}
            p={4}
          />
        </Box>

        <Box
          className='demo'
        >
          <Box
            alignSelf='center'
          >
            <Box
              pt={2}
              className='solution-header'
            >
              Analyze spending habits with detailed graphs
            </Box>
            <Box
              pt={2}
            >
              Sort and filter by month to analyze trends and monitor overall financial health
            </Box>
          </Box>
          <Box
            id='demo-gif'
            component='img'
            src={SplurgeGifThree}
            p={4}
          />
        </Box>
      </Box>
    </Box>
  );
}

const ProjectDetails = () => {
  return (
    <Box
      id='project-details'
    >
      <Box
        display='flex'
        flexDirection='column'
      >
        <Box
          className='project-detail-header'
        >
          Role
        </Box>
        <Box>
          Developer & Designer
        </Box>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
        id='project-detail-languages'
      >
        <Box
          className='project-detail-header'
        >
          Languages
        </Box>
        <Box>
          Python, HTML5, CSS3, React
        </Box>
      </Box>

      <Box
        display='flex'
        flexDirection='column'
      >
        <Box
          className='project-detail-header'
        >
          Tools & Frameworks
        </Box>
        <Box>
          GraphQL, Redux, Figma
        </Box>
      </Box>
    </Box>
  );
}

const Conclusion = () => {
  return (
    <Box
      pl='20%'
      pr='20%'
      pt={4}
      pb={4}
    >
      <Box
        id='h1'
        pt={2}
      >
        Conclusion
      </Box>
      <Box
        pt={2}
      >
        Acknowledging that not all users possess a strong understanding of budgeting concepts, a huge priority of Splurge was simplicity and clarity in the app's design. By presenting budgeting tools in a user-friendly manner we have created a streamlined environment where financial health can be easily monitored. Each individual's financial journey is unique and we recognize that by integrating customized features into our app. Users can personalize their budgeting experience, tailoring it to their specific needs and preferences. 
      </Box>
      <Box
        pt={2}
      >
       Overall, budgeting can be challenging due to various factors but the personalization capabilities of Splurge aims to tackle this and we hope to empower individuals towards their goals of financial freedom.
      </Box>
    </Box>
  )
}

const Splurge  = ({
    name
}) => {
  return (
	<Box>
    <Box
      display='flex'
      justifyContent='center'
      bgcolor='#f5f5f5'
    >
      <Box
        component='img'
        width='50%'
        src={SplurgeCover}
      />
    </Box>

    <Box
      display='flex'
      flexDirection='column'
      id='synthesize-spacing'
      pt={4}
    >
        <Box
          id='title'
        >
          Splurge
        </Box>

        <Box
          pt={2}
        >
          A mobile application to track and categorizes monthly expenses, determining the amount left to splurge.
        </Box>

        <ProjectDetails/>

    </Box>

    <Overview/>

      <Box
        pl='20%'
        pr='20%'
        pt={4}
        pb={4}

      >
        <Box
          id='h1'
        >
          Users & Audiences
        </Box>
        <Box>
          <Box
            pt={2}
            id='h2'  
          >
            Target Users
          </Box>
          <ul>
            <li>
                Young professionals: Recent graduates or individuals in the early stages of their careers who are looking to manage their finances, save money, and establish good financial habits
            </li>
            <li>
                College students: Students who want to track their expenses, manage their limited budgets, and develop responsible financial behaviors while in school
            </li>
            <li>
                Families: Parents or guardians who need to budget for household expenses, track family spending, and plan for future goals such as saving for education, vacations, or emergencies
            </li>
            <li>
                Individuals with debt: People who are working to pay off student loans, credit card debt, or other financial obligations. They may benefit from a budgeting app to allocate funds towards debt repayment, and monitor their overall financial health
            </li>
            <li>
                Travelers and digital nomads: Individuals who frequently travel or work remotely and need to track expenses in different currencies, manage travel budgets, and maintain financial stability while on the move
            </li>
            <li>
                Retirees: Individuals who have entered retirement and want to effectively manage their retirement savings, monitor expenses, and plan for their financial well-being in their post-working years
            </li>
          </ul>
        </Box>
      </Box>
      <ProblemStatement/>
      <Solution/>
      <Conclusion/>
  </Box>
  );
}

export default Splurge;
