import React, { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItemIcon,
} from '@mui/material';
import { ExpandLess, ExpandMore, Folder } from '@mui/icons-material';

const categories = [
  {
    id: '1',
    name: 'Electronics', // Parent A
    children: [
      { id: '2', name: 'Mobile Phones' }, // Child A1
      //{ id: '3', name: 'Computers & Accessories' },
      {
        id: '4',
        name: 'TV & Video', // Child Parent A2
        children: [
          { id: '5', name: 'LED TVs' }, // Child A21
          { id: '6', name: 'Home Theater Systems' }, // Child A22
        ],
      },
    ],
  },
  {
    id: '7',
    name: 'Home & Garden', // Parent B
    children: [
      { id: '8', name: 'Furniture' }, // Child B1
      { id: '9', name: 'Kitchen Appliances' }, // Child B2
      {
        id: '10',
        name: 'Outdoor Equipment', // Child Parent B3
        children: [
          { id: '11', name: 'Garden Tools' },
          { id: '12', name: 'Patio Furniture' },
        ],
      },
    ],
  },
];

function Sidebar() {
  const [openNodes, setOpenNodes] = useState({});

  const handleToggle = (nodeId, parentId) => {
    setOpenNodes((prevOpenNodes) => {
      const newOpenNodes = { ...prevOpenNodes };

      // Toggle the current node
      newOpenNodes[nodeId] = !newOpenNodes[nodeId];

      // If the node is being opened, close sibling nodes
      if (newOpenNodes[nodeId]) {
        if (parentId != null) {
          const parentNode = findNodeById(categories, parentId);
          if (parentNode && parentNode.children) {
            parentNode.children.forEach((child) => {
              if (child.id !== nodeId) {
                newOpenNodes[child.id] = false;
                closeDescendants(child, newOpenNodes);
              }
            });
          }
        } else {
          // For root level nodes
          categories.forEach((node) => {
            if (node.id !== nodeId) {
              newOpenNodes[node.id] = false;
              closeDescendants(node, newOpenNodes);
            }
          });
        }
      } else {
        // If the node is being closed, also close all its descendants
        closeDescendants(findNodeById(categories, nodeId), newOpenNodes);
      }

      return newOpenNodes;
    });
  };

  const closeDescendants = (node, openNodesMap) => {
    if (node.children) {
      node.children.forEach((child) => {
        openNodesMap[child.id] = false;
        closeDescendants(child, openNodesMap);
      });
    }
  };

  const findNodeById = (nodes, id) => {
    for (let node of nodes) {
      if (node.id === id) {
        return node;
      }
      if (node.children) {
        const childNode = findNodeById(node.children, id);
        if (childNode) {
          return childNode;
        }
      }
    }
    return null;
  };

  const renderCategories = (nodes, parentId = null, depth = 0) =>
    nodes.map((category) => {
      const hasChildren = category.children && category.children.length > 0;
      const isOpen = !!openNodes[category.id];

      const handleClick = () => {
        if (hasChildren) {
          handleToggle(category.id, parentId);
        }
      };

      return (
        <div key={category.id}>
          <ListItemButton onClick={handleClick} sx={{ pl: depth * 2 }}>
            <ListItemIcon>
            </ListItemIcon>
            <ListItemText primary={category.name} />
            {hasChildren ? (isOpen ? <ExpandLess /> : <ExpandMore />) : null}
          </ListItemButton>
          {hasChildren && (
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {renderCategories(category.children, category.id, depth + 1)}
              </List>
            </Collapse>
          )}
        </div>
      );
    });

  return <List component="nav">{renderCategories(categories)}</List>;
}

export default Sidebar;
