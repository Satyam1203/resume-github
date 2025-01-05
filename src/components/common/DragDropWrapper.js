import React from 'react';
import { Wrapper } from '../Resume/styles';
import { swapElements } from '../../utils';

function DragDropWrapper({ children, ...props }) {

    const onDragStart = (e) => {
        e.dataTransfer.setData("section", props.id);
    }

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const onDrop = (e) => {
        e.preventDefault();

        const draggedNodeId = e.dataTransfer.getData("section");
        const draggedNode = document.getElementById(draggedNodeId);
        const targetNode = e.target.closest("div.draggable-item");

        swapElements(draggedNode, targetNode);

    }

    return (
        <Wrapper 
            className='draggable-item'
            draggable="true" 
            onDragStart={onDragStart} 
            onDragOver={onDragOver} 
            onDrop={onDrop}
            {...props}
        >
            {children}
        </Wrapper>
    )
}

export default DragDropWrapper;