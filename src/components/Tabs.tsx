import React, { FC, ReactElement, useEffect, useState } from 'react';

const selectedClass = 'border-opacity-100';
interface TabProps {
  selected?: boolean;
  onClick?: () => void;
}

export const Tab: FC<TabProps> = ({ children, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`p-16 font-bold hover:bg-gray-100 border-b-4 border-blue-400  ${
        selected ? selectedClass : 'border-opacity-0'
      }`}
      role="tab"
    >
      {children}
    </button>
  );
};

interface TabsProps {
  onTabChange?: (tabIndex: number) => void;
  defaultIndex: number;
}
export const Tabs: FC<TabsProps> = ({
  children,
  onTabChange,
  defaultIndex,
}) => {
  const [isFirst, setIsFirst] = useState(true);
  const [selectedIndex, setIndex] = useState<number>(defaultIndex);

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      return;
    }
    onTabChange?.(selectedIndex);
  }, [selectedIndex]);

  return (
    <div role="tablist">
      {React.Children.map(children, (child, index) => {
        return React.cloneElement(child as ReactElement, {
          selected: selectedIndex === index,
          onClick: () => {
            const anyChild = child as any;
            if (anyChild.props?.onClick) {
              anyChild.props.onClick();
            }
            setIndex(index);
          },
        });
      })}
    </div>
  );
};
