import React from 'react';

import { Box } from '@material-ui/core';

import './spotilytics.css';

import SpotilyticsCover from './images/spotilytics-cover.png';
import SpotilyticsDatabase from './images/spotilytics-database.png';
import SpotilyticsArchitecture from './images/spotilytics-architecture.png';

import SpotilyticsGif from './images/spotilytics-gif.gif';
import SpotilyticsGifTwo from './images/spotilytics-gif-two.gif';

import Github from './images/github.png';

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
        Streaming platform analytics provide insights into a user’s listening patterns and satisfies an individual’s curiosity about their own musical preferences. This can also uncover unexpected discoveries such as new artists or genres they may have not been aware of. This made me curious of whether the tempo and energy are correlated with particular genres. The goal of Spotilytics is to leverage data-driven insights to recommend tracks that align with the user's unique preferences.
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
      Understanding what tempo is
    </Box>

    <Box
      pt={1}
    >
      Tempo is a fundamental element of music that can greatly influence the mood and energy of a piece of music. It is measured in beats per minute (BPM) and refers to the speed or pace at which a piece of music is performed.
    </Box>
    <Box
      pt={1}
    >
      A higher tempo indicates a faster pace, while a lower tempo suggests a slower pace. For example, a lively dance track might have a high tempo of around 120 BPM, creating an energetic and upbeat feel, whereas a soothing ballad might have a lower tempo of around 60 BPM, evoking a relaxed and mellow atmosphere.
    </Box>
    <Box
      pt={3}
      id='h2'  
    >
      Understanding what energy is
    </Box>
    <Box
      pt={1}
    >
      The energy of a song refers to its perceived level of intensity, liveliness, and overall emotional impact. It represents the dynamic qualities that can evoke emotions and engage listeners. Energy is a subjective aspect of music, varying from songs and genres.
    </Box>
    <Box
      pt={1}
    >
      Several factors contribute to the energy of a song, including the tempo, instrumentation, vocal delivery, dynamics, rhythm, and overall production. A fast-paced tempo, aggressive or driving rhythms, and powerful instrumentation can often create a high-energy feel, whereas a slower tempo, softer instrumentation, and gentler vocal delivery may evoke a lower-energy ambiance.
    </Box>
    <Box
      pt={4}
      id='h2'  
    >
      Key Insights:
    </Box>
    <ul>
      <li>
        Significant correlation between the tempo of a song and its genre. Studies have shown that genres such as EDM, hip-hop, and pop tend to have higher tempos, while classical, jazz, and folk music tend to have lower tempos.
      </li>
      <li>
        Correlation between the energy of a song and its genre. Studies have concluded that high-energy genres such as metal, punk, and techno tend to have higher energy levels, while low-energy genres such as country and folk music tend to have lower energy levels.
      </li>
    </ul>
    <Box
      pt={4}
    >
      Overall, while there is some evidence to support the hypothesis that the tempo and energy of a song are correlated with its associated genre, it is important to note that there may be exceptions and variations within each genre.
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
        How can we gather more in depth <span style={{'font-weight': 'bold', 'color': '#FAA0A0'}}>analytics</span> about our streaming patterns and simplify the song <span style={{'font-weight': 'bold', 'color': '#FAA0A0'}}>recommendation</span> process to be personalized and align with the user’s unique preferences?
        </Box>
    </Box>
  );
}

