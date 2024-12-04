import React from 'react';

import { Box } from '@material-ui/core';

import './synthesize.css';

import SynthesizeCover from './images/synthesize-cover.png';
import SynthesizeGif from './images/synthesize-gif.gif';

import SynthesizeGifTwo from './images/synthesize-gif-two.gif';
import SynthesizeGifThree from './images/synthesize-gif-three.gif';

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
        Music production is technical and can present significant barriers that discourage aspiring individuals from exploring this field. As well, up-and-coming creators often struggle to establish connections with other talents and consumers. The goal and purpose behind synthesize is to facilitate the entry of beginners into music production and provide a platform for creators to reach out to a broader audience through song remixes.
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
      Understanding how remixes work
    </Box>

    <Box
      pt={1}
    >
      Tracks are composed of multiple channels of audio layers combined together. These can be broken down into multi-tracks and stems. 
    </Box>
    <Box
      pt={3}
      id='h2'  
    >
      What is a stem?
    </Box>
    <Box
      pt={1}
    >
      Stems refer to a collection of individual distinct sound components, classified into components by mixes such as vocals, bass or drums. Audio stems offer a straightforward approach to working with audio files as they eliminate the need for time-consuming mixing and editing individual components. As well, stems provide flexibility, enabling users to restructure the original composition in unique and creative ways. 
    </Box>

    <Box
      pt={3}
      id='h2'  
    >
      What is a multi-track?
    </Box>
    <Box
      pt={1}
    >
      Multi-track are all of the components separated into their own individual tracks, rather than grouping them together by element. This method allows for greater precision and control over each element of the track. However, it may present a challenge to those who are less experienced with multitrack production.
    </Box>
    {/* <Box
      pt={2}
    >
      Isolating audio stems provides reater flexibility throughout the mixing process by facilitating the addition, removal, manipulation and spatial arrangement of multiple layers within the auditory field.
    </Box> */}

    <Box
      pt={4}
      id='h2'  
    >
      Key Insights:
    </Box>
    <ul>
      <li>
        Isolating audio stems provides greater flexibility throughout the mixing process
      </li>
      <li>
        Multi-track production may be challenging for those less experienced with music production
      </li>
      </ul>
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
        How can we bridge the gap of simplifying the process of <span style={{'font-weight': 'bold', 'color': '#FAA0A0'}}>creating</span> remixes for beginners and establish a network to make <span style={{'font-weight': 'bold', 'color': '#FAA0A0'}}>discovery</span> easier amongst creators/consumers?
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
          The goal of my solution is to develop an experience that allows allow anyone to become a music creator and share their unique vision with others. 
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
              Integrate real-time concurrent stem control
            </Box>
            <Box
              pt={2}
            >
              Manipulate independent stems in real time to have control of creating new remixes
            </Box>
          </Box>
          <Box
            id='demo-gif'
            component='img'
            src={SynthesizeGif}
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
              Discover new artists and be recommended songs
            </Box>
            <Box
              pt={2}
            >
              Have the ability to discover new artists/tracks and save your favorite ones to playlists which increases the reach for up-and-coming artists and consumers
            </Box>
          </Box>
          <Box
            id='demo-gif'
            component='img'
            src={SynthesizeGifTwo}
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
              Automatically isolate audio into respective stems
            </Box>
            <Box
              pt={2}
            >
              Audio uploaded is automatically parsed into vocal, bass, drums stems to allow a simplified process of remixing tracks.
            </Box>
          </Box>
          <Box
            id='demo-gif'
            component='img'
            src={SynthesizeGifThree}
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
        Stem remixing requires a strong sense of arrangement and balance of different elements such as vocals, drums, bass, and other instrumentals in order to develop a cohesive remix. As the audio files are only broken up into 4 respective stems it imposes some creative constraints. Altering the tempo, key or structure of the original song is only accessible through multi-tracks.
      </Box>
      <Box
        pt={2}
      >
        Overall, stem remixing can be a rewarding and creative process, but it also requires a high level of skill and attention to detail. By understanding the potential difficulties and challenges of stem remixing, you can gather more context and educate yourself to create more high-quality and enjoyable remixes.
      </Box>
    </Box>
  )
}

const Synthesize  = ({
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
        src={SynthesizeCover}
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
          Synthesize
        </Box>

        <Box
          pt={2}
        >
          A digital platform for creators to develop song remixes and connect with other creators.
        </Box>

        <Box
          pt={2}
        >
          <a href="https://ernest-lian-synthesize.netlify.app/" target="_blank" rel="noopener noreferrer" style={{'font-weight': 'bold', 'color': '#0000EE'}}>Functionality demo link (works better on Desktop)</a>
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
              Entry level creators with a keen interest in fundamental music production
            </li>
            <li>
              Creators seeking to establish connections with other talents
            </li>
            <li>
              Creators aiming to diversify their audience reach
            </li>
            <li>
              Consumers with a keen interest in discovering new musical talents across a wide range of genres
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

export default Synthesize;
