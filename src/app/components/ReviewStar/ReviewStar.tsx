import React, { useState, useEffect } from 'react';
import { Star } from '@phosphor-icons/react/dist/ssr';

interface StarIconProps {
  index: number;
  hoveredIndex: number | null;
  selectedIndexes: number[];
  onSelect: (index: number) => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onStarClick: (index: number) => void; // Nova prop para lidar com o clique no ícone
}

interface ReviewStarProps {
  onSelectedStarChange: (index: number | null) => void;
}

const StarRating: React.FC<ReviewStarProps> = ({ onSelectedStarChange }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentSelected, setCurrentSelected] = useState<number | null>(null);
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);

  useEffect(() => {
    onSelectedStarChange(currentSelected);
  }, [currentSelected, onSelectedStarChange]);

  const handleSelect = (index: number) => {
    const newSelectedIndexes = selectedIndexes.includes(index)
      ? selectedIndexes.slice(0, selectedIndexes.indexOf(index))
      //@ts-ignore
      : [...Array(index + 1).keys()];

    setSelectedIndexes(newSelectedIndexes);
  };

  const handleIconClick = (index: number) => {
    setCurrentSelected(index + 1);
    // Aqui você pode realizar a ação desejada com o índice selecionado
  };

  const stars = Array(5).fill('').map((_, index) => (
    <StarIcon
      key={index}
      index={index}
      hoveredIndex={hoveredIndex}
      selectedIndexes={selectedIndexes}
      onSelect={handleSelect}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onStarClick={handleIconClick}
    />
  ));

  return (
    <div className="flex">
      {stars}
    </div>
  );
};

const StarIcon: React.FC<StarIconProps> = ({ index, hoveredIndex, selectedIndexes, onSelect, onMouseEnter, onMouseLeave, onStarClick }) => {
  const isHovered = index <= (hoveredIndex ?? -1);
  const isSelected = selectedIndexes.includes(index);

  const weightStyle = isSelected || isHovered ? 'fill' : 'regular';

  return (
    <Star
      className="h-3 w-3 lg:h-6 lg:w-6 cursor-pointer"
      color="#8381D9"
      weight={weightStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => {
        onSelect(index);
        onStarClick(index);
      }}
    />
  );
};

export default StarRating;
