import { Link, Typography } from '@mui/material';
import './FrontPage.scss';
import viewSalad from '/salad_still.png'
import createSalad from '/salad_tossed.png'
import generateSalad from '/salad_plate.png'
import { useState } from 'react';

function FrontPage() {

  const [showCreateText, setShowCreateText] = useState(false);
  const [showViewText, setShowViewText] = useState(false);
  const [showGenerateText, setShowGenerateText] = useState(false);
  return (
    <div>zZ
      <div className='grid'>
        <Link
          onMouseEnter={() => setShowCreateText(true)}
          onMouseLeave={() => setShowCreateText(false)}
          href='/create'
          underline='none'>
          <div
            className='grid-item'>
            <img className='grid-img' src={createSalad} alt='Create Salads'></img>
            <Typography className='grid-item-title' variant="h2" component="div" sx={{ flexGrow: 1 }}>
              Create Salad
            </Typography>
            {showCreateText && (
              <Typography className={`grid-item-text ${showCreateText ? "text-anim" : ""}`} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Create your very own salad recipie to take home! Who knows what you will add this time?
              </Typography>
            )}
          </div>
        </Link>
        <Link
          onMouseEnter={() => setShowGenerateText(true)}
          onMouseLeave={() => setShowGenerateText(false)}
          href='/generate'
          underline='none'>
          <div
            className='grid-item'>
            <img className='grid-img' src={generateSalad} alt='Generate Salads'></img>
            <Typography className='grid-item-title' variant="h2" component="div" sx={{ flexGrow: 1 }}>
              Generate Salad
            </Typography>
            {showGenerateText && (
              <Typography className={`grid-item-text ${showGenerateText ? "text-anim" : ""}`} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Looking for a change? Generate a brand new kind of salad based on great combinations! Mmmm!
              </Typography>
            )}
          </div>
        </Link>
        <Link
          onMouseEnter={() => setShowViewText(true)}
          onMouseLeave={() => setShowViewText(false)}
          href='/view'
          underline='none'>
          <div
            className='grid-item'>
            <img className='grid-img' src={viewSalad} alt='View Salads'></img>
            <Typography className='grid-item-title' variant="h2" component="div" sx={{ flexGrow: 1 }}>
              View Salads
            </Typography>
            {showViewText && (
              <Typography className={`grid-item-text ${showViewText ? "text-anim" : ""}`} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                View all salads created by you or the community!
              </Typography>
            )}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default FrontPage
