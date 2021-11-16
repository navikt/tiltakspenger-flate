import React, { FC, useEffect, useState } from 'react';

const selectedClass = 'border-opacity-100';
interface TabProps {
  selected?: boolean;
  onClick?: () => void;
}

export const Tab: FC<TabProps> = ({ children, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-16 font-bold hover:bg-gray-100 border-b-4 border-blue-400 border-opacity-0 ${
        selected ? selectedClass : ''
      }`}
      role="tab"
    >
      {children}
    </button>
  );
};

interface TabsProps {
  onTabChange?: (tabIndex: number) => {};
}
export const Tabs: FC<TabsProps> = ({ children, onTabChange }) => {
  const [selectedIndex, setIndex] = useState(0);

  useEffect(() => {
    onTabChange?.(selectedIndex);
  }, [onTabChange, selectedIndex]);

  return (
    <div role="tablist">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child as any, {
          selected: selectedIndex === index,
          onClick: () => setIndex(index),
        });
      })}
    </div>
  );
};