const Requirements = () => {
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
        Requirements
      </Box>

      <Box
        pt={2}
      >
        <Box>
        Collected the requirements for the project to have a better scope prior to the development
        </Box>
      </Box>

      <Box
        pt={2}
        pb={2}
        id='h2'  
      >
        View Analytics
      </Box>
      <Box
        pb={1}
      >
        An authorized user may receive their personalized analytics which includes the following:
      </Box>
      <ul>
        <li>Top artists<br></br></li>
        <li>Top tracks<br></br></li>
        <li>Analytics regarding tempo, length & popularity<br></br></li>
        <li>Notifications of any errors occurring while gathering personal analytics</li>
      </ul>

      <Box
        pt={2}
        pb={2}
        id='h2'  
      >
        Creating Playlists
      </Box>
      <Box
        pb={1}
      >
        An authorized user may create a playlist using the recommendations based on their past streaming history
      </Box>
      <ul>
        <li>The playlist will be created on their Spotify account using the recommendations based on past streaming history</li>
        <li>Any errors during the playlist creation processed will be relayed back to the user</li>
      </ul>

      <Box
        pt={2}
        pb={2}
        id='h2'  
      >
        Login to Spotify
      </Box>
      <Box
        pb={1}
      >
        A user may log into Spotify using OAuth 2.0
      </Box>
      <ul>
        <li>Prompt the user to log onto their spotify account to have access to their account's information<br></br></li>
      </ul>
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
         The goal of my solution is to develop an experience that provides personalized song recommendations that align with the user’s unique preferences.
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
              Receive analytics to develop better insights on past streaming history
            </Box>
            <Box
              pt={2}
            >
              Process the retrieved data to generate meaningful analytics and insights based on analyzing listening patterns, identifying favorite genres, artists, and tracks.
            </Box>
          </Box>
          <Box
            id='demo-gif'
            component='img'
            src={SpotilyticsGif}
            p={4}
          />
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
              Discover new tracks and genres personalized your streaming history
            </Box>
            <Box
              pt={2}
            >
              Develop new personalized playlists that sync to your Spotify account to assist in discovering new subgenres or niche artists within your favorite genres.
            </Box>
          </Box>
          <Box
            id='demo-gif'
            component='img'
            src={SpotilyticsGifTwo}
            p={4}
          />
        </Box>
      </Box>
    </Box>
  );
}

const Database = () => {
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
        Database
      </Box>
      <Box>
        <Box
          pt={2}
          pb={2}
        >
          A normalized database was integrated as expensive operations were avoided which ultimately prevents any redundancy of storage
        </Box>
        <Box
          component='img'
          width='100%'
          src={SpotilyticsDatabase}
        />

      </Box>
    </Box>
  );
}

const Architecture = () => {
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
        Architecture
      </Box>
      <Box
        component='img'
        width='100%'
        src={SpotilyticsArchitecture}
      />
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
          Redux, Figma
        </Box>
      </Box>
    </Box>
  );
}

const ImportantLinks = () => {
  return (
    <Box
      display='flex'
      flexDirection='column'
      pb={4}
    >
      <Box
        className='project-detail-header'
      >
        Important Links
      </Box>
      <Box
        display='flex'
        pt={2}
      >
        <Box
            component='img'
            width='100%'
            src={Github}
            class='spotilytics-information-icons'
        />
        <a href="https://github.com/ernest-lian/Spotilytics" target="_blank" rel="noopener noreferrer" style={{'color': '#0000FF', 'text-decoration': 'none'}}>Github Source Code</a>
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
      bgcolor='#f5f6f7'
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
        There is a correlation in regards to the tempo of a song and its genre. Certain genres such as EDM, hip-hop and pop have higher tempos while classical jazz, and folk music tend to have lower tempos. On the other hand, the energy of a song and its genre also has a correlation as metal, punk and techno tend to have higher energy levels while low-energy genres such as country and folk lean towards having lower energy.
      </Box>
      <Box
        pt={2}
      >
        Overall, it is important to recognize that there are exceptions and variations within each genre and the interpretation and classification of a piece of track can be completely subjective.
      </Box>
    </Box>
  )
}

const Spotilytics  = ({
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
        src={SpotilyticsCover}
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
          Spotilytics
        </Box>

        <Box
          pt={2}
        >
          An analytic platform leveraging past streaming history on Spotify to provide valuable insights into listening habits and recommends new tracks based on the mood and energy to align with the user’s preferences.
        </Box>

        <ProjectDetails/>
        <ImportantLinks/>
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
              Spotify users can analyze and have a better understanding of their streaming trends that can assist them to discover new songs and genres
            </li>
            <li>
              Music critics could analyze the correlation between tempo, energy, and genre to gain insights into the characteristics of different genres and subgenres, and better understand what makes a particular song or artist successful
            </li>
            <li>
            Musicians and producers can gain insights into user preferences and adjust their creative strategies accordingly
            </li>
            <li>
              Music researchers could be potential stakeholders who could use Spotilytics to conduct further studies and gain deeper insights into the relationship between tempo, energy, and genre. By using Spotilytics as a data source, music researchers can analyze trends and patterns in music consumption and create new theories about the way people listen to music.
            </li>
            <li>
              Record labels are another potential stakeholder who could use Spotilytics to gain insights into user preferences and adjust their marketing strategies accordingly
            </li>
          </ul>
        </Box>
      </Box>
      <ProblemStatement/>
      <Requirements/>
      <Solution/>
      <Database/>
      <Architecture/>
      <Conclusion/>
  </Box>
  );
}

export default Spotilytics;
