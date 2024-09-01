// Import necessary dependencies
import React from 'react';
import { IconType } from 'react-icons';

// Define interface for component props
interface ClickableIconProps {
  onClick: () => void;
  size: number;
  color: string;
  icon: IconType;
}

// Create the ClickableIcon component
const ClickableIcon: React.FC<ClickableIconProps> = ({ onClick, size, color, icon: Icon}) => {
  return (
    <Icon
      onClick={onClick}
      size={size}
      color={color}
      style={{ cursor: 'pointer', paddingRight: '15px' }} // Ensure the cursor changes to a pointer on hover
    />
  );
};

export default ClickableIcon;
