import React, { useState } from "react";
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const ReviewPanel = () => {
  const [fullText, setFullText] = useState('metin metin metin metin metin metin metin metinmetin metin metin metinmetin metin metin metinmetin metin metin metin');
  const [showModal, setShowModal] = useState(false);

  const words = fullText.split(' ');
  const visibleText = words.slice(0, 15).join(' ');
  const hasMore = words.length > 15;

  const handleMaximize = () => {
    setShowModal(true);
  };

  const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
      color: theme.palette.action.disabled,
    },
  }));
  

  const customIcons = {
    1: {
      icon: <SentimentVeryDissatisfiedIcon color="error" />,
      label: 'Very Dissatisfied',
    },
    2: {
      icon: <SentimentDissatisfiedIcon color="error" />,
      label: 'Dissatisfied',
    },
    3: {
      icon: <SentimentSatisfiedIcon color="warning" />,
      label: 'Neutral',
    },
    4: {
      icon: <SentimentSatisfiedAltIcon color="success" />,
      label: 'Satisfied',
    },
    5: {
      icon: <SentimentVerySatisfiedIcon color="success" />,
      label: 'Very Satisfied',
    },
  };

  function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }
  
  IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
  };
  
  return (
<div className="bg-gradient-to-r
            from-blue-100 to-blue-300 dark:bg-gradient-to-r dark:from-slate-600 dark:to-gray-900 p-4">
    
    <div className="mx-auto bg-white rounded-lg p-4 md:w-2/6 w-11/12 flex flex-wrap">
      <div className="w-12 h-12 rounded-full bg-gray-800 mr-4"></div>
      <div className="flex flex-col justify-end items-start">
        <p className="text-lg font-medium">Numele persoanei</p>
        <div className="mb-4">
         <StyledRating
            name="highlight-selected-only"
            defaultValue={2}
            IconContainerComponent={IconContainer}
            getLabelText={(value) => customIcons[value].label}
            highlightSelectedOnly
         />
        </div>
      </div>
      <div>
        <p className="mt-4 md:mt-0">
          {visibleText}
          {hasMore && (
            <button onClick={handleMaximize} className="ml-2 text-blue-500 hover:text-blue-800 text-s">
              Maximizare
            </button>
          )}
        </p>
        {showModal && (
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg max-w-3xl">
              <p className="mt-4">{fullText}</p>
              <button onClick={() => setShowModal(false)} className="mt-4 ml-auto block text-blue-600 hover:text-blue-800">
                Închide
              </button>
            </div>
          </div>
        )}
      </div>
    </div>

</div>
  );
};

export default ReviewPanel;
