
import * as React from 'react';
import clsx from 'clsx';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { RiAppsFill } from "react-icons/ri";
import { HiMiniFolderOpen } from "react-icons/hi2";
import { BsBasket3Fill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { SiAuth0 } from "react-icons/si";
import { IoCalendarSharp } from "react-icons/io5";

import { MdArrowDropDown } from "react-icons/md";
import { MdArrowRight } from "react-icons/md";
import { SvgIconProps } from '@mui/material/SvgIcon';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import {
  TreeItem2Content,
  TreeItem2IconContainer,
  TreeItem2Root,
  TreeItem2GroupTransition,
} from '@mui/x-tree-view/TreeItem2';
import { useTreeItem2, UseTreeItem2Parameters } from '@mui/x-tree-view/useTreeItem2';
import { TreeItem2Provider } from '@mui/x-tree-view/TreeItem2Provider';
import { TreeItem2Icon } from '@mui/x-tree-view/TreeItem2Icon';

declare module 'react' {
  interface CSSProperties {
    '--tree-view-color'?: string;
    '--tree-view-bg-color'?: string;
  }
}

interface StyledTreeItemProps
  extends Omit<UseTreeItem2Parameters, 'rootRef'>,
    React.HTMLAttributes<HTMLLIElement> {
  bgColor?: string;
  bgColorForDarkMode?: string;
  color?: string;
  colorForDarkMode?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
}

const CustomTreeItemRoot = styled(TreeItem2Root)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));

const CustomTreeItemContent = styled(TreeItem2Content)(({ theme }) => ({
  marginBottom: theme.spacing(0.3),
  color: theme.palette.text.secondary,
  // borderRadius: theme.spacing(2),
  paddingRight: theme.spacing(1),
  fontWeight: theme.typography.fontWeightMedium,
  '&.expanded': {
    fontWeight: theme.typography.fontWeightRegular,
    backgroundColor: "#FF8E29",
    color:"#ffffff",
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&.focused, &.selected, &.selected.focused': {
    // backgroundColor: `var(--tree-view-bg-color, ${theme.palette.action.selected})`,
    backgroundColor: "#FF8E29",
    color:"#ffffff",
  },
}));

const CustomTreeItemIconContainer = styled(TreeItem2IconContainer)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

const CustomTreeItemGroupTransition = styled(TreeItem2GroupTransition)(
  ({ theme }) => ({
    marginLeft: 0,
    // backgroundColor: "#FF8E29",
    [`& .content`]: {
      paddingLeft: theme.spacing(2),
    },
  }),
);

const CustomTreeItem = React.forwardRef(function CustomTreeItem(
  props: StyledTreeItemProps,
  ref: React.Ref<HTMLLIElement>,
) {
  const theme = useTheme();
  const {
    id,
    itemId,
    label,
    disabled,
    children,
    bgColor,
    color,
    labelIcon: LabelIcon,
    labelInfo,
    colorForDarkMode,
    bgColorForDarkMode,
    ...other
  } = props;

  const {
    getRootProps,
    getContentProps,
    getIconContainerProps,
    getLabelProps,
    getGroupTransitionProps,
    status,
  } = useTreeItem2({ id, itemId, children, label, disabled, rootRef: ref });

  const style = {
    '--tree-view-color': theme.palette.mode !== 'dark' ? color : colorForDarkMode,
    '--tree-view-bg-color':
      theme.palette.mode !== 'dark' ? bgColor : bgColorForDarkMode,
  };

  return (
    <TreeItem2Provider itemId={itemId}>
      <CustomTreeItemRoot {...getRootProps({ ...other, style })}>
        <CustomTreeItemContent
          {...getContentProps({
            className: clsx('content', {
              expanded: status.expanded,
              selected: status.selected,
              focused: status.focused,
            }),
          })}
        >
          <CustomTreeItemIconContainer {...getIconContainerProps()}>
            <TreeItem2Icon status={status} />
          </CustomTreeItemIconContainer>
          <Box
            sx={{
              display: 'flex',
              flexGrow: 1,
              alignItems: 'center',
              p: 0.5,
              pr: 0,
            }}
          >
            <Box component={LabelIcon} color="inherit" sx={{ mr: 1 }} />
            <Typography
              {...getLabelProps({
                variant: 'body2',
                sx: { display: 'flex', fontWeight: 'inherit', flexGrow: 1 },
              })}
            />
            <Typography variant="caption" color="inherit">
              {labelInfo}
            </Typography>
          </Box>
        </CustomTreeItemContent>
        {children && (
          <CustomTreeItemGroupTransition {...getGroupTransitionProps()} />
        )}
      </CustomTreeItemRoot>
    </TreeItem2Provider>
  );
});

function EndIcon() {
  return <div style={{ width: 24 }} />;
}

export default function GmailTreeView() {
  return (
    <SimpleTreeView
      aria-label="gmail"
      defaultExpandedItems={['3']}
      defaultSelectedItems="5"
      slots={{
        expandIcon: MdArrowRight,
        collapseIcon: MdArrowDropDown,
        endIcon: EndIcon,
      }}
      sx={{ flexGrow: 1 }}
    >
      <CustomTreeItem itemId="1" label="Home" labelIcon={RiAppsFill} />
      <CustomTreeItem itemId="2" label="Pages" labelIcon={HiMiniFolderOpen} />
      <CustomTreeItem itemId="3" label="Categories" labelIcon={RiAppsFill}>
        <CustomTreeItem
          itemId="5"
          label="Social" labelIcon={FaBell}      
        />
        <CustomTreeItem
          itemId="6"
          label="Updates" labelIcon={FaBell}          
        />
        <CustomTreeItem
          itemId="7"
          label="Forums" labelIcon={FaBell}        />
        <CustomTreeItem
          itemId="8"
          label="Promotions" labelIcon={FaBell}        />
      </CustomTreeItem>
      <CustomTreeItem itemId="4" label="Ecommerce" labelIcon={BsBasket3Fill} />
      <CustomTreeItem itemId="9" label="Notification" labelIcon={FaBell} />
      <CustomTreeItem itemId="10" label="Message" labelIcon={BiSolidMessageRoundedDots} />
      <CustomTreeItem itemId="12" label="Authentication" labelIcon={SiAuth0} />
      <CustomTreeItem itemId="13" label="Calendar" labelIcon={IoCalendarSharp} />
    </SimpleTreeView>
  );
}